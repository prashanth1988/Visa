    var app = angular.module('header-dir',[]);
       app.directive('headerDir', function () {
            return {
                restrict: 'E',
                templateUrl: "js/modules/header/header.html",

                controller: ['$scope', function ($scope) {

                }],
                controllerAs: "headerCtrl"
            }

        });
