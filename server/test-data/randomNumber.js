/**
 * Created by payetted on 9/2/2016.
 */


var generateRandom = function(min, max){
    return Math.floor(Math.random()*(max-min + 1) + min);

}


module.exports = generateRandom;
