//define Module
var myAppModule = angular.module('myApp', []);

//define Controller
myAppModule.controller("PersonController"
, [function () {
    this.name = "John";
}]);

myAppModule.directive("ngRedBorder", function () {
    return {
        restrict: "A",
        link: function (scope, element, attr) {
            element.css({ "border": "1px solid red" });
        }
    };
});