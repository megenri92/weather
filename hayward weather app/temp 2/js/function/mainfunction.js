app.controller('MainFunction', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
  });
}]);