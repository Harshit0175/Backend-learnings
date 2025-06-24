const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res)=>{
    console.log('Received a POST request');
    res.send('Hello from POST request!')
})
app.put('/',(req,res)=>{
    console.log('Received a PUT request');
    res.send('Hello from PUT request!')

})
// app.get('/index', (req, res) => {
//     console.log('Received a GET request on /index');
//   res.send('hello from index!')})
// app.get('/index', (req, res) => {
   
//   res.sendFile('templates/index.html',{root: __dirname});})
app.get('/api', (req, res) => {
    console.log('Received a GET request on /index');
  res.json({a:1, b: 2, c: 3});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

