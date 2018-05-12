app.controller("carrito", function($scope, $http, $rootScope){
    $scope.productos = [];

    $scope.obten_productos = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/producto'
        }).then(
            function sucess(data) {
                console.log($rootScope.carrito);
                $scope.productos = data.data;
                console.log($scope.productos)
                for (let i = 0; i < $scope.productos.length; i++) {
                    var producto = $scope.productos[i];
                    for (let j = 0; j < $rootScope.carrito.length; j++) {
                        const carro = $rootScope.carrito[j];
                        if (producto._id === carro._id){
                            $scope.productos[i].cantidad -= carro.compra;
                        }
                    }
                    
                }
            },
            function error(err) {
                alert('Obtencion incorrecta');
            }
        )
    }

    $scope.aniadir = function (producto) {
        if (producto.cantidad >= producto.compra && producto.compra > 0) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/carrito',
                data: {
                    producto: producto
                }
            }).then(
                function sucess(data) {
                    console.log(data);
                },
                function error(err) {
                    alert('Obtencion incorrecta');
                }
            )
        } else {
            alert("Ingrese un valor dentro del rango del stock");
        }
    }
});