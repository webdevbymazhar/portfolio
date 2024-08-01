const mongoose = require("mongoose")


let formSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
})

let formModel = new mongoose.model("form-messages-portfolio",formSchema)
module.exports = formModel