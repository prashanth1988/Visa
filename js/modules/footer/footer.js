
    var app=angular.module('footer-dir',[]);
    app.directive('footerDir', function () {
        return {
            restrict: 'E',
            templateUrl: "js/modules/footer/footer.html",

            controller: ['$scope', function ($scope) {

            }],
            controllerAs: "footerCtrl"
        }

    });
