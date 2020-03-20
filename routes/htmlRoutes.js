//This variable is calling the path package so that we are able to cal our html files
const express = require('express');
const router = express.Router();


//The below lines of code handle HTML GET requests
//in each of the cases the user is shown a an html page content based on urls
router.get("/", function(req, res){
    res.render('index');
})

router.get('/portfolio', function (req, res) {
    res.render('portfolio');
})

router.get('/contact', function (req, res) {
    res.render('contact');
})

//if no matching route is found default to index.html
router.get("*", function(req, res){
    res.render('index');
})


module.exports = router;