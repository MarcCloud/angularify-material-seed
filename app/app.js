/**
 * Created by Marco Romero on 1/8/2015.
 */
    'use strict';
require('angular')
    .module('spa',[ require('angular-ui-router'),
                    require('angular-aria'),
                    require('angular-animate'),
                    require('angular-material'),
                    require('./landing').name,
                    require('./todos').name])
    .config(['$stateProvider','$urlRouterProvider',require('./routes')]);