/**
 * Created by Drew on 2016-08-31.
 */


angularApp.controller('landing-controller', function ($scope, $http) {
    console.log('landing-controller is here');


    $scope.sayHi = function () {
        $scope.hello = "Hello MotherFUCKER!";
    }


    $scope.getResponse = function () {

        $http({
            method: 'GET',
            url: '/api/item/socks/13'
        }).then(function successCallback(response) {

            console.log(response);

            $scope.responseId = response.data._id;
            $scope.responseName = response.data.name;
            $scope.responseText = response.data.text;
        }, function errorCallback(response) {

            console.log('There was an error');

        });

    }
});