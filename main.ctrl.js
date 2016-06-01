angular.module('app').controller("MainController", function(){ //Declare controller for app module
  var vm = this;

  vm.title = 'AngularJS Tutorial Example'; //Declare a variable title attached to the controller
  vm.searchInput = '';

  //Hash variable
  vm.shows = [
    {
      title: 'Game of Thrones',
      year: 2011,
      favorite: true
    },
    {
      title: 'Walking Dead',
      year: 2010,
      favorite: false
    },
    {
      title: 'Firefly',
      year: 2002,
      favorite: true
    },
    {
      title: 'Banshee',
      year: 2013,
      favorite: true
    }
  ];
});
