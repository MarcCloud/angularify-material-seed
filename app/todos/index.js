/**
 * Created by Marco Romero on 1/8/2015.
 */
var angular = require('angular');
module.exports= angular.module('spa.todos',[])
    .controller('TodosController',[require('./controller-todos')]);