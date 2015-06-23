/* globals angular*/
'use strict';

angular.module('musicApp').filter('status', function() {
  return function(input) {
    switch (input) {
      case 1: return 'Sold out';
      case 2: return 'Released';
      case 3: return 'Unreleased';
    }
  };
});
