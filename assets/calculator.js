/* JavaScript Document */

(function(){
    var app = angular.module("myCalculator",[]);

    app.controller("CalculatorController",["$scope",function($scope){
        $scope.lumen_options = [375, 600, 900, 1125, 1600];
        $scope.current_lumens = 600;
        $scope.current_cost = 13;
        $scope.current_hours = 4;
        $scope.current_days = 365;
    }])

})();

//function within () allows this to live in this file with other javascripts
//declaring the variable app to be myCalculator
//defining controller(name),service is $scope, putting $scope in the function allows
//the list in the drop down menu
//set the options to begin with this


