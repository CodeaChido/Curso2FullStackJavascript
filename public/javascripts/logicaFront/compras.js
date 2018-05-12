app.controller("compras", function($scope, $http, $rootScope){

    $scope.eliminar = function (producto) {
        var index = $rootScope.carrito.indexOf(producto);
        $rootScope.carrito.splice(index, 1);
        console.log($rootScope.carrito)
        $http({
            method: 'DELETE',
            url: 'http://localhost:3000/api/carrito',
            params: {
                carrito: $rootScope.carrito
            }
        }).then(
            function sucess(data) {
                alert('Lo eliminastessss');
            },
            function error(err) {
                alert('incorrecta');
            }
        )
    }

    $scope.comprar = function () {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/api/compra',
            data: {
                carrito: $rootScope.carrito
            }
        }).then(
            function sucess(data) {
                alert('Ya comprastesss');
                $rootScope.carrito = [];
            },
            function error(err) {
                alert('incorrecta');
            }
        )
    }
});