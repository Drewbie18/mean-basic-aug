/**
 * Created by payetted on 9/7/2016.
 */
/**
 * Created by Drew on 2016-09-05.
 */
(function () {

    var wireFrameController = function ($scope, $log, $http, $filter) {
        $log.log('wireframe is here');


        $scope.assetSelectorHeight = 16;


        //on page load get org
        $http({
            method: 'GET',
            url: '/api/comments/all'
        }).then(function successCallback(response) {


            $log.log(response.data);
            $scope.orgs = response.data;

        }, function errorCallback(response) {

            $log.log('There was an error: ' + response.data);

        });

        $scope.loadOrgDetails = function (orgId) {

            $http({
                method: 'GET',
                url: 'api/' + orgId + '/perils',
            }).then(function successCallback(response) {


                $log.log(response.data);
                $scope.perils = response.data;

                $log.log('HERE-1');
            }, function errorCallback(response) {

                $log.log('There was an error: ' + response.data);

            });


            $log.log('HERE');

            $http({
                method: 'GET',
                url: 'api/' + orgId + '/assets',
            }).then(function successCallback(assetResponse) {


                $log.log(assetResponse.data);
                $scope.assets = assetResponse.data;

            }, function errorCallback(assetResponse) {

                $log.log('There was an error: ' + assetResponse.data);

            });


        }


        $scope.enableSendBtn = function (selectedAssets) {
            return !Boolean(selectedAssets);

        };

        var createAssetIdArray = function (assets, selectedAssets) {


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


        //set default time to current time.
        var date = new Date();
        $scope.selectedTime = date;

        //accept all details.
        $scope.sendAlert = function (selectedOrg, selectedPeril, selectedTime, assets, assetSelect) {

            //create the the selected asset ID array (just refID and wsiId)
            var assetsIdArray = createAssetIdArray(assets, assetSelect);
            //create a UUID for the request.
            var simKey = 'weather-simulator-' + selectedTime.toJSON();

            var requestBody = {
                "ticker": selectedOrg,
                "productCode": selectedPeril,
                "alertKey": simKey,
                "perilLey": simKey,
                //UTC timestamp selected by user in UI
                "timestamp": selectedTime.toJSON(),
                "impacts": assetsIdArray

            }

            $log.log(requestBody);
        }


    };

    wireFrameController.$inject = ['$scope', '$log', '$http', '$filter'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wireFrameController', wireFrameController);

}());


