//define Module
var myAppModule = angular.module('myApp', []);

//define Controller
myAppModule.controller("PersonController"
    , ["personRepository", function (repo) {
        var ctrl = this;
        repo.get()
            .success(function(data) {
                ctrl.model = data;
            });
    }]);

//define Service
myAppModule.service("personRepository"
    , ["$http",
        function (http) {
            return {
                get: function () {
                    return http.get("data/Person.json");
                }
            };
        }]);