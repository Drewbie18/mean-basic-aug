/**
 * Created by Drew on 2016-08-31.
 *
 * Let's write this controller in the IIFE method
 * This will ensure that no variables in this controller pollute the global scope.*
 *
 */



(function () {

    //put all conroller logic and services to be used in this function
    //this will then be registered to the module.
    var wahlinOneConroller = function ($scope, $http, simpleFactory) {

        
        //Make use of the simpleFactory that created
        //wrapping in an init function that will run when the page is loaded. 
        function init(){
            $scope.people = simpleFactory.getPeople();
        }
        init();
        
        
        console.log('wahlin-1-controller is here');

        $scope.getComments = function () {

            $http({
                method: 'GET',
                url: '/api/comments/all'
            }).then(function successCallback(response) {

                console.log(response.data);

                $scope.texts = response.data;


            }, function errorCallback(response) {

                console.log('There was an error: ' + response.data);

            });
        }


        $scope.noData = false;
        $scope.testShow = function () {
            var empty = {};
            if (Object.keys(empty).length == 0) {
                console.log('There is no data in the object');
                $scope.noData = true;
            }
        }

        var showResponse = function (data) {
            for (var i = 0; i < data.length; i++) {
                if (Object.keys(data[i]).length == 0) {
                }

            }
        }

    }

    //use the inject service to ensure that is there is minification the injected
    //services are not overwritten to s and h as minifiers tend to do.
    wahlinOneConroller.$inject=['$scope', '$http', 'simpleFactory'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wahlin-1-controller', wahlinOneConroller);


}());


