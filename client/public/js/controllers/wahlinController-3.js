/**
 * Created by Drew on 2016-09-05.
 *
 * This controller will be used to assist the directive demos!
 */
(function () {

    var wahlin3Controller = function ($scope, $log, verifyResponseData, inspectHttpResponse, $http) {
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

        var data = {
            "_id": "",
            "something": null,
            "name": undefined,
            "number": 10000
        }


        $http({
            method: 'GET',
            url: '/api/data'
        }).then(function successCallback(response) {

            console.log(response);
            console.log(inspectHttpResponse.inspect(response.data));
            $scope.httpError = false;


        }, function errorCallback(response) {

            console.log(response);

            $scope.httpError = true;
            $scope.httpErrorCode = response.status;


        });


        $scope.id = verifyResponseData.verify(data._id);
        $scope.something = verifyResponseData.verify(data.something);
        $scope.name = verifyResponseData.verify(data.name);
        $scope.number = verifyResponseData.verify(data.number);
    }

    wahlin3Controller.$inject = ['$scope', '$log', 'verifyResponseData', 'inspectHttpResponse', '$http'];
    //register the controller with the angular module
    angular.module('angular-app').controller('wahlin-3-controller', wahlin3Controller);

}());


