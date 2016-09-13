/**
 * Created by payetted on 9/13/2016.
 */
(function () {

    var linkDemo = function () {

        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                //click element changes the html
                element.on('click', function () {
                    element.html('YOU CLICKED ME');
                });

                //mouse over element changes the color
                element.on('mouseover', function () {
                    element.css('background-color', 'blue');

                });

                element.on('mouseleave', function () {
                    element.css('background-color', 'white');
                });
            }
        }


    };


    angular.module('angular-app').directive('linkDemo', linkDemo);

}());

(function () {

    var tableHelper = function () {

        //define a template
        var template = '<div class="tableHelper"></div>';

        //define link function before passing it to object that is being returned by this directive.
        var link = function (scope, element, attrs, ngModelController) {

            var headerCols = [];
            var tableStart = '<table>';
            var tableEnd = '</table>';
            var table = '';
            var visibleProps = [];
            var sortCol = null;
            var sortDir = 1;

            //need to know if the datasource property changes! Cause we'll have to re-render the table
            scope.$watchCollection('datasource', render);





        };

        return {

            restrict: 'E',
            require: 'ngModel',
            scope: {
                //want to accept an object, two isolate scope properties.
                columnmap: '=',
                datasource: '='
            },

            link: link,
            template: template

        };

    };


    angular.module('angular-app').directive('tableHelper', tableHelper);

}());