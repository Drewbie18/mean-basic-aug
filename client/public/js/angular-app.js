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


angularApp.controller('home-controller', function ($scope) {
    console.log('HomeCtrl is here');
});