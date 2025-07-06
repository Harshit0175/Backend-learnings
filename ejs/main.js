const express=require('express')
const app=express()
const port=3000;
app.set('view engine','ejs')


// app.get('/',(req,res)=>{
//     res.send('Hello World!')
// })
app.get('/',(req,res)=>{
    let siteName='my adidas'
    let searchText='search now'
    let arr=['arr1','arr2','arr3','arr4','arr5']

res.render('index',{siteName:siteName, searchText: searchText ,arr});
});
app.get('/blog/:slug',(req,res)=>{
   let blogtitle='adidas why and when?'
   let blogcontent='its a very good brand'

res.sendFile('blog.html',{root:__dirname})
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
