const express = require('express');
const app = express();
const port = 3000;
// const path = require('path');
const Employees=require('./models/Employees');
const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/company');
app.set('view engine', 'ejs');
let getrandom=(arr)=>{
return arr[Math.floor(Math.random()*(arr.length-1))];
}
app.get('/', (req, res) => {
  res.render("index", { title: "Dummy Data Generator" });     
});

app.get('/generate', async(req, res) => {
   await Employees.deleteMany({})

  let randomname=["harshit","john","doe","alice","bob","charlie","eve","mallory","trudy","victor"]
  let randomcity=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose"]
  let randomlanguage=["English","Spanish","French","German","Chinese","Japanese","Russian","Hindi","Arabic","Portuguese"]
  let randomage=[25,30,35,40,45,50,55,60,65,70]
  let randomsalary=[30000,40000,50000,60000,70000,80000,90000,100000,110000,120000]    
  let randomismanger=[true,false]
for (let index = 0; index < 10; index++) {
 
  let e= await Employees.create({
  name: getrandom(randomname),
  salary: getrandom(randomsalary),
  language: getrandom(randomlanguage),
  city: getrandom(randomcity),
  age: getrandom(randomage),
  ismanger: getrandom(randomismanger)
})

}

  res.render("index", { title: "Dummy Data Generator" });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 