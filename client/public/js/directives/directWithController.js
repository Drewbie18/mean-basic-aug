/**
 * Created by Drew on 2016-09-26.
 */


(function () {

    var directiveWithController = function () {

        //define the template the the directive will render
        var template = '<h3>The is the variable in the controller: {{variable}}</h3><br>' +
            '<button class="btn btn-default" ng-click="click()">CLICK ME</button>';

        //define the controller that will be passed into the return.
        controller = ['$scope', function ($scope) {
            $scope.variable = 'Hello World';

            //simple angular ng-click directive.
            $scope.click = function () {
                $scope.variable = 'CHANGED THE VARIABLE!';
            }
        }];

        return {
            restrict: 'EA',

            scope: {},
            controller: controller,
            template: template
        };
    };

    //register the directive with the angular app
    angular.module('angular-app').directive('directiveWithController', directiveWithController);

}());


(function () {


    var transcludeDirective = function () {

        //create a template that will wrap the user's html in the transclude area

        var template = '<h3>This is some trancluded shit</h3><br>' +
            '<hr>' +
            '<ng-transclude></ng-transclude>' +
            '<hr>' +

            '<h3>This is the end of the transclude</h3>';


        //define the controller, in this case just some data
        controller = ['$scope', function ($scope) {


            $scope.people = ['Drew', 'Corry', 'Dave', 'Andrew'];


        }];

        //be sure to set transclude
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                people: '='
            },
            controller: controller,
            template: template

        }
    }


    angular.module('angular-app').directive('transcludeDirective', transcludeDirective);

}());