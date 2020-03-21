require('dotenv').config();

// const emailSender = require('./nodeMailer');
// const nodemailer = require("nodemailer");
const express = require("express");

//this line tells the node that we are creating an express server
const app = express();
//this line sets an initial port to be used in our listener.  the process.env.PORT is key because it is 
//checking whether or not you are on a local machine or being hosted
const PORT = process.env.PORT || process.env.MY_PORT;

//Requiring the apiRoutes.js file which creates the route for react front end to call nodemailer
const routes1 = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//This line of code makes the entire contents of the public folder acessible when running through the server.
//Essentiall says if you can find a route for a file go to public folder and look in there
app.use(express.static("public"));

//Enables CORS for all resoures on my server
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//______________________________________
//ROUTER
//the below lines of code point our server to a series of routing files
//in these files are lines of code that map out how our server responds when a user visits the app 
//_____________________________________

app.use(routes1);

//___________________
//LISTENER
//______________________

//This line of code effectively starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
});













//+++++++++++++++++++++++++++
//___________________________
// async..await is not allowed in global scope, must use a wrapper

// main().catch(console.error);


// data defines the mail content (see Message Configuration for possible options)
// callback is an optional callback function to run once the message is delivered or it failed
// err is the error object if message failed
// info includes the result, the exact format depends on the transport mechanism used
// info.messageId most transports should return the final Message-Id value used with this property
// info.envelope includes the envelope object for the message
// info.accepted is an array returned by SMTP transports (includes recipient addresses that were accepted by the server)
// info.rejected is an array returned by SMTP transports (includes recipient addresses that were rejected by the server)
// info.pending is an array returned by Direct SMTP transport. Includes recipient addresses that were temporarily rejected together with the server response
// response is a string returned by SMTP transports and includes the last SMTP response from the server

//for gmail use oath2