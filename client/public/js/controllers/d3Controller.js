/**
 * Created by Drew on 2016-09-26.
 *
 * Working in this controller to test D3 methods etc with angular before building a custom directive.
 */

(function () {

    var dThreeController = function ($scope, $http, $log, d3Service) {


        var numbers = [1, 12, 125, 511, 51, 5];

        var svg = d3Service.select("body").append("svg")
            .attr("id", "bar-chart")
            .attr("width", 800)
            .attr("height", 500);

        svg.selectAll(".bar")
            .data(numbers)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", 0)
            .attr("y", function (d, i) {
                return i * 20;
            })
            .attr("width", function (d, i) {
                return d;
            })
            .attr("height", 19);


        $log.log('The d3 controller is here!');

        //get some random data to graph.
        $http({
            method: 'GET',
            url: '/api/month-data'
        }).then(function successCallback(response) {

            print(response.data);

        }, function errorCallback(response) {
            console.log('There was an error', response);
        });


        var print = function (data) {
            $log.log(data);
            //find the domain/range of the data we are getting
            var extent = d3Service.extent(data, function (data) {
                return data.value;
            });
            $log.log(extent);
        }
    };

    //services are not overwritten to s and h as minifiers tend to do.
    dThreeController.$inject = ['$scope', '$http', '$log', 'd3Service'];
    //register the controller with the angular module
    angular.module('angular-app').controller('dThreeController', dThreeController);


}());


