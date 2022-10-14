import express, { application } from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import mongoose from 'mongoose'
import userpass from './userPass.js'
import referral from './referral.js'
import userdetails from './userdetails.js'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import 'ejs'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import child_process from 'child_process'
import cookieParser from "cookie-parser";
import referred from './referred.js'
import chats from './chats.js'


const app = express()

const port=process.env.PORT || 8080

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin:'http://192.168.211.189:3001'
}))
app.use(cookieParser())
dotenv.config()

app.set('view engine', 'ejs')

mongoose.connect('mongodb+srv://vishal:Cluster2004@cluster0.btbmdim.mongodb.net/CryptoBot?retryWrites=true&w=majority', (err)=>console.log('connected'))
const db=mongoose.connection

// Signup Login Validation + DB Registering
app.get('/signup/checkUser', (req, res)=>{
    userpass.find({user:req.query.user}, (err, data)=>{
        console.log(data);
        if (err) throw err;
        if (data.length==0){
            res.json('1')
        }else{
            res.json('0')
        }
    })    
})

app.get('/signup/checkPass', (req, res)=>{
    const nums=[1,2,3,4,5,6,7,8,9,0]
    const alphas='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    console.log('checking pass');
    const pass=req.query.pass
    
    let haveNum=false
    let haveAlpha=false
    let haveSymb=true
    
    for (let i of pass){
        for (let i2 of nums){
            if (i==i2){
                haveNum=true
                break
            }
        }
    }
    for (let i3 of pass){
        for (let i4 of alphas){
            if (i3==i4){
                haveAlpha=true
                break
            }
        }
    }
    let alphanums=0
    for (let i5 of pass){
        for (let i6 of 'abcdefghijklmnopqrstuvwxyz1234567890'){
            if (pass!=''){
                if (i5==i6){
                    alphanums++
                }
            }
        }
    }
    
    if (alphanums==pass.length){
        haveSymb=false
    }else{
        haveSymb=true
    }

    if (haveAlpha && haveNum && haveSymb){
        res.json('1')
    }else{
        res.json('0')
    }

})

app.post('/signup', (req, res)=>{
    console.log('signing up');
    async function hash(){
        let hashedPass = await bcrypt.hash(req.body.pswd, 10)
        console.log(hashedPass.toString());
        const randomBytes=crypto.randomBytes(2).toString('hex')
        const rid=req.body.user+randomBytes.toString()
        userpass.create({user:req.body.user, name:req.body.name, pswd:hashedPass.toString(), rid:rid}, (err)=>{console.log(err);})
        referral.create({user:req.body.user, referralId:rid, referredUsers:[]})
        userdetails.create({name:req.body.name, username:req.body.user, totalInvestment:0, totalEarned:0, earnedPercentage:0, totalReferrals:0, license:'', bot:''})
        res.redirect('http://192.168.211.189:3001/')
        userpass.find({rid:req.body.rid}, (err, data)=>{
            const user=data[0].user
            referred.create({referredBy:user, referred:req.body.user})
        })
        chats.create({user:req.body.user, chat:[]})
    }
    hash() 
})


app.post('/login', (req, res)=>{
    console.log(req.body.user)
    userpass.find({user:req.body.user}, (err, data)=>{
        console.log(data)
        if (data.length==0){
            res.render('afterLogin', {exists:false, key:'', correct:false})
            console.log('doesnt exists');
        }else{
            async function checkCorrect(){
                const exists=await bcrypt.compare(req.body.pswd, data[0].pswd)
                if (exists.toString()=='true'){
                    console.log(process.env.SECRET_TOKEN)
                    const key=jwt.sign({user:req.body.user}, process.env.SECRET_TOKEN, {expiresIn: '6h'})
                    console.log(key);
                    res.render('afterLogin', {exists:true, correct:true, key:key})
                    console.log('correct pass');
                }else{
                    res.render('afterLogin', {exists:true, correct:false, key:''})
                    console.log('wrong pass');
                }
            }
            checkCorrect()
        }
    })
})

app.get('/sendTeleAlert', (req, res)=>{

})

