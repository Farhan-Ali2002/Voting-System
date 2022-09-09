import mongoose from 'mongoose'

const votersschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: false
    },
    constituency:{
        type: String,
        required: false
    },
    




});
const votersModel = mongoose.model('voters',votersschema);
export default votersModel