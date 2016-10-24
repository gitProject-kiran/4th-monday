require('./form-location.scss');

export default {
  template: require('./form-location.html'),
  controller: formLocationController
};

function formLocationController($scope,$state, customerInfoService) {
  'ngInject';

  $scope.itemArray = [
        {id: 1, name: 'Boston'},
        {id: 2, name: 'New York'},
        {id: 3, name: 'Chicago'},
        {id: 4, name: 'San Francisco'}
    ];

  $scope.selected = { value: $scope.itemArray[0] };

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };


  $scope.formats =  'dd.MM.yyyy';

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  $scope.$watch('startdt', function(newval, oldval){
        if($scope.returndt < $scope.startdt) {
            $scope.returndt = '';
        };
  });
    
  $scope.$watch('returndt', function(newval, oldval){
        if($scope.returndt < $scope.startdt) {
            $scope.returndt = '';
        };
  });

  $scope.dateOptions = {
        maxDate: new Date(2020, 5, 22),
        minDate: new Date()
  };

 $scope.nextSection = function(){

  if($scope.startdt && $scope.returndt){
    customerInfoService.location = $scope.selected.value.name;
    customerInfoService.startdt  = $scope.startdt;
    customerInfoService.returndt = $scope.returndt;
      console.log('startdet enddate',customerInfoService.startdt,customerInfoService.returndt);
    $state.go('app.submit');
  }
 }
}