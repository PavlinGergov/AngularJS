/* globals angular*/
'use strict';

(function() {
  var app = angular.module('sampleStore', []);

  app.controller('motorsController', function(){
    this.products = motorcycles;
  });

  var motorcycles = [{make: 'Honda', model:'VFR750F', price: 8450},
                     {make: 'Ducati', model:'Paso 907', price: 3200},
                     {make: 'BMW', model:'R1200RT', price: 7699}];
})();
