/**
 * Created by Drew on 2016-09-26.
 */

(function () {

    var galleryController = function ($scope, $http, $log) {


        $log.log('The gallery is here!');



    };


    //services are not overwritten to s and h as minifiers tend to do.
    galleryController.$inject = ['$scope', '$http','$log'];

    //register the controller with the angular module
    angular.module('angular-app').controller('galleryController', galleryController);


}());


