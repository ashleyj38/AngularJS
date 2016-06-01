angular.module('app').controller("MainController", function(){ //Declare controller for app module
  var vm = this;

  vm.title = 'AngularJS Tutorial Example'; //Declare a variable title attached to the controller
  vm.searchInput = '';

  //Hash variables

  //Show list
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

  //Ordering list
  vm.orders = [
    {
      id:1,
      title: 'Year Ascending',
      key: 'year',
      reverse: false
    },
    {
      id:2,
      title: 'Year Descending',
      key: 'year',
      reverse: true
    },
    {
      id:3,
      title: 'Title Ascending',
      key: 'title',
      reverse: false
    },
    {
      id:4,
      title: 'Title Descending',
      key: 'title',
      reverse: true
    }
  ];

  //Variable for order chosen
  vm.order = vm.orders[0];

vm.new = {};

vm.addShow = function() {
  vm.shows.push(vm.new);
  vm.new = {};
};

});
