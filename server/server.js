import express, { application } from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import mongoose from 'mongoose'
import userpass from './userPass.js'
import referral from './referral.js'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import 'ejs'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import child_process from 'child_process'


const app = express()

const port=process.env.PORT || 8080

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin:'http://192.168.162.189:3000'
}))
dotenv.config()

app.set('view engine', 'ejs')

mongoose.connect('mongodb+srv://vishal:Cluster2004@cluster0.btbmdim.mongodb.net/CryptoBot?retryWrites=true&w=majority', (err)=>console.log('connected'))
mongoose.connection

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
        res.redirect('http://192.168.162.189:3000/')
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
})

const spawn = child_process.spawn
const pythonProcess = spawn('python',["E:/OneDrive/Desktop/Mern/CryptoBot/server/trial.py", 'aaa'])
pythonProcess.stdout.on('data', (data) => {
    console.log(data)
});


app.listen(port)