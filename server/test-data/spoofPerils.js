/**
 * Created by payetted on 9/23/2016.
 */
var generateRandom = require('./randomNumber');

var createPerils = function(orgId) {

    var perils = [];
//create complete objects
    for (var i = 0; i < 10; i++) {


        var perilId = 'PERIL-' + generateRandom(0, 100000);
        var text = 'some text-' + i;
        var author = 'author: ' + generateRandom(0, 100000);
        var timeStamp = new Date(generateRandom(2010, 2017), generateRandom(0, 11), generateRandom(0, 6)).toJSON();

        var peril = {
            "orgId": orgId,
            "perilId": perilId,
            "timeStamp": timeStamp,

        }

        perils.push(peril);

    }

    return perils;
}


module.exports = createPerils;