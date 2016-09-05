/**
 * Created by Drew on 2016-09-05.
 */
(function () {

    var wahlin3Controller = function ($scope, $log) {
        $log.log('wahlin-3-controller is here');

        $scope.title = 'THIS IS THE THIRD PAGE';


    }

    wahlin3Controller.$inject = ['$scope', '$log'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wahlin-3-controller', wahlin3Controller);

}());


