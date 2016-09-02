/**
 * Created by payetted on 9/2/2016.
 *
 * This is an example of a simple angular factory written in the same basic format as lect 56
 *
 * 1. Using an IIFE
 * 2. create the custom object
 * 3. return the object
 * 4. register the facotry to the module. (angular-app)
 *
 */

//wrap in IIFE - this ensures that nothing in the factory is in the global scope!!
(function () {

    //this is the function that is the factory,
    // but this returns the object 'factory' that has the method getCustomers
    //so in essense this factory functionality is whatever the method on the  factory object is
    //simpleFactory is merely returning that
    var simpleFactory = function () {
        var names = ['drew', 'corry'];
        var factory = {};
        factory.getPeople = function () {
            return names;
        };
        return factory;
    };

    //register the factory with the angular module
    //angular.module('name of module').factory('name you want to give factory', function name of factory);

    angular.module('angular-app').factory('simpleFactory', simpleFactory);

}());

//alternate syntax, in this case you are just directly creating the mothod on the object to be
//returned directly and not adding the method AFTER creating the empty object.
//matter of taste
(function () {

    var simpleFactoryTwo = function () {
        var names = ['drew', 'corry'];
        return {
            getCustomers: function () {
                return names;
            }
        };

    };

    //register the factory with the angular module
//angular.module('name of module').factory('name you want to give factory', function name of factory);

    angular.module('angular-app').factory('simpleFactoryTwo', simpleFactoryTwo);
}());


