/**
 * Created by Drew on 2016-08-29.
 */
var express = require('express');
var app = express();

var port = process.env.port || 3000;



app.use('/', express.static(__dirname));


//map a virtual route /public in place of the actual /app,
// this will be used to fetch JS and CSS files
app.use('/public', express.static(__dirname + '/client/public'));


//added another virtual route to grab angular and ng-route because these
// were loaded via npm and therefore were left in a different dir than the rest of the js files.
app.use('/assets', express.static(__dirname + '/node_modules'));

//this will send the index page to the frontend and will load all routing etc for SPA.
// All other routing for simple pages in done in main.js via angular.
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/public/index.html');
});


//simple test of getting route params from request
app.get('/api/item/:item_id/:item_name', function(req, res){

    var responseObj = {
        "_id": req.params.item_id,
        "name": req.params.item_name,
        "text": "This is the object that you got back"
    }

    res.json(responseObj);

});


//another simple get to use an http call to get the spoof data
var data = require('./server/test-data/spoof-comments');
var generateRandom = require('./server/test-data/randomNumber');

app.get('/api/comments/all', function(req, res){

    console.log(generateRandom(0,10));
    res.json(data);
    

});

app.get('/api/comments/none', function(req, res){

    var data = {};
    res.json(data);

});


app.get('/api/data1', function(req, res){

    var data = {
    data: "A message that is not an error", status: 200, config: Object, statusText: "OK"
    }

    var response = {};

    res.json(data);

});


//spoof assets
//another simple get to use an http call to get the spoof data
var data = require('./server/test-data/spoofAssets');
app.get('/api/assets', function(req, res){

    res.json(data);

});


app.listen(port);