/* globals angular, alert*/
'use strict';

angular.module('musicApp').controller('EditArtistController', ['$scope', function($scope){
  $scope.saveArtist = function(artist, newArtistForm) {
    if (newArtistForm.$valid) {
      alert('Artist saved: ' + artist.name + ' ' + artist.created); // TODO: save artist
    } else {
      alert('Invalid data');
    }
  };
  $scope.cancel = function() {
    alert('cancel'); // TODO: cancel, redirrect
  };
}]);
