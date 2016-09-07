/**
 * Created by Drew on 2016-08-29.
 * This file will contain the basic angular setup
 *
 *
 * This is where we define the name of our module that we are adding to the html tag,
 * we are also injecting any modules that we are dependent on-> ngRoute and all other kinds
 *
 */


var angularApp = angular.module('angular-app', ['ngRoute', 'ngAnimate']);

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
        .when('/wahlin-3', {
            templateUrl: 'public/views/wahlin-3.html',
            controller: 'wahlin-3-controller'
        })
        .when('/grid-view', {
            templateUrl: 'public/views/grid-view.html',
            controller: 'grid-view-controller'

        })
        .when('/visualizations', {
            templateUrl: 'public/views/visualizations.html',
            controller: 'visualizationController'

        })
        .when('/wireframe', {
            templateUrl: 'public/views/wireframe.html',
            controller: 'wireFrameController'

        })

});






