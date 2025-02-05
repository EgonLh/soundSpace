const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bson = require("bson");
const AlbumSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    albumUrl:{
        type:String,
        default:"https://shorturl.at/0lc6q",
        trim:"true"
    },
    artist:{
        type:String,
        required:true,
        trim:true
    },
    genreId:[{
        type:Schema.Types.ObjectId,
        ref:"genres",
        default:[]
    }],
    releaseDate:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    songs:[
        {
            type:String,
            required:true,
            default:[],
        }
    ],
    price:{
        type:bson.Decimal128,
        default:0,
        required:true,
    },
    metadata:{
        type:{
            createdAt:{
                type:String,
                default: new Date().toLocaleDateString(),
            },
            updatedAt:{
                type:String,
                default:"" //updated to the client part
            },
            count:{
                type:Number,
                default:0
            }
        },
        default:{}
    }
})
module.exports = mongoose.model('albums',AlbumSchema);