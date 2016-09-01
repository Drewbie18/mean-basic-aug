/**
 * Created by Drew on 2016-08-29.
 * This file will contain the basic angular setup
 *
 */


var angularApp = angular.module('angular-app', ['ngRoute']);

angularApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'public/views/landing.html',
            controller: 'landing-controller'
        })
        .when('/wahlin-1', {
            templateUrl: 'public/views/wahlin-1.html',
            controller: 'wahlin-1-controller'
        })
        .when('/wahlin-2', {
            templateUrl: 'public/views/wahlin-2.html',
            controller: 'wahlin-2-controller'
        })

});


angularApp.controller('landing-controller', function ($scope, $http) {
    console.log('landing-controller is here');


    $scope.sayHi = function () {
        $scope.hello = "Hello MotherFUCKER!";
    }


    $scope.getResponse = function () {

        $http({
            method: 'GET',
            url: '/api/item/socks/13'
        }).then(function successCallback(response) {

            console.log(response);

            $scope.responseId = response.data._id;
            $scope.responseName = response.data.name;
            $scope.responseText = response.data.text;
        }, function errorCallback(response) {

            console.log('There was an error');

        });

    }
});


angularApp.controller('wahlin-1-controller', function ($scope, $http) {
    console.log('wahlin-1-controller is here');

});

angularApp.controller('wahlin-2-controller', function ($scope, $http) {
    console.log('wahlin-2-controller is here');

});