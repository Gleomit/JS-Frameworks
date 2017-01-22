var videoSystemApp = videoSystemApp || angular.module('videoSystem', ['ngRoute']);

videoSystemApp.directive('picture', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {

      ctrl.$asyncValidators.picture = function(modelValue, viewValue) {

        var def = $q.defer();

        $timeout(function() {
          var image = new Image();
          image.src = modelValue;
          image.onload = function() {
            scope.validURL = true;
            def.resolve();
          };

          image.onerror = function() {
            scope.validURL = false;
            def.reject();
          };

        }, 2000);

        return def.promise;
      };
    }
  };
});