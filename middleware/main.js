const express= require('express');
const app= express();
const port= 3000;
// const blog=require('./routes/blog')
// app.use(express.static('public'),);
// app.use('/blog',blog) 
// app.use((req,res,next)=>{
//     console.log(req.headers)
//     req.harshit="hey kkrh"
//     console.log(`${req.method} request for '${req.url}'`);
//     next();  
// })
// app.use((req,res,next)=>{
//     console.log(` ${new Date().toTimeString()} ${req.method}2 request for '${req.url}2'`);
//     // res.send(`error coming from middleware`);
//     next();
// })
// app.get('/', (req, res) => {
//     // req.harshit="hey kkrh"
//     res.send(`Hello World! ${req.harshit}`);

// })
// app.get('/about', (req, res) => {
//     res.send(`About Us ${req.harshit}`);

// })

// app.listen(3000,()=>{
//     console.log(`Example app listening on port ${port}`);
    
// })
// function logger(req, res, next) {
//     console.log('user login');
//     const Isloggin=true;
//     if(Isloggin){
//         res.send('user is logged in');
//         next()
        
//     }
//     else{
//         res.send('user is not logged in');
        
//     }
// }
// app.get('/dashboard', logger, (req, res) => {
//     res.send('Welcome to the dashboard');
// })
// app.listen(3000,()=>{
//     console.log(`Server is running at http://localhost:3000`);
// })










