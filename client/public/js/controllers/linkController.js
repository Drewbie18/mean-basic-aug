/**
 * Created by payetted on 9/13/2016.
 */
(function () {

    var linkController = function ($scope, $log, $http) {

        $http({
            method: 'GET',
            url: '/api/comments/all'
        }).then(function successCallback(response) {

            console.log(response.data);

            $scope.texts = response.data;


        }, function errorCallback(response) {

            console.log('There was an error: ' + response.data);

        });


    };

    linkController.$inject = ['$scope', '$log', '$http'];

    angular.module('angular-app').controller('linkController', linkController);

}());


