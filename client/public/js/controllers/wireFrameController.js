/**
 * Created by payetted on 9/7/2016.
 */
/**
 * Created by Drew on 2016-09-05.
 */
(function () {

    var wireFrameController = function ($scope, $log, $http) {
        $log.log('wireframe is here');


        var assets;


        $scope.getAssets = function () {

            $http({
                method: 'GET',
                url: '/api/assets'
            }).then(function successCallback(response) {

                $log.log(response.data);


                $scope.assets = response.data;
                var selectedAssets = $scope.assetSelect;


                var assets = response.data;


            }, function errorCallback(response) {

                $log.log('There was an error: ' + response.data);

            });
        }


        $scope.enableSendBtn = function (selectedAssets) {
            return !Boolean(selectedAssets);

        };


        $scope.sendAlert = function (assets, selectedAssets) {

            $log.log(Boolean(selectedAssets));


            if (!Boolean(selectedAssets)) {
                return null;
            } else {

                var assetsIdArray = [];
                for (var i = 0; i < assets.length; i++) {

                    if (selectedAssets.indexOf(assets[i].id) != -1) {
                        var asset = {
                            refId: assets[i].id,
                            wsiId: assets[i].wsiId
                        }

                        assetsIdArray.push(asset);

                    }

                }

                $log.log(assetsIdArray);
                return assetsIdArray;

            }
        }



     





    };

    wireFrameController.$inject = ['$scope', '$log', '$http'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wireFrameController', wireFrameController);

}());


