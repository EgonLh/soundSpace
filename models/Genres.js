const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    genre:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    description:{
        type:String,
        required:true
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
        },default:{}

    }
})

module.exports = mongoose.model('genres',GenreSchema);