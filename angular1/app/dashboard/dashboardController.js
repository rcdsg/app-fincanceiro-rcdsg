angular.module('primeiraApp').controller('DashboardCtrl', [
  '$scope',
  '$http',
  'consts',
  DashboardController
])

function DashboardController($scope, $http, consts) {

  $scope.getSummary = function() {
    const url = `${consts.apiUrl}/billingSummary`;
    $http.get(url).then(function({credit = 0, debt = 0}) {
      $scope.credit = credit
      $scope.debt = debt
      $scope.total = credit - debt
    })
  }

  $scope.getSummary()
}
