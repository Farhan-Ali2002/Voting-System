import mongoose from 'mongoose'

const usersschema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim: true
    },
    lname:{
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true,
        unique: true
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
      ],
    address:{
        type: String,
        required: false
    },
    constituency:{
        type: String,
        required: false,
        trim: false
        
    },
    




});
const UserssModel = mongoose.model('users',usersschema);
export default UserssModel