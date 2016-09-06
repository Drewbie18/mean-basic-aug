/**
 * Created by payetted on 9/6/2016.
 */


(function () {

    var gridViewController = function ($scope, $log) {
        $log.log('THE GRID CONTROLLER IS HERE');
    };

    gridViewController.$inject = ['$scope', '$log'];

    angular.module('angular-app').controller('grid-view-controller', gridViewController);

}());