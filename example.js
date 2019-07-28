/*var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require ("upper-case")
*/
/*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(2000);
*/

/* This object has a property called "url" 
which holds the part of the url that comes after the domain name */


    
   // var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
  /* var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    var b = url.parse(adr , true).hostname;
    console.log(b); */
    /*
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("Hello World!"));
  res.end();
}).listen(2000);
*/
    // callback == no sync 
    // chon callback darim qarar nis montazer bmunim ejra she pas sync maanaE nadare! 



    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
      }
    });
    
    var mailOptions = {
      from: 'youremail@gmail.com',
      to: 'myfriend@yahoo.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });