//Modulo
var irrfModulo = angular.module('alcoolOuGazolinaApp', []);

//Controler
irrfModulo.controller('AGController', function($scope) {
    
    //Função para calcular
    $scope.calcular = function (){

        $scope.auxResultado = $scope.alcool / $scope.gazolina;

        //Verifica se Maior ou Menor que 0,7
        if($scope.auxResultado > 0.7){
            $scope.resultado = 'Abasteça Com Gazolina';

        }else   if($scope.auxResultado < 0.7){
            $scope.resultado = 'Abasteça Com Alcool';
        }

        $scope.exibeResultados = true;
    }
    
    
});