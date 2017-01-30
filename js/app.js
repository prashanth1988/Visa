    var app = angular.module('VisaApp',['ngRoute','header-dir','footer-dir','home']);
    app.controller('appController', function ($scope) {
        $scope.name = 'Visa';
    });
    app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'js/modules/layout/layout.html',
                controller: 'commonController',
                data:'home'
            })
    }]);
    app.controller('commonController', ['$scope', '$http', '$route', function($scope, $http, $route) {
        $scope.pageName = $route.current.data;
        $scope.childPage = $route.current.childPage;
    }]);
