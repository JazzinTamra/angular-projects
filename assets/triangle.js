/**
 * Created by Tamra on 1/25/2016.
 */
/* JavaScript Document */

(function(){
    var app = angular.module("myTriangle",[]);

    app.controller("TriangleController",["$scope",function($scope){
        $scope.side_a = 5;
        $scope.side_b = 6;
        $scope.side_c = 7;


        $scope.calculate = function(){
            $scope.perimeter = ($scope.side_a + $scope.side_b + $scope.side_c) / 2;
            $scope.area = Math.sqrt($scope.perimeter * (($scope.perimeter - $scope.side_a)*($scope.perimeter - $scope.side_b)*($scope.perimeter - $scope.side_c)));

            //if($scope.side_a < 0 ){ $scope.side_a = .01;}
            //if($scope.side_b < 0 ){ $scope.side_b = .01;}
            //if($scope.side_c < 0 ){ $scope.side_c = .01;}
        }

        $scope.calculate(); //test to see it this function worked
    }])

})();



