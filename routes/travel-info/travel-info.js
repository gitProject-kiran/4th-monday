require('./travel-info.scss');
export default function stateController($scope,$state) {
    'ngInject';

   // we will store all of our form data in this object
    $scope.formData = {};

    //show the first page
    $scope.welcomePage = true;

    //hide the first page
    $scope.startForm = function(){
      $scope.welcomePage = false;
    };
}
