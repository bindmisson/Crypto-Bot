import express, { application } from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import 'ejs'


const app = express()

const port=process.env.PORT || 8080

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({
    origin:'http://localhost:3000'
}))
dotenv.config()



app.listen(port)
