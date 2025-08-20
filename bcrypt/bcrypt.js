const express=require('express')
const app=express();
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/',(req,res)=>{
// bcrypt.genSalt(10,(err,salt)=>{
//     console.log(salt);
    
//     bcrypt.hash('nicetomeetyou',salt,(err,hash)=>{
//         console.log(hash)

//     })
//     bcrypt.compare('nicetomeetyou','$2b$10$49TEg0bU5clKcFnG7wEY9uYgbFY72aoWUEE.tfOcWNZsMhEuWaB0G',(err,result)=>{
//         console.log(result);
        
//     })
//     res.send('hello world')
// })
let token=jwt.sign({email:"harshit@gmail.com"},"secret")
// console.log(token);
res.cookie('token',token)
res.send('done')
})
app.get('/read',(req,res)=>{
    let data=jwt.verify(req.cookies.token,'secret');
    
    // console.log(data);
    res.send(data)

})
app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
    
})