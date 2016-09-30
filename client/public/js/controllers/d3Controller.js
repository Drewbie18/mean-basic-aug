/**
 * Created by Drew on 2016-09-26.
 *
 * Working in this controller to test D3 methods etc with angular before building a custom directive.
 */

(function () {

    var dThreeController = function ($scope, $http, $log, d3Service) {

        //some basic data
        var numbers = [223, 24, 125, 311, 51, 87];

        var stats = [
            {key: 'monkey', value: 50},
            {key: 'horse', value: 100},
            {key: 'donkey', value: 110},
            {key: 'cat', value: 25},
            {key: 'dog', value: 45}];

        //dimensions of svg element
        var w = 800;
        var h = 500;

        //create scaling functions for x-y axes
        //these will accept the data passed to them.
        var x = d3Service.scale.linear()
            .domain([0, d3Service.max(numbers)])
            .range([0, w]);

        $log.log(x(311, 0));

        var y = d3Service.scale.linear()
            .domain([0, numbers.length])
            .range([0, h]);

        $log.log(y(2));


        //creating an svg variable that selects the body element
        //adds an svg element
        //adds, id, height and width values to element.
        //this creates a svg frame essentially with an id.
        var svg = d3Service.select("body").append("svg")
            .attr("id", "bar-chart")
            .attr("width", w)
            .attr("height", h);


        //prepare D3 to bind data to element classed as bar
        svg.selectAll(".bar")
        //pass data
            .data(numbers)
            .enter()
            //adding a rect element to data that is bound from numbers
            .append("rect")
            //so not classify the rect element to have a class of bar
            .attr("class", "bar-first")
            //set the x to 0 (origin)
            //to add additional classes to emelements
            .classed("foo", true)
            .attr("x", 0)
            //d is data that is bound and i is the index of the data in the array
            //the y values increase from top to bottom.
            //this function will stagger the bars.
            .attr("y", function (d, i) {
                return y(i);
            })
            //this sets the width of each rectangle to the value of the data
            .attr("width", function (d, i) {
                return x(d, i);
            })
            //set the height of the bar to 19 to give separation.
            .attr("height", function (d, i) {
                return y(1) - 1
            });

        //ADD text labels to the bar graph

        svg.selectAll("bar-first-label")
            .data(numbers)
            .enter()
            .append("text")
            .classed("bar-first-label", true)
            .text(function (d, i) {
                return d;
            });


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


