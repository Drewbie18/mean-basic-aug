/**
 * Created by Drew on 2016-09-05.
 *
 * This controller will be used to assist the directive demos!
 */
(function () {

    var wahlin3Controller = function ($scope, $log) {
        $log.log('wahlin-3-controller is here');

        $scope.title = 'THIS IS THE THIRD PAGE';


        $scope.people = [{
            "name": 'Drew',
            "age": 28
        }, {
            "name": 'Corry',
            "age": 28
        }];


        $scope.text = "HERE IS SOMETHING!";

        $scope.changeText = function () {
            $scope.text = "I'VE BEEN CHANGED!!";
        };


    }

    wahlin3Controller.$inject = ['$scope', '$log'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wahlin-3-controller', wahlin3Controller);

}());


