const express = require('express');
const app = express();
const Path = require('path')
const usermodel = require('./models/user')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(Path.join(__dirname, 'public')))
app.get('/', (req, res) => {
  res.render('index');
});
app.get('/read', async (req, res) => {
  let users = await usermodel.find()
  res.render('read', { users });
});
app.get('/delete/:id', async (req, res) => {
  let users = await usermodel.findOneAndDelete({ _id: req.params.id })
  res.redirect('/read');
});
app.get('/edit/:userid', async (req, res) => {
  let users = await usermodel.findOne({ _id: req.params.userid })
  res.render('edit',{users})
});
app.post('/update/:userid', async (req, res) => {
  const {image,email,name}=req.body;
  let users = await usermodel.findOneAndUpdate({ _id: req.params.userid },{image,email,name},{new:true})
  res.redirect('/read');
});
app.post('/create', async (req, res) => {
  let { name, email, image } = req.body
  let usercreated = await usermodel.create({
    name,
    email,
    image,
  })
  res.redirect('/read');
});

app.listen(3000, () => {
  console.log('app listen on http://localhost:3000');
})