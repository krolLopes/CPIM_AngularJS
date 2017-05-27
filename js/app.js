var app = angular.module('testeAngular', ['angularUtils.directives.dirPagination']);
app.controller('listarDados', function($scope, $http){

});

app.controller('listarDados', function($scope, $http){
    $scope.dados = [];
    $http.get("dados.json").success(function(response){
        $scope.dados = response;
    });
    $scope.ordenar = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
});