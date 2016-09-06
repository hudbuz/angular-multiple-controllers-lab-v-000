function ContactController () {

  var vm = this;
  vm.name = "Hud"
  vm.email = 'hzb2@cornell.edu'
  vm.phone = 7023716634

  this.changeName = function () {
    vm.name = 'mike'
  }


}

angular
  .module('app')
  .controller('ContactController', ContactController)