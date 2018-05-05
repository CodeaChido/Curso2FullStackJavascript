app.controller("carrito", function($scope, $http){
    $scope.productos = [];

    $scope.obten_productos = function() {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/producto'
        }).then(
            function sucess(data) {
                console.log(data);
                $scope.productos = data.data;
                console.log('Obtencion correcta');
            },
            function error(err) {
                alert('Obtencion incorrecta');
            }
        )
    }
});