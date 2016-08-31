/**
 * Created by Drew on 2016-08-29.
 * This file will contain the basic angular setup
 *
 */


var angularApp = angular.module('angular-app', ['ngRoute']);

angularApp.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'public/index.html',
            controller: 'home-controller'
        })

});


angularApp.controller('home-controller', function ($scope, $http) {
    console.log('HomeCtrl is here');


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