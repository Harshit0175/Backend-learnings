import mongoose from 'mongoose';
const { Schema } = mongoose;
const todoscehma=new Schema({
    title:String,
    description:String,
    completed:Boolean,
    days:Number

})
const todo = mongoose.model('todo',todoscehma);
export default todo;
