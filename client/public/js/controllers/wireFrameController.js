/**
 * Created by payetted on 9/7/2016.
 *
 * http://www.codelord.net/2014/06/25/generic-error-handling-in-angularjs/
 */

(function () {

    var wireFrameController = function ($scope, $log, $http, $filter) {

        $log.log('wireframe is here');

        //set default asset list height
        $scope.assetSelectorHeight = 10;

        //set default time to current time.
        var date = new Date();
        $scope.selectedTime = date;

        //set default error flags to false
        $scope.orgHttpErr = false;
        $scope.orgNoData = false;
        $scope.perilHttpErr = false;
        $scope.perilNoData = false;
        $scope.assetHttpErr = false;
        $scope.assetNoData = false;

        //on page load get org list
        $http({
            method: 'GET',
            url: '/api/comments/all'
        }).then(function successCallback(response) {

            //if org list is empty throw no data error
            if (response.data.length == 0) {
                $scope.orgNoData = true;
                return;
            }

            //if org list is not empty set error flags to false
            $scope.orgHttpErr = false;
            $scope.orgNoData = false;
            //push response to UI
            $scope.orgs = response.data;

        }, function errorCallback(response) {

            //http error flags and data to display
            $scope.orgHttpErr = true;
            $scope.orgHttpErrCode = response.status;
            $scope.orgHttpStatusCode = response.statusText;

            $log.log('There was an error: ' + response.data);

        });


        //on change/selection of an org this function will run to grab the org's perils and asset lists.
        $scope.loadOrgDetails = function (orgId) {
            //get the perils for the org selected.
            $http({
                method: 'GET',
                url: 'api/' + orgId + '/perils',
            }).then(function successCallback(response) {

                if (response.data.length == 0) {
                    $scope.perilNoData = true;
                    $scope.perilHttpErr = false;
                    return;
                }

                $scope.perilHttpErr = false;
                $scope.perilNoData = false;
                $log.log(response.data);
                $scope.perils = response.data;

            }, function errorCallback(response) {

                $scope.perilHttpErr = true;
                $scope.httpErrorCode = response.status;
                $scope.httpStatusCode = response.statusText;
                $log.log(response);

            });

            //get ASSETS for org selected.
            $http({
                method: 'GET',
                url: 'api/' + orgId + '/assets',
            }).then(function successCallback(response) {

                if (response.data.length == 0) {
                    $scope.assetNoData = true;
                    return;
                }

                $scope.assetHttpErr = false;
                $scope.assetNoData = false;
                $log.log(response.data);
                $scope.assets = response.data;

            }, function errorCallback(response) {

                $scope.assetHttpErr = true;
                $scope.assetHttpErrCode = response.status;
                $scope.assetHttpStatusCode = response.statusText;
                $log.log(response);

            });

        };

        //quick test to see if there is a value in shortname, if not use the id
        $scope.perilName = function (peril) {
            if (peril.shortName.en.text == "") {
                return peril.id;
            }
            
            return peril.shortName.en.text;

        };


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
        };


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


