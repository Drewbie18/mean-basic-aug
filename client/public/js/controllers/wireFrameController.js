/**
 * Created by payetted on 9/7/2016.
 */
/**
 * Created by Drew on 2016-09-05.
 */
(function () {

    var wireFrameController = function ($scope, $log, $http) {
        $log.log('wireframe is here');


        $scope.getAssets = function(){

            $http({
                method: 'GET',
                url: '/api/assets'
            }).then(function successCallback(response) {

                $log.log(response.data);


                $scope.assets = response.data;


            }, function errorCallback(response) {

                $log.log('There was an error: ' + response.data);

            });
        }


    };

    wireFrameController.$inject = ['$scope', '$log', '$http'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wireFrameController', wireFrameController);

}());


