(function () {

    var wahlinTwoController = function ($scope, getTexts, $log) {
        console.log('wahlin-2-controller is here');

        $scope.title = 'THIS IS THE SECOND PAGE';

        $scope.getTexts = function () {
            getTexts.getTexts().then(function successCallback(response) {

                $log.log(response);

                console.log(response.data);

            }, function errorCallback(response) {

                console.log('There was an error: ' + response);
                $log.log('response.error')

            });
        }


    }
    //use the inject service to ensure that is there is minification the injected
    //services are not overwritten to s and h as minifiers tend to do.
    //all factories, services, values must be added here to function
    wahlinTwoController.$inject = ['$scope', 'getTexts', '$log'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wahlin-2-controller', wahlinTwoController);

}());


