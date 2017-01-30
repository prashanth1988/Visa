

    var app=angular.module('home',[]);
    app.directive('homeDir', function () {
        return{
            restrict: 'E',
            templateUrl: "js/modules/home/home.html",

            controller: ['$scope', function ($scope) {

            }],
            controllerAs: "homeCtrl"
        }
    })
