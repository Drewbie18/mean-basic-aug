/**
 * Created by payetted on 9/29/2016.
 */


var generateRandom = require('./randomNumber');


var months = ['january', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


var data = [];

for (var i = 0; i < months.length; i++) {

    var monthData = {
        "month": months[i],
        "value": generateRandom(0, 1000)
    }

    data.push(monthData);

}

module.exports = data;