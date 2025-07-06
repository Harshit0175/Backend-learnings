const express= require('express');
const app= express();
const port= 3000;
const blog=require('./routes/blog')
app.use(express.static('public'));
app.use('/blog',blog)

app.use((req,res,next)=>{
    console.log(req.headers)
    req.harshit="hey kkrh"
    console.log(`${req.method} request for '${req.url}'`);
    next();  
})
app.use((req,res,next)=>{
    console.log(` ${new Date().toTimeString()} ${req.method}2 request for '${req.url}2'`);
    // res.send(`error coming from middleware`);
    next();
})
app.get('/', (req, res) => {
    // req.harshit="hey kkrh"
    res.send(`Hello World! ${req.harshit}`);

})
app.get('/about', (req, res) => {
    res.send(`About Us ${req.harshit}`);

})

app.listen(3000,()=>{
    console.log(`Example app listening on port ${port}`);
    
})