app.post('/refer', (req, res)=>{
    // transporter.MailMessage({
    //     // from: 'sender@example.com',
    //     to: 'vishalvishwajeet422@gmail.com',
    //     subject: 'Message',
    //     text: 'I hope this message gets delivered!'
    // }, (err, info) => {
    //     console.log(info.envelope);
    //     console.log(info.messageId);
    // })UYJH67

    const transporter=nodemailer.createTransport({
        host: 'smtp.gmail.com',
        // port: 465,
        // secure: true, // use SSL
        auth: {
            user: 'sample.email.trading.bot@gmail.com',
            pass: 'mtwzctqjhrhgfptq'
        }
    })

    const mailOptions={
        from:'sample.email.trading.bot@gmail.com',
        to:req.body.email,
        subject:'Sending Email from NodeJS',
        text:`Hey ${req.body.name}, You are referred by Alex Pina`
    }

    transporter.sendMail(mailOptions, (err)=>{
        if(err) throw err;
        console.log('Email sent')
    })

    // referral.find({user:})
    const user=jwt.verify(req.cookies['key'], process.env.SECRET_TOKEN).user
    referral.find({user:user}, (err, data)=>{
        const rid=data[0]['referralId']
        oldArr=data[0]['referredUsers']
        let newArr=oldArr
        newArr.push(req.body.email)
        referral.find({user:user}).remove().exec()
        referral.create({user:user, referralId:rid, referredUsers:newArr})
    })
})

app.get('/getReferralId', (req, res)=>{
    const jwtKey=req.query.key.toString().slice(4)
    const user=jwt.verify(jwtKey, process.env.SECRET_TOKEN).user
    userpass.find({user:user}, (err, data)=>{
        if (err) throw err;
        res.json(data[0].rid)
    })
})

app.get('/adminLogin', (req, res)=>{
    res.sendFile('E:/OneDrive/Desktop/Mern/CryptoBot/server/abcd.html')
})

// ADMIN PANEL FROM HERE !!!!!
// ADMIN PANEL FROM HERE !!!!!
// ADMIN PANEL FROM HERE !!!!!

app.get('/admin-get-users', (req, res)=>{
    userdetails.find({}, (err, data)=>{
        if (err) throw err;
        res.json(data)
    })
})

app.get('/removeAccount', (req, res)=>{
    const user=req.query.user
    console.log(user)
    userpass.find({user:user}).remove().exec()
    userdetails.find({username:user}).remove().exec()
    referral.find({user:user}).remove().exec()
    res.end()
})

app.get('/sendQuery', (req, res)=>{
    console.log('sending query')
    const jwtKey=req.query.key.toString().slice(4)
    const user=jwt.verify(jwtKey, process.env.SECRET_TOKEN).user
    console.log('user=>', user)
    let newChats=[]
    chats.find({user:user}, (err, data)=>{
        if (err) throw err;
        console.log('data=>', data)
        const oldChats=data[0].chat
        console.log('oldchats=>', oldChats)
        const newMsg={'user':req.query.msg}
        let newMsgs=oldChats
        newMsgs.push(newMsg)
        newChats=newMsgs
        console.log('newchats=>', newMsg)
        console.log('newchats=>', newMsgs)
        chats.find({user:user}).remove().exec()
        chats.create({user:user, chat:newChats})
    })
})

app.get('/sendQueryReply', (req, res)=>{
chats.find({user:req.query.user}, (err, data)=>{
    if(err) throw err;
    const oldChats=data[0].chat
    const newMsg={'admin':req.query.msg}
    oldChats.push(newMsg)
    chats.findOneAndUpdate({user:user}, {chat:oldChats})
})
})

app.get('/getChats', (req, res)=>{
    const jwtKey=req.query.key.toString()
    const user=jwt.verify(jwtKey, process.env.SECRET_TOKEN).user
    chats.find({user:user}, (err, data)=>{
        if(err) throw err;
        console.log(data[0].chat)
        res.json(data[0].chat)
    })
})

app.get('/getName', (req, res)=>{
    const jwtKey=req.query.key.toString()
    const user=jwt.verify(jwtKey, process.env.SECRET_TOKEN).user
    userdetails.find({username:user}, (err, data)=>{
        if(err) throw err;
        res.json(data[0].name)
    })
})


const spawn = child_process.spawn
const pythonProcess = spawn('python',["E:/OneDrive/Desktop/Mern/CryptoBot/server/trial.py", 'aaa'])
pythonProcess.stdout.on('data', (data) => {
    console.log(data)
});

app.listen(port)

// another route for each users details elaborated, transactions with desc
// queries
// edit faq section
// referrals also