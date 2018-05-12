var app = angular.module("aplicacion", []);

app.controller("barra", function($scope, $http, $rootScope){

    $rootScope.carrito = [];

    $scope.cerrar_sesion = function() {
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/api/login'
        }).then(
            function sucess(data) {
                console.log(data);
                console.log('Sesion cerrada correctamente');
                window.location.href = "/";
            },
            function error(err) {
                alert('Sesion cerrada incorrectamente');
            }
        )
    }

    $scope.getCarrito = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/carrito'
        }).then(
            function sucess(data) {
                console.log(data);
                $rootScope.carrito = data.data;
            },
            function error(err) {
                alert('Error');
            }
        )
    }
});