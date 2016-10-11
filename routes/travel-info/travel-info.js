require('./travel-info.scss');
export default function stateController($scope, $state, $http) {
    'ngInject';

   // we will store all of our form data in this object
    $scope.formData = {};

    $scope.welcomePage = true;
    $scope.state = $state;
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
