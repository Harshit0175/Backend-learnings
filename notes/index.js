const express= require('express');
const app = express(); 
const path=require('path');
const fs=require('fs');





app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')
app.get('/', function(req,res){
    fs.readdir(`./files`,function(err,files){
        res.render('index',{files:files})
        // console.log(files);
        
    })

})
app.get('/file/:filename', function(req,res){
    fs.readFile(`./files/${req.params.filename}`,'utf-8' ,function(err,filesdata){
        res.render('show',{filename:req.params.filename, filesdata:filesdata})
        // console.log(filesdata);
    })  
    })
    ;
    app.get('/edit/:filename', function(req,res){
    fs.readFile(`./files/${req.params.filename}`,'utf-8' ,function(err,filesdata){
        res.render('edit',{filesname:req.params.filename})
        // console.log(filesdata);
        
    })

})
app.post('/edit',(req,res)=>{
    fs.rename(`./files/${req.body.Previous}`,`./files/${req.body.new}`,function(err,filesdata){
        res.redirect('/')
        // console.log(filesdata);
        

    })
    

});
app.post('/create', function(req,res){
    // console.log(req.body);

    fs.writeFile(`./files/${req.body.title.split('').join('')}.txt`, req.body.details,function(err){
        res.redirect('/')

    })


    

})


app.listen('3000',function(){
    console.log('app listening on http://localhost:3000/');
    
})