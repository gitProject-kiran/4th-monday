
export default function stateController($scope,customerDataService) {
    'ngInject';

   // we will store all of our form data in this object
    $scope.formData = {};

    //show the first page
    $scope.welcomePage = true;

    //hide the first page
    $scope.startForm = function(){
      $scope.welcomePage = false;
    };

    //store the employee information in gama data object
    $scope.gameData = {};

    //taking the city information in json file
    function load() {
        var req = require.context('!json!../', true, /data\.json$/);
        _.forEach(req.keys(), function(file) {
             $scope.gameData = _.merge({},  $scope.gameData, req(file));
        });
        customerDataService.customerData = $scope.gameData;
    }

    //initial calling
    load();

    //click on social icons
    angular.element('.btn-social').click(function () {
       alert('This is feature enhancement');
    });
}
