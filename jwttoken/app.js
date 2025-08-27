const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const usermodel=require('./models/user')
const path=require('path')
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}))   
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser()) 
app.get('/',(req,res)=>{
    res.render('index')
});
app.post('/create',async (req,res)=>{
    let {username,email,password,age}=req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
         let user=await usermodel.create({
        username,
        email,
        password:hash,
        age
    })
    let token=jwt.sign({email},"shhhhhkd")

    res.cookie("token",token);
    res.send(user);
            
        })
        
        
    })
   
    
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/login',async(req,res)=>{
let loginuser= await usermodel.findOne({email:req.body.email})


if(!loginuser) return res.send('soemthing went wrong');

// console.log(loginuser.password,req.body.password);
bcrypt.compare(req.body.password,loginuser.password,(err,result)=>{
    if(result){
let token=jwt.sign({email:loginuser.email},"shhhhhkd")
    res.cookie("token",token);
        res.send('you are logged in')
    }else{
        res.send('invalid credentials')
    }
    console.log(err);
    console.log(result);

})



})
app.get('/logout',(req,res)=>{
    res.cookie('token',"");
    res.redirect('/'); 

})
app.listen(3000,()=>{
    console.log('http://localhost:3000');
})