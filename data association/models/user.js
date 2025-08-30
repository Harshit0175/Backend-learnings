const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/dataassociation');
const userschema= new mongoose.Schema({
    username: String,
    age:Number,
    email: String,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }
    ]

})
module.exports=mongoose.model('user',userschema)