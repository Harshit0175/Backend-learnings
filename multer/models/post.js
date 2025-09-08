const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/miniproject')
const postschema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,
    ref:'user'},
    date:{
        type:Date,
        default:Date.now
    },
    content:{
        type:String,
        required:true
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]
})
module.exports=mongoose.model('post',postschema)