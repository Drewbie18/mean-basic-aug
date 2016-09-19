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


//This will be a directive that takes height, width and displays a google map.

/*
(function () {

    var mapGeoLocation = ['$window', function ($window) {

        //define a template
        var template = '<p><span id="status">Looking up geolocation...</span></p>' + '<br/><div id="map"></div>';
        var mapContainer = null;
        var status = null;

        function link(scope, element, attributes) {
            status = angular.element(document.getElementById('status'));
            mapContainer = angular.element(document.getElementById('map'));

            //this will set the style attribute on the map to what is written in the html for height, width
            //we are choose px here perhaps change that up....
            mapContainer.attr('style', 'height: ' + scope.height + 'px;' + 'width:' + scope.width + 'px');


            //this HTML 5 function requires a success callback (mapLocation in this case) and
            //a error callback (geoError)
            $window.navigator.geolocation.getCurrentPosition(mapLocation, geoError);

        }

        //DEFINE geoLocation successCallback. this also enstatniates a google map.

        function mapLocation(pos) {

            //this is jqlite function that will change the html of the status id, in this case from 'Looking up geolocation...'
            status.html('Found your location! Lat: ' + pos.coords.latitude + ',Long:' + pos.coords.longitude);

            //grab google lat,lng coordinates
            var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

            //set the options for the google maps
            var mapOptions = {
                zoom: 15,
                center: latLng,
                mapTypeControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            //use mapContainer[0] to sort of get out of the jqlite wrapper container. So we are getting the actual
            //DOM object. So this gets the mapContainer, which is the id="map" set in link.
            var googleMap = new google.maps.Map(mapContainer[0], mapOptions);

            var markerOptions = {
                position: latLng,
                map: map,
                title: "YOUR LOCATION MOTHERFUCKER"
            }


            //create a marker in the map.
            var googleMapMarker = new google.maps.Marker(markerOptions);

        }


        function geoError(error) {
            status.html('Failed Geo Lookup. Message: ' + error.message);
        }


        return {
            //don't need a restrict EA c(element, attribute
            scope: {
                height: '@',
                width: '@'

            },
            link: link,
            template: template

        }

    }];

    angular.module('angular-app').directive('mapGeoLocation', mapGeoLocation);

}());
*/
//Show the compile feature, and how a binding can be delayed.

(function () {

    var delayBindWithCompile = ['$interpolate', function ($interpolate) {

        var compile = function (templateElement, templateAttributes) {

            console.log('In the compile function');
            //caching the delayNind function to be used alter
            var interpolateFunc = $interpolate(templateAttributes.delayBind);

            //this will set the delayBind to null so no bindings occur without us setting them.
            templateAttributes.$set('delayBind', null);

            return {
                pre: function (scope, element, attrs) {
                    console.log('in the delayBind pre ' + element[0].tagName);
                },
                //this is actually the link function
                post: function (scope, element, attrs) {
                    console.log('in the delayBind post ' + element[0].tagName);
                    element.on(attrs.trigger, function (event) {

                        var attr = attrs.attribute
                        var val = interpolateFunc(scope);
                        if(attr && !element.attr(attr)){
                            element.attr(attr, val);
                        }
                    });
                }
            }
        };

        return {
            restrict: 'A',
            compile: compile
        }


    }];


    angular.module('angular-app').directive('delayBind', delayBindWithCompile);

}());






