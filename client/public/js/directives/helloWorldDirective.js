/**
 * Created by payetted on 9/6/2016.
 * This is a template for a simple directive. recall that the script needs to be added
 * to the index.html
 *
 * This will contain more than one directive to save adding too many files.
 *
 * The directives on this page will be demonstated in the wahlin-3.html page
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

//SINGLE DIRECTIONAL BINDING WITH STRING ONLY
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

//TWO WAY BINDING WITH OBJECT
(function () {

    var twoWayBind = function () {
        return {
            //isolate the scope but create a two way binding
            // to property  datasournce
            scope: {
                datasource: '='

            },
            template: '<h1>Hi! My name is: {{datasource.name}}</h1>'
        };
    };

    //register the directive with the angular app
    angular.module('angular-app').directive('twoWayBind', twoWayBind);

}());

//SCOPE HOLE WITH FUNCTION CALLBACK &
(function () {

    var functionBind = function () {
        return {
            //Isloate the scope but allow a function to be passed in
            //the function will be 'aliased with 'action' in this case.
            //in this directive we are binding the click of the button to the execuction
            //of whatever is passed to action
            scope: {
                action: '&',
                datasource:'='

            },
            //and we can have more than ONE VARIABLE!
            template: '<button ng-click="action()">CLICK HERE TO INVOKE SOMETHING</button><br>' +
            '<h3>{{datasource.name}}</h3>'
        };
    };

    //register the directive with the angular app
    angular.module('angular-app').directive('functionBind', functionBind);

}());


