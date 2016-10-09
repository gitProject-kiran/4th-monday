require('./travel-info.scss');
export default function stateController($scope, $state) {
    'ngInject';

      // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {

   
        alert('awesome!');  
    };
    $scope.welcomePage = true;
    

    $scope.startForm = function(){
          $scope.welcomePage = false;
    };
    this.data = {
      			author   	: 'Kiran Shinde',
      			appName  	: 'app',
      			description	: 'description is long'
    		};
    	/*	$state.go('app.home');*/
}
