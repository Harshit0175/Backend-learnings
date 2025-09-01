const express = require('express');
const app = express();
const usermodel = require('./models/user')
const postmodel = require('./models/post')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');



app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())



app.get('/', (req, res) => {
    res.render('index')
})
app.get('/profile', isLoggedIn,async (req, res) => {
    const user=await usermodel.findOne({email:req.user.email})
    console.log(user);
    res.render('profile',{user})
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