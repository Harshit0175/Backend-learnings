const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/miniproject')
const userschema=new mongoose.Schema({
    
    username:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    post:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post',
        }
    ]

})
module.exports=mongoose.model('user',userschema)