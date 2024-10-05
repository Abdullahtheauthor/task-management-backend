const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    Title : {type:String , required : true},
    Description : {type:String},
    Status:{type :String},
    Estimate : {type : String , required : true},
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    Assigne :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }
})


module.exports = mongoose.model('Task' , TaskSchema)