const express=require('express');
const app=express();
const user=require('./models/user')
const posts=require('./models/posts');
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/create',async (req,res)=>{
    let users=await user.create({
        name:'harshit',
        age:21,
        email:'harshit@gmail.com'

    });
    res.send(users)
})
app.get('/post/create', async (req,res)=>{
    let post =await posts.create({
        postdata:"this is a sample data",
        user:'68b1e9f19d60d36447e49030',
    });  
    let posteduser= await user.findOne({_id:"68b1e9f19d60d36447e49030"});
    posteduser.posts.push(post._id);
    await posteduser.save();
    res.send({post,posteduser})


})


app.listen(3000,()=>{
    console.log('app listen on port http://localhost:3000');
})
