function StaffController() {

  this.name = "Bill"
  this.email = 'firstman@whitehouse.com'
  this.phone = 5555555555

}

angular 
  .module('app')
  .controller('StaffController', StaffController)