const mongoose = require('mongoose');
const bson = require("bson");
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    albumId:[{
        type:Schema.Types.ObjectId,
        ref:"albums",
        required:true
    }],
    ordered_date:{
        type:String,
        default:new Date().toLocaleString(),
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    fees:{
        type:bson.Decimal128,
        required:true
    },
    payment:{
        type:{
            method:{
                type:String,
                required:true,
            },
            pin:{
                type:String,
                required:true
            }
        }
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
            },
            count:{
                type:Number,
                default:0
            }
        },
        default:{}
    },
})
module.exports = mongoose.model('orders',OrderSchema)