/**
 * Created by U39303 on 1/8/2015.
 */
var angular = require('angular');
module.exports = angular.module('spa.home',[])
                        .controller('LandingController',[require('./controller-landing')]);