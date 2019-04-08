const express = require('express')
const app = express()
const port = 3001

var five = require("johnny-five");
var board = new five.Board();


app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/change', function(req, res) {
    board.on("ready", function() {
        var led = new five.Led({ pin: 13, board: board });
        led.toggle();
        res.redirect('/');
    });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))