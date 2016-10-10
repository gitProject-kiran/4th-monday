require('./hello-world.scss');

export default {
  bindings: {
    author: '@',
    description :'@'
  },
  template: require('./hello-world.html'),
  controller: helloWorldController
};

function helloWorldController($scope,$state) {
  'ngInject';

  $scope.welcomePage         = false;
  $scope.firstNameValidate   = false;
  $scope.lastNameValidate    = false;
  $scope.emailValidation     = false;
  $scope.phoneValidation     = false;  

  console.log('hi hello',$scope.welcomePage );

  $scope.formData = {};

  /*input text validation string*/
  var textOnly               = /^[A-z]+$/;
  $scope.textValidate        = function(inputField,inputText){
          $scope[inputField] = !textOnly.test($scope.formData[inputText]);
  }

  /*email validation string only*/
  var emailOnly             = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  $scope.email              = function(){
     $scope.emailValidation =  !emailOnly.test($scope.formData.email);
  }

  /*mobile number verification*/
  var mobileOnly             = /^[0-9]+$/;
  $scope.mobile              = function(){
      if($scope.formData.usrtel && $scope.formData.usrtel.length === 10){
         $scope.phoneValidation  = !mobileOnly.test($scope.formData.usrtel);
      }else{
        $scope.phoneValidation = true;
      }
  }  

  $scope.nextSection         = function(){
    if($scope.formData.firstName && !$scope.firstNameValidate && !$scope.lastNameValidate && !$scope.emailValidation && !$scope.phoneValidation){
      console.log('$scope.firstNameValidate',$scope.firstNameValidate,$scope.lastNameValidate);
      $state.go('app.location');
    }
    
  }

  
 /* console.log('directive componenent');*/

}
