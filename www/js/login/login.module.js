'use strict';

angular.module('starter.login', [])
    .controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {

        var vm = this;

        $scope.$parent.clearFabs();
        $timeout(function() {
            $scope.$parent.hideHeader();
        }, 0);
        ionicMaterialInk.displayEffect();
    });

    //TODO : put es6 system import 
//require('./login.controller');
