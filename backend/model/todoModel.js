const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})

module.exorts=mongoose.model("Todo",todoSchema)