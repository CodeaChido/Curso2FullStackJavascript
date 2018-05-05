var app = angular.module("aplicacion", []);

app.controller("registro", function ($scope, $http) {

    $scope.nombre = ""
    $scope.apellidop = ""
    $scope.apellidom = ""
    $scope.email = ""
    $scope.password = ""
    $scope.edad = 0;

    $scope.registrarse = function () {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/api/users',
            data: {
                nombre: $scope.nombre,
                apellidop: $scope.apellidop,
                apellidom: $scope.apellidom,
                email: $scope.email,
                password: $scope.password,
                edad: $scope.edad
            }
        }).then(
            function sucess(data) {
                console.log(data);
                console.log('Registro correcto');
            },
            function error(err) {
                console.log(err);
                console.log('Registro incorrecto');
            }
        )
    }
});