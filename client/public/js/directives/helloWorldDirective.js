/**
 * Created by payetted on 9/6/2016.
 * This is a template for a simple directive. recall that the script needs to be added
 * to the index.html
 *
 * This will contain more than one directive to save adding too many files. s
 */

(function () {

    var helloWorld = function () {
        return {
            //this will isolate the scope!
            scope: {},
            template: '<h1>Hello World</h1>'
        };
    };

    //register the directive with the angular app
    angular.module('angular-app').directive('helloWorld', helloWorld);

}());


(function () {

    var sharedScope = function () {
        return {

            template: '<h1>Hi! My name is: {{people[0].name}}</h1>'
        };
    };

    //register the directive with the angular app
    angular.module('angular-app').directive('sharedScope', sharedScope);

}());


(function () {

    var isolateScope = function () {
        return {
            //this will isolate the scope!
            scope: {
                
            },
            template: '<h1>Hi! My name is: {{people[1].name}}</h1>'
        };
    };

    //register the directive with the angular app
    angular.module('angular-app').directive('isolateScope', isolateScope);

}());

(function () {

    var passString = function () {
        return {
            //isolate the scope but allow a string to be passed
            //to property 'name'
            scope: {
                name: '@'

            },
            template: '<h1>Hi! My name is: {{name}}</h1>'
        };
    };

    //register the directive with the angular app
    angular.module('angular-app').directive('passString', passString);

}());

