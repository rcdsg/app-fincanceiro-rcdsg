(function (){

angular.module('primeiraApp').constant('consts', {
  appName: 'Minha Finança - APP para controle de gastos - RC',
  version: '1.0',
  owner: 'Rodrigo Costa',
  year: '2020',
  site: 'http://rcdsg.com',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])

})()
