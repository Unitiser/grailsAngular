// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
//= require lib/angular.min.js
//= require lib/angular-ui-router.min.js
//= require_tree .
//= require_self

(function(){


    angular.module('helloAngular', ['ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', HelloAngularStates])
    .controller('CitationCtrl', ['$scope', 'Citations', CitationCtrl])
    .service('Citations', ['$http', '$q', CitationService]);

    // Define the routes
    function HelloAngularStates($stateProvider, $urlRouterProvider) {
      // For any unmatched url, redirect to /
      $urlRouterProvider.otherwise("/");

      // Now set up the states
      $stateProvider
        .state('citation', {
          url: "/",
          templateUrl: "citation",
          controller : 'CitationCtrl'
        });
    }

    // Control the view
    function CitationCtrl($scope, Citations){
        $scope.addCitation = addCitation;
        $scope.removeCitation = removeCitation;

        listCitations();

        return this;


        function listCitations(){
            Citations.list()
            .then(function(citations){
                console.log(citations);
                $scope.citations = citations;
            });
        }

        function addCitation(citation){
            Citations.add(citation)
            .then(function(newCitation){
                $scope.newCitation = {};
                $scope.citations.push(newCitation);
            })
        }

        function removeCitation(citation){
            Citations.remove(citation.id)
            .then(function(){
                $scope.citations.splice($scope.citations.indexOf(citation), 1);    
            });
        }

    }

    // Interact with the server
    function CitationService($http, $q){
        var vm = this;
        vm.add = add;
        vm.list = list;
        vm.remove = remove;

        return vm;

        // List citations
        function list(){
            return $http.get('citation/list')
            .then(function(res){
                if(res.status == 200)
                    return res.data;
                else
                    return $q.reject(res);
            })
            .catch(function(e){
                console.log('Something went wrong while listing citations');
                console.log(e);
                return $q.reject(e);
            });
        }
        // Add citation
        function add(citation){
            return $http.post('citation/add', citation)
            .then(function(res){
                if(res.status == 200)
                    return res.data;
                else
                    return $q.reject(res);
            })
            .catch(function(e){
                console.log('Something went wrong while adding citations');
                console.log(e);
                return $q.reject(e);
            });
        }
        
        // Remove citation
        function remove(citationId){
            return $http.post('citation/remove', {id : citationId})
            .then(function(res){
                if(res.status == 200)
                    return res.data;
                else
                    return $q.reject(res);
            })
            .catch(function(e){
                console.log('Something went wrong while removing citations');
                console.log(e);
                return $q.reject(e);
            });
        }
    }

})()
