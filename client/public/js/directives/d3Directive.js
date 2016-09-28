/**
 * Created by Drew on 2016-09-27.
 */
(function () {

    var d3Directive = function () {

        //define the template the the directive will render
        var template = '<svg width="850" height="200"></svg>'

        //define the controller that will be passed into the return.
        controller = ['$scope', function ($scope) {
            $scope.variable = 'Hello World';

        }];

        return {
            restrict: 'EA',

            scope: {},
            controller: controller,
            template: template
        };
    };

    //register the directive with the angular app
    angular.module('angular-app').directive('d3', d3Directive);

}());