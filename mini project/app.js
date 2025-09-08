const express = require('express');
const app = express();
const usermodel = require('./models/user')
const postmodel = require('./models/post')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const post = require('./models/post');



app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())



app.get('/', (req, res) => {
    res.render('index')
})
app.get('/profile', isLoggedIn,async (req, res) => {
    const user=await usermodel.findOne({email:req.user.email}).populate('post')
    // console.log(user);
    res.render('profile',{user})
})
app.get('/like/:id', isLoggedIn,async (req, res) => {
    const post=await postmodel.findOne({_id:req.params.id}).populate('user')
if(post.likes.indexOf(req.user.userid)===-1){
    post.likes.push(req.user.userid);
}else{
    post.likes.splice(post.likes.indexOf(req.user.userid),1)
}
await post.save();
    res.redirect("/profile")
})
app.get('/edit/:id', isLoggedIn,async (req, res) => {
const post=await postmodel.findOne({_id:req.params.id}).populate('user')
res.render('edit',{post})

})
app.post('/update/:id', isLoggedIn,async (req, res) => {
const post=await postmodel.findOneAndUpdate({_id:req.params.id},{content:req.body.content})
res.redirect('/profile')

})

app.post('/post', isLoggedIn,async (req, res) => {
    const user=await usermodel.findOne({email:req.user.email})
    let {content}=req.body;
   let post= await postmodel.create({
    user:user._id,
    content,
   });
   user.post.push(post._id);
   await user.save();
   res.redirect('/profile')
})
app.post('/register', async (req, res) => {
    const { name, username, password, age, email } = req.body;
    const useremail = await usermodel.findOne({ email })

    if (useremail) return res.status(500).send('user already exists')
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            const user = await usermodel.create({
                name,
                username,
                password: hash,
                age,
                email,
            })
            let token = jwt.sign({ email: user.email, userid: user._id }, "sjkdhsdsjd")
            res.cookie('token', token)
            res.send('User registered successfully')
        })
    })



})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    const { password, email } = req.body;
    const useremail = await usermodel.findOne({ email })

    if (!useremail) return res.status(500).send('something went wrong')
    bcrypt.compare(password, useremail.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email: useremail.email, userid: useremail._id }, "sjkdhsdsjd")
            res.cookie('token', token)
            res.status(200).redirect('/profile')
        }
        else res.redirect('/login')
    })
})
app.get('/logout', (req, res) => {
    res.cookie("token", "")
    res.redirect('/login')
})
function isLoggedIn(req, res, next) {
    if (req.cookies.token === '') return res.redirect('/login')
    else {
        let data = jwt.verify(req.cookies.token, 'sjkdhsdsjd')
        req.user = data;
        next();
    }

}

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});