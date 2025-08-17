const express=require('express');
const app=express();
const usermodel=require('./usermodel')
app.get('/',(req,res)=>{
    res.send('hey')
})
// app.get('/create', async (req,res)=>{
//   let usercreated= await usermodel.create({
//         name:'harshit',
//         email:'harshit@gmail.com',
//         username:'harshit'

//     })
//     res.send(usercreated)
// })
app.get('/create', async (req,res)=>{
  let usercreated= await usermodel.create({
        name:'harshita',
        email:'harshita@gmail.com',
        username:'harshita'

    })
    res.send(usercreated)
})
app.get('/update', async (req,res)=>{
  let userupdated= await usermodel.findOneAndUpdate({
        name:'harshit',
    },{name:'harshit joshi'},{new:true})
    res.send(userupdated)
})
app.get('/read', async (req,res)=>{
  let users= await usermodel.find()
    res.send(users )
})
app.get('/delete', async (req,res)=>{
  let usersdeleted= await usermodel.findOneAndDelete({username:'harshita'})
    res.send(usersdeleted)
})
app.listen('3000',()=>{
    console.log('http://localhost:3000/');
    
})