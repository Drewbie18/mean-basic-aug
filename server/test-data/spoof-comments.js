/**
 * Created by Drew on 2016-08-31.
 *
 * This will be used to generate a JSON array of fake data
 *
 */

var generateRandom = require('./randomNumber');



var texts = [];
//create complete objects
for (var i = 0; i < 15; i++) {
    //var textId = 'prefix' + generateRandom(0, 100000);
    var text = 'some text-' + i;
    var author = 'author: ' + generateRandom(0, 100000);
    var timeStamp = new Date(generateRandom(2010, 2017), generateRandom(0, 11), generateRandom(0, 6)).toJSON();
    var number = generateRandom(0, 1000000000);

    var genText = {
        "textId": i,
        "text": text,
        "author": author,
        "timeStamp": timeStamp,
        "number": number
    }

    texts.push(genText);

}

var empty = {};

//texts.push(empty);
//add an object with null fields
var nullFields = {
    "textId": null,
    "text": null,
    "author": null,
    "timeStamp": null,
    "number": null
}

//texts.push(nullFields);
//object with no information
var emptyStrings = {
    "textId": "",
    "text": "",
    "author": "",
    "timeStamp": "",
    "number": ""

}

//texts.push(emptyStrings);
//object with fields missing. 
var missFields = {
    "textId": "miss Fields",
    "text": "This OBJ has missing Fields",
    "timeStamp": timeStamp,

}

//texts.push(missFields);


module.exports = texts;