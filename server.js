var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

// Create a SMTP transporter object
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'travalBooking@gmail.com',
        pass: 'Jamshift@7706'
    },
    logger: true, // log to console
    debug: true // include SMTP traffic in the logs
}, {
    // sender info
    from: 'travaler <travalBooking@gmail.com>',
    headers: {
        'X-Laziness-level': 1000 // just an example header, no need to use this
    }
});


app.post('/postEmail', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // Message object
    var message = {

        // Comma separated list of recipients
        to: '"' + req.query.fName + '' + req.query.lName + '"<' + req.query.email + '>',

        // Subject of the message
        subject: 'Booking Confirmation ✔', //

        // HTML body
        html: '<h1>Thank you</h1>' +
              '<pre>' + req.query.fName + ' ' + req.query.lName + '(' + req.query.mobile + ')' +
              ' will depart for ' + req.query.location + ' on ' + req.query.startdt +
              ' and return on ' + req.query.returndt +
              ' <h3>Your Booking is confirmed</h3>'
    };


    transporter.sendMail(message, function (error, info) {
        if (error) {
            res.send('Message sent successfully!', req.query);
            return;
        }
        res.send(req.query);
        console.log('Message sent successfully!');

    });
});

app.listen(5000, function () {
    console.log('app listening the port 5000');
});