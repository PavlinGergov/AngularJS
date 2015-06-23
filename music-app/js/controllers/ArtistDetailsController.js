/* globals angular*/
'use strict';

angular.module('musicApp').controller('ArtistDetailsController', ['$scope', function($scope){

  var artist = {
    id: 1,
    name: 'Linkin Park',
    img: 'http://www.billboard.com/files/styles/promo_650/public/media/linkin-park-billboard-650.jpg?itok=Ue3tvCWj',
    created: '01/10/1998',
    additionalInformation: {
      location: 'USA',
      bandMembers: ['Chester Benington', 'Mike Shinoda', 'Felix', 'Joseph Han', 'Rob Burton'],
      albums: 12,
      singles: 25
    },
    albums: [
      {
        id: 1,
        name: 'Hybrid Theory',
        image: 'http://ecx.images-amazon.com/images/I/81iC%2BO0ec2L._SL1448_.jpg',
        year: 1999,
        songs: 12,
        rating: 0,
        price: 12,
        status: 1
      }, {
        id: 2,
        name: 'Meteora',
        image: 'http://i289.photobucket.com/albums/ll230/Gaspin/LinkinParkMeteora.jpg',
        year: 2003,
        songs: 10,
        rating: 0,
        price: 11,
        status: 2
      }, {
        id: 3,
        name: 'A thousand suns',
        image: 'https://consequenceofsound.files.wordpress.com/2010/09/linkin-park-a-thousand-suns-special-edition-official-album-cover.jpg',
        year: 2008,
        songs: 14,
        rating: 0,
        price: 10,
        status: 3
      }
    ]
  };

  $scope.artist = artist;

  $scope.hideInformation = true;
  $scope.showInfoText = 'Show';
  $scope.showMoreInfo = showMoreInfo;

  $scope.hideBandMembers = true;
  $scope.showBandMembersText = 'Show';
  $scope.showBandMembers = showBandMembers;

  $scope.bandRecordsShowText = 'Show';
  $scope.bandRecordsShown = false;
  $scope.showAndHideRecords = showAndHideRecords;

  $scope.upVoteRating = upVoteRating;
  $scope.downVoteRating = downVoteRating;

  function showMoreInfo() {
    if ($scope.hideInformation === true){
      $scope.hideInformation = false;
      $scope.showInfoText = 'Hide';
    } else {
      $scope.hideInformation = true;
      $scope.showInfoText = 'Show';
    }
  }

  function showBandMembers() {
    if ($scope.hideBandMembers === true){
      $scope.hideBandMembers = false;
      $scope.showBandMembersText = 'Hide';
    } else {
      $scope.hideBandMembers = true;
      $scope.showBandMembersText = 'Show';
    }
  }

  function showAndHideRecords() {
    if ($scope.bandRecordsShown === false){
      $scope.bandRecordsShown = true;
      $scope.bandRecordsShowText = 'Hide';
    } else {
      $scope.bandRecordsShown = false;
      $scope.bandRecordsShowText = 'Show';
    }
  }

  function upVoteRating(album) {
    album.rating ++;
  }

  function downVoteRating(album) {
    if (album.rating > 0) {
    album.rating --;
    }
  }

}]);
