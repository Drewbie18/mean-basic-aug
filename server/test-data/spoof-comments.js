/**
 * Created by Drew on 2016-08-31.
 *
 * This will be used to generate a JSON array of fake data
 *
 */

var generateRandom = function(min, max){
    return Math.floor(Math.random()*(max-min + 1) + min);

}

var texts = [];

for(var i = 0; i < 50; i++) {



    var textId = 'prefix' + generateRandom(0, 100000);
    var text = 'some text-' + i;
    var author = 'author: ' + generateRandom(0, 100000);
    var timeStamp = new Date(generateRandom(2010, 2017), generateRandom(0, 11), generateRandom(0, 6)).toJSON();


    var genText = {
        "textId" : textId,
        "text" : text,
        "author": author,
        "timeStamp": timeStamp
    }


    texts.push(genText);

}


module.exports = texts;