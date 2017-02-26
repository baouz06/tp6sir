var pokeApp = angular.module('pokedex', ['ngResource' ]);

//With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config([ '$resourceProvider', function($resourceProvider) {
	$resourceProvider.defaults.stripTrailingSlashes = false;
} ]);

//création d'un service factory 
pokeApp.factory('pokefactory', function($resource) {
	return $resource('http://pokeapi.co/api/v2/pokemon/:id'); 
});

pokeApp.service('pokeService', function($resource) {

	this.setId = function(idp){
		this.id =idp
	};
	this.getId = function(){
		return this.id;
	};
	this.setName = function(name2){
		this.name =name2
	};
	this.getName = function(){
		return this.name;
	};
	
});
// $resource
pokeApp.controller('pokeServiceController',function($scope,pokeService,pokefactory) {
	
	$scope.pake = pokefactory.get({id:6});
	console.log($scope.pake );
});




pokeApp.controller('PokeController',['$scope', '$log','$http', function($scope, $log,$http) {
	//recuperations des pokemonspar le service $http
   $http.get("http://pokeapi.co/api/v2/pokemon/psyduck/")
	  .then(function(response) {
	      $scope.pokemons = response.data;
	  });
	
	$scope.log = $log;
	
	$scope.listPoke = [ {
		"id" : 1,
		"name" : "Pikachu"

	}, 
	{
		"id" : 2,
		"name" : "Bulbizarre"
	}, 
	{
		"id" : 3,
		"name" : "Carabaffe"
	},
	{
		"id" : 4,
		"name" : "Tortank"
	},
	{
		"id" : 5,
		"name" : "Caninos"
	}

	];

	
}]);

