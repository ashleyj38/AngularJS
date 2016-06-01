angular.module('app').controller("MainController", function(){ //Declare controller for app module
  var vm = this;

  vm.title = 'AngularJS Tutorial Example'; //Declare a variable title attached to the controller
  vm.searchInput = '';
});
