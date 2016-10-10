require('./form-location.scss');

export default {
  bindings: {
    author: '@',
    description :'@'
  },
  template: require('./form-location.html'),
  controller: helloWorldController
};

function helloWorldController($scope) {
  'ngInject';

  $scope.data = 'form-location';
  $scope.welcomePage         = false;
 

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

   $scope.dateOptions = {
        maxDate: new Date(2020, 5, 22),
        minDate: new Date()
    };

  /*var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];
  console.log('directive form-location');
  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }*/
}