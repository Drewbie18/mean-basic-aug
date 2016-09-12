/**
 * Created by payetted on 9/12/2016.
 */




(function () {

    //this is the function that is the factory,
    // but this returns the object 'factory' that has the method getCustomers
    //so in essense this factory functionality is whatever the method on the  factory object is
    //simpleFactory is merely returning that
    var inspectHttpResponse = function ($log) {

        var factory = {};
        factory.inspect = function (data) {


            //check is object is empty
            if (Object.keys(data.data).length == 0 || data.data == null || data.data == undefined) {

                $log.log('The response data is empty, null or undefined');
                return false;

            } else if (data.status != 200) {
                $log.log('The response code was not okay. Code: ' + data.status + ' Status-text: ' + data.statusText);
                return false;

            } else if (data.data.includes('Error')) {
                $log.log('In the response data an error is mentioned. Response: ' + data.data);
                return false;
            }

            return true;


        };
        return factory;
    };


    inspectHttpResponse.$inject = ['$log'];

    angular.module('angular-app').factory('inspectHttpResponse', inspectHttpResponse);

}());