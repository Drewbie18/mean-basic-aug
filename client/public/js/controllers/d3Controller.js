/**
 * Created by Drew on 2016-09-26.
 */
/**
 * Created by Drew on 2016-09-26.
 */

(function () {

    var dThreeController = function ($scope, $http, $log) {

        $log.log('The d3 controller is here!');



    };


    //services are not overwritten to s and h as minifiers tend to do.
    dThreeController.$inject = ['$scope', '$http','$log'];

    //register the controller with the angular module
    angular.module('angular-app').controller('dThreeController', dThreeController);


}());


