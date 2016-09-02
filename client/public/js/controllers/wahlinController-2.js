(function () {

    var wahlinTwoConroller = function ($scope, $http) {
        console.log('wahlin-2-controller is here');

        $scope.title = 'THIS IS THE SECOND PAGE';

    }
     //use the inject service to ensure that is there is minification the injected
    //services are not overwritten to s and h as minifiers tend to do.
    //all factories, services, values must be added here to function
    wahlinTwoConroller.$inject = ['$scope', '$http'];

    //register the controller with the angular module
    angular.module('angular-app').controller('wahlin-2-controller', wahlinTwoConroller);

}());


