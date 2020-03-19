//This variable is calling the path package so that we are able to cal our html files
const express = require('express');
const router = express.Router();

const emailSender = require('../nodeMailer');


router.post('/sendEmail/', function (req, res) {
        //Send the
    const sender = req.body.fromAddress;
    const emailSubject = req.body.subject;
    const emailText = `My name is: ${req.body.name}
    Here is my message: ${req.body.body}`;

   emailSender('james.lovejoy2@gmail.com', sender, emailSubject, emailText ).catch(console.error);
    });

module.exports = router;