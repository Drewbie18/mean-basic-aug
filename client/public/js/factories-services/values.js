/**
 * Created by payetted on 9/2/2016.
 * t
 *Holds a key value pair that is registered to the angular module.
 * value is not available in the config
 *
 * CONSTANT is available in the config .
 *
 * key = appSettings
 * value = object
 */

angular.module('angular-app').value('appSettings',{
    title:'mean basic application',
    version:'1',
    author:'Drewbie'

});

/*
angular.module('angular-app').constant('appSettings',{
    title:'mean basic application',
    version:'1',
    author:'Drewbie'

});
    
    */