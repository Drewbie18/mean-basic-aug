/**
 * Created by Drew on 2016-08-29.
 */
var express = require('express');
var app = express();

var port = process.env.port || 3000;


//map a virtual route /public in place of the actual /app, this will be used to fetch JS and CSS files
app.use('/public', express.static(__dirname + '/client/public'));


//added another virtual route to grab angular and ng-route because these were loaded via npm and therefore were left in a different dir than the rest of the js files.
app.use('/assets', express.static(__dirname + '/node_modules'));

//this will send the index page to the frontend and will load all routing etc for SPA. All other routing for simple pages in done in main.js via angular.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/public/index.html');
});

app.listen(port);