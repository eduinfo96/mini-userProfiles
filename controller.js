angular.module('userProfiles').controller( 'MainController' , function($scope, mainService){
  $scope.getUsers = function() {
    mainService.getUsers().then( function( result ) {
      $scope.users = result;


    })
  }

  $scope.getUsers();
  // $scope.toggleFavorite = mainService.toggleFavorite;
})
