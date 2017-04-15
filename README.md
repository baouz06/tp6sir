#TP6 : Pokedex
objectif:
1) manipuler des variable avec $scope
2) lier un  valuer d'une balise à une variable avec ng-model
3) creation d'un controlleur et parcourir une liste avec ng-repeat
4) le principe de $http, $resource et creation d'un service
5) pricipe de $watch
6) creation d'une directive

Remarque: ce TP fonctionne uniquement sur Firefox,aussi sur chrome sur un serveur WAMP par exemple.

Première partie 

La première partie consiste à lier une balise à une variable en utilisant ng-model == nomVariable et afficher cette dernière {{ nomVariable }}  dans la page html, ensuite stocker et déclarer des variable dans le .js pour les utiliser par la suite  dans .html grâce à $scope.
On peut parcourir une lise de données, tableau  grâce à ng-repeat  et faire un filtre dessus avec  filter|nomVariable (voir le code).

Deuxième partie 

Récupération des données à partir d’un URL  en utilisant $http.get(‘url’) ou bien $resource (‘url’).
Création d’un service soit avec factory ou bien service ; le principe est le même, c’est juste la syntaxe qui est différente : factory  retourne ce que la fonction retourne, tandis qu’avec un  service on ne retourne rien (pas de return) car c’est l’objet  lui-même qui va être retourné.
Le rôle d’un service est comme un modèle on peut l’utiliser partout dans notre application et dans plusieurs contrôleurs et pour l’utiliser il suffit de l’injecter dans la fonction du contrôleur comme un paramètre comme ceci :
pokeApp.controller('pokeServiceController', function($scope, pokeService,
		pokefactory, $http)
Dans notre code nous avons créé deux services pokeService et pokefactory , dans pokeService on a créé des getters et setters pour mettre à jour l’id du Pokémon récupéré par  pokefactory  comme ceci :
pokeService.setId(8);
$scope.pake = pokefactory.get({id : pokeService.getId()});

Troisième partie: 

Utilisation de $watch 
$watch est un service qui permet de mettre  à jour l'affichage du pokemon  lors du changement du Pokémon recherché.
$watch a deux paramètre :
 le premier ce que nous devons observer (dans notre cas c’est le select du multichoix)
Le deuxième est  la fonction exécutée (dans notre  cas dès qu’on sélectionne un Pokémon on le voit affiché en bleu en bas).
Création d’une directive
Nous  avons créé une directive de type élément (E) nommé pokedex, ensuite nous l’avons appelé dans index.html avec <pokedex></pokedex> et cette directive représente le body de index.html qui est déclaré dans pokedex.html comme ceci :

.directive('pokedex', function() {
    return {
        restrict: 'E',
        templateUrl: 'pokedex.html'
      };
    });

	



