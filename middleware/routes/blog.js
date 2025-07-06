const express = require('express');
const router=express.Router()

router.use((req,res,next)=>{
    console.log(`Blog Middleware: ${req.method} request for '${req.url}'`);
    next();
    
}
)
router.get("/",(req,res)=>{
    res.send('blog home page')
})
router.get("/about",(req,res)=>{
    res.send('blog about page')
})
module.exports=router