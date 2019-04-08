const express = require('express')
const app = express()
const port = 3002

var five = require("johnny-five");
var board = new five.Board();


app.get('/', function(req, res) {
    var led = new five.Led({ pin: 13, board: board });
    //var led = new five.Led(13);
    led.off();
    res.sendfile('index.html');
});

app.get('/off', function(req, res) {
    /*board.on("ready", function() {
        var led = new five.Led({ pin: 13, board: board });
        //var led = new five.Led(13);
        led.toggle();
        res.redirect('/');
    });*/
    var led = new five.Led({ pin: 13, board: board });
    //var led = new five.Led(13);
    led.on();
    res.sendfile('off.html');

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))