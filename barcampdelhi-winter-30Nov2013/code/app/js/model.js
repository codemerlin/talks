//define Module
var myAppModule = angular.module('myApp', []);

//define Controller
myAppModule.controller("PersonController"
    , [function () {
        //define Model
        this.model = { name: "John", age: 34 };
    }]);