/**
 * Created by Drew on 2016-08-31.
 */
angularApp.controller('wahlin-1-controller', function ($scope, $http) {
    console.log('wahlin-1-controller is here');

    $scope.getComments = function () {
        $http({
            method: 'GET',
            url: '/api/comments/all'
        }).then(function successCallback(response) {

            console.log(response.data);


        }, function errorCallback(response) {

            console.log('There was an error: ' + response.data);

        });
    }


});