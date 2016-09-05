/**
 * Created by Drew on 2016-09-05.
 */

(function () {

    var getTexts = function ($http) {
        var factory = {};
        factory.getTexts = function () {

            //here we will use the $http but just the get and let the controller
            //handle the promise.
            return $http.get('/api/comments/all');
        };

        return factory;
    }


    getTexts.$inject = ['$http'];
    angular.module('angular-app').factory('getTexts', getTexts);


}());
