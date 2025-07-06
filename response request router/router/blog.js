const express = require('express')
const router = express.Router()

// middleware that is specific to this route

// define the home page route
router.get('/', (req, res) => {
  res.send('Blogs home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About blogs')
})
router.get('/api',(req,res)=>{
    console.log('Received a GET request on /api');
    res.json({a:1, b: 2, c: 3});
})
router.get('/blogpost/:slug',(req,res)=>{
    res.send(`Blog post ${req.params.slug}`)
})

module.exports = router
