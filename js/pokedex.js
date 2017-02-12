var pokeApp = angular.module('pokedex', [ 'ngResource' ]);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config([ '$resourceProvider', function($resourceProvider) {
	$resourceProvider.defaults.stripTrailingSlashes = false;
} ]);

var app = angular.module('myApp', []);
app.controller('PokeController', function($scope) {
	console.log($scope);
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

	
});

