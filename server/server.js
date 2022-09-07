const express = require('express')
const app = express();
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/votingsystem?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{useNewUrlParser: true})
const voterModel = require('./models/voters');

// app.get('/insert', async (req,res)=>{
//     const friend = new voterModel({name: 'don', age: 20})
//     await friend.save();
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


app.listen('3001',()=>{
    console.log('you are connected');
})
