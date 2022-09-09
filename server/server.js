import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express();
import mongoose from 'mongoose'
import connectDB from './config/connectdb.js'
import cors from 'cors'
import UsersModel from './models/users.js';
import RolesModel from './models/role.js';
// import UserssModel from './models/users.js';


const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors());
connectDB(DATABASE_URL)
app.use(express.json())
app.get('/insertrole', async (req,res)=>{
    const role = new RolesModel({name :"officer"})
    await role.save();
    res.send('role inserted')
})
app.get('/insert', async (req,res)=>{
    const user = new UsersModel({fname: 'don',lname: 'don', username: "farhan123",roles : ["631b41094b2d039492dd5315"], password:"1234",cnic: "1730128535899", address: "hajicamp", constituency:"jj"})
    await user.save();
    res.send('data inserted')
})
app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    console.log(username);
    const user = await UsersModel.findOne({username: username});
    if (!user) {
        res.json({error : "User doesnot exist!"});
        
    }
    else{
            if(password !== user.password){
                res.json({error: "Wrong username password combination"})
            }
            else{
                
                // const accessToken = sign({username: user.username, id: user.id},"mysecretkey");
                res.json({username: username, id: user.id});
            }
        
    }
})
app.get('/read', (req,res)=>{
    UsersModel.find({},(err,result)=>{
        if (err) {
            res.send(err);
            
        }
        else{
            res.send(result);
        }
    }
    )

    
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })