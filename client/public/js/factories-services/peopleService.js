/**
 * Created by payetted on 9/2/2016.
 * Create a basic service
 * 1. IIFE
 * 2.using the this keyword
 * 3. the object returned is the function we create rather than an object within that object
 */


(function(){

    var getPeopleService = function(){
        var people = ['Drew', 'Corry'];

        this.getPeoples = function() {
            console.log('here is the service....');
            return people;
        }

    };

    
    //register with the module
    angular.module('angular-app').service('getPeopleService', getPeopleService);


}());