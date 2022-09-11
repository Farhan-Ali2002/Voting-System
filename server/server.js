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
    const role = new RolesModel({name :"candidate"})
    await role.save();
    res.send('role inserted')
})
app.get('/insert', async (req,res)=>{
    const user = new UsersModel({fname: 'don',lname: 'don', username: "hassan123",roles : ["631b414a949883f725382093"], password:"1234",cnic: "1730128535898", address: "hajicamp", constituency:"jj"})
    await user.save();
    res.send('data inserted')
})
app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    console.log(username);
    const user = await UsersModel.findOne({username: username}).populate("roles");
    if (!user) {
        res.json({error : "User doesnot exist!"});
        
    }
    else{
            if(password !== user.password){
                res.json({error: "Wrong username password combination"})
            }
            else{
                
                // const accessToken = sign({username: user.username, id: user.id},"mysecretkey");
                res.json({username: username, id: user.id, roles : user.roles});
            }
        
    }
})
app.get('/readvoter', (req,res)=>{
    UsersModel.find({roles: "631b41094b2d039492dd5315" },(err,result)=>{
        if (err) {
            res.send(err);
            
        }
        else{
            res.send(result);
        }
    }
    ).select('fname lname username cnic -_id name roles');

    
})
app.get('/readcand', (req,res)=>{
    UsersModel.find({roles: "631dad06396f41e986fdb7fb"},(err,result)=>{
        if (err) {
            res.send(err);
            
        }
        else{
            res.send(result);
        }
    }
    ).select('fname lname username cnic -_id name roles');

    
})
app.get('/readoff', (req,res)=>{
    UsersModel.find({roles: "631b4162f4518c3987ff51d6" },(err,result)=>{
        if (err) {
            res.send(err);
            
        }
        else{
            res.send(result);
        }
    }
    ).select('fname lname username cnic -_id name roles');

    
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })