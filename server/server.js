import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express();
import mongoose from 'mongoose'
import connectDB from './config/connectdb.js'
import cors from 'cors'
import votersModel from './models/voters.js';


const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors());
connectDB(DATABASE_URL)
app.use(express.json())

// app.get('/insert', async (req,res)=>{
//     const voter = new voterModel({name: 'don', username: "farhan12", password:"1234",cnic: "1730138535899", address: "hajicamp", constituency:"jj"})
//     await voter.save();
//     res.send('data inserted')
// })
// app.get('/read', (req,res)=>{
//     friendModel.find({},(err,result)=>{
//         if (err) {
//             res.send(err);
            
//         }
//         else{
//             res.send(result);
//         }
//     }
//     )

    
// })


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })