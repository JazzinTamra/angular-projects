/* JavaScript Document */

(function() { //function within () allows this to live in this file with other javascripts

    var app = angular.module('myCalculator',[]); //declaring the varialbe app to be myCalculator
    app.controller('CalculatorController',['$scope',function($scope){ //defining controller(name),service is $scope, putting $scope in the function allows
        $scope.lumen_options = [375, 600, 900, 1125, 1600]; //the list in the dropdown menu
        $scope.current_lumens = 600; //set the options to begin with this

    }])
})();


