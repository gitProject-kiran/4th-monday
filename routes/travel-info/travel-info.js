require('./travel-info.scss');
export default function stateController($scope, $state) {
    'ngInject';

      // we will store all of our form data in this object
    $scope.formData = {};
    
    /*// function to process the form
    $scope.processForm = function() {

      
    };*/
    console.log('h he',$scope.welcomePage);
    $scope.welcomePage = true;
    $scope.state = $state;
    console.log('state',$scope.state,$state.current.name )

    $scope.startForm = function(){
      console.log('h he >>>',$scope.welcomePage);
          $scope.welcomePage = false;
    };

    console.log('Kiran shinde');
    this.data = {
      			author   	: 'Kiran Shinde',
      			appName  	: 'app',
      			description	: 'description is long'
    		};
    	/*	$state.go('app.home');*/
}
