/**
 * Created by payetted on 9/7/2016.
 */
/**
 * Created by Drew on 2016-09-05.
 */
(function () {

    var wireFrameController = function ($scope, $log) {
        $log.log('wahlin-3-controller is here');

        $scope.title = 'THIS IS THE THIRD PAGE';


        $scope.people = [{
            "name": 'Drew',
            "age": 28
        }, {
            "name": 'Corry',
            "age": 28
        }];


    }

    wireFrameController.$inject = ['$scope', '$log'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wireFrameController', wireFrameController);

}());


