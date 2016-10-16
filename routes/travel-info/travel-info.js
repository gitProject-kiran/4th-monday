require('./travel-info.scss');
export default function stateController($scope, $state, $http) {
    'ngInject';

   // we will store all of our form data in this object
    $scope.formData = {};

    $scope.welcomePage = true;
    $scope.startForm = function(){
      $scope.welcomePage = false;
    };

     
}
