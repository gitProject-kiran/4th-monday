require('./form-info.scss');

export default {
  template: require('./form-info.html'),
  controller: formInfoController
};

function formInfoController($scope,$state) {
  'ngInject';

  $scope.formData = {};

  /* validating the enter value correct and fill is not empty*/
  function validations(validation,dataLength){
      return validation === false && dataLength; 
  }

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

 
  /*goes to next section*/
  $scope.nextSection         = function(){

    /*before goes to next section firstly check all field fill or not*/
    var fName  = validations($scope.firstNameValidate, $scope.formData.firstName);
    var lName  = validations($scope.lastNameValidate, $scope.formData.lastName);
    var email  = validations($scope.emailValidation, $scope.formData.email);
    var mobile = validations($scope.phoneValidation, $scope.formData.usrtel);

    var result = fName && lName && email && mobile; 
    if(result){
      $state.go('app.location');
    }
    
  }

}
