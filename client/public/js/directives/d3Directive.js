/**
 * Created by Drew on 2016-09-27.
 */
(function () {

    var dThree = function () {

        //define the template the the directive will render
        var template = '<svg width="850" height="200"></svg><br>' +
            '<h3>{{variable}}</h3>' +
            '<h3>{{minVal}}</h3>';

        //define the controller that will be passed into the return.
        controller = ['$scope', 'd3Service', function ($scope, d3Service) {
            $scope.variable = 'Hello World';

            var data = [10, 15, 1, 2, 5, 6, 11];
            console.log(d3Service);

            console.log(d3Service.min(data));
            $scope.minVal = d3Service.min(data);

        }];

        return {
            restrict: 'EA',
            scope: {},
            controller: controller,
            template: template
        };
    };

    //register the directive with the angular app
    angular.module('angular-app').directive('dThree', dThree);

}());