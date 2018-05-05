var app = angular.module("aplicacion", []);

app.controller("login", function($scope, $http){
    $scope.email = "";
    $scope.password = "";

    $scope.loguea = function() {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/api/login',
            data: {
                email: $scope.email,
                password: $scope.password
            }
        }).then(
            function sucess(data) {
                console.log(data);
                console.log('Login correcto');
            },
            function error(err) {
                console.log('Login incorrecto');
            }
        )
    }
});