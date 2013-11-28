//define Module
var myAppModule = angular.module('myApp', []);

//define Controller
myAppModule.controller("PersonController"
, [function () {
    this.name = "John";
}]);