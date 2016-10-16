require('./form-location.scss');

export default {
  bindings: {
    author: '@',
    description :'@'
  },
  template: require('./form-location.html'),
  controller: helloWorldController
};

function helloWorldController($scope,$state) {
  'ngInject';

  $scope.data           = 'form-location';
  $scope.welcomePage    = false;
  
  $scope.itemArray = [
        {id: 1, name: 'first'},
        {id: 2, name: 'second'},
        {id: 3, name: 'third'},
        {id: 4, name: 'fourth'},
        {id: 5, name: 'fifth'},
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
    $state.go('app.submit');
  }
 }
}