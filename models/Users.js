const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:{
            firstName:{
                type:String,
                required:true,
            },
            lastName:{
                type:String,
                required:true,
            }
        }
    },
    profileUrl:{
        type:String,
        default:"/images/test.jpg",
        trim:"true"
    },
    username: {
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    contact: {
        type: {
            email: {
                type: String,
                required: true
            },
            phoneNo: {
                type: String,
            }
        },
        required: true
    },
    password:{
        type: String,
        required: 'true',
        trim: true
    },
    metadata:{
        type:{
            createdAt:{
                type:String,
                default:new Date().toLocaleDateString(),
            },
            updatedAt:{
                type:String,
                default:"",
            }
        },
        default:{}
    },
    billInfo:{
        type:String,
        default:'',
    },
    role: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('users',UserSchema)