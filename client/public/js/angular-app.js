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






