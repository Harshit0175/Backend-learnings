const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!  This is a simple Express server.')
})

app.get('/:slug/', (req,res)=>{
console.log(req.params);
console.log(req.query);
  res.send(`this is ${req.params.slug} page`)

})

// app.get("/about",(req,res)=>{
//   res.send("this is about page")

// })
// app.get("/contact",(req,res)=>{
//   res.send("this is contact page")

// })
// app.get("/blog",(req,res)=>{
//   res.send("this is blog page")

// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
