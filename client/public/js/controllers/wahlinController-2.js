(function () {

    var wahlinTwoController = function ($scope, getTexts, $log, $filter) {
        console.log('wahlin-2-controller is here');

        console.log();
        console.log();

        var a = parseInt('N/A');
        var b = parseInt(null);
        var sum = a + 1;
        var sum2 = b + 2;

        console.log(a);
        console.log(b);
        console.log(sum);
        console.log(sum2);


        $scope.number = $filter('number')(15, 9);

        $scope.title = 'THIS IS THE SECOND PAGE';

        $scope.years = [null, '2016', '2017'];

        $scope.disableBtn = true;

        $scope.enable = function () {
            $scope.disableBtn = false;
        }


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
    wahlinTwoController.$inject = ['$scope', 'getTexts', '$log', '$filter'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wahlin-2-controller', wahlinTwoController);

}());


