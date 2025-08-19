const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
app.use(cookieParser());

app.get('/',(req,res)=>{
res.cookie('name','harshit');
res.send('done')
})
app.get('/read',(req,res)=>{
    console.log(req.cookies);
    res.send('cookie read')
})
app.listen(3000,()=>{
    console.log('server listening on http://localhost:3000');
    
})