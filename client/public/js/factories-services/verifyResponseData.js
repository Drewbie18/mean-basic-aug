/**
 * Created by payetted on 9/12/2016.
 */



(function () {

    //this is the function that is the factory,
    // but this returns the object 'factory' that has the method getCustomers
    //so in essense this factory functionality is whatever the method on the  factory object is
    //simpleFactory is merely returning that
    var verifyResponseData = function ($filter) {

        var factory = {};
        factory.verify = function (data) {
            
            if (data == "" || data == undefined || data == null) {
                return '-';
            } else {
                return $filter('number')(data, 0);
            }
        };
        return factory;
    };


    verifyResponseData.$inject = ['$filter'];

    angular.module('angular-app').factory('verifyResponseData', verifyResponseData);

}());