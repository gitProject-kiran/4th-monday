require('./form-location.scss');

export default {
    template: require('./form-location.html'),
    controller: formLocationController
};

function formLocationController($scope, $state, customerInfoService, customerDataService) {
    'ngInject';

    $scope.itemArray = [];
    $scope.returnDate = false;
    for (var i = 1; customerDataService.customerData[i] != null; i++) {
        $scope.itemArray.push({
            id: customerDataService.customerData[i].code,
            name: customerDataService.customerData[i].name
        })
    }


    $scope.selected = {value: $scope.itemArray[0]};

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };


    $scope.formats = 'dd.MM.yyyy';

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    $scope.$watch('startdt', function () {
        if ($scope.returndt < $scope.startdt) {
            $scope.returndt = '';
        };
    });

    $scope.$watch('returndt', function () {
        if ($scope.returndt < $scope.startdt) {
            $scope.returndt = '';
            $scope.returnDate = true;
        }else{
            $scope.returnDate = false;
        }
    });

    $scope.dateOptions = {
        maxDate: new Date(2020, 5, 22),
        minDate: new Date()
    };

    $scope.nextSection = function () {
        if ($scope.startdt && $scope.returndt) {
            customerInfoService.location = $scope.selected.value.name;
            customerInfoService.startdt = $scope.startdt;
            customerInfoService.returndt = $scope.returndt;

            //goes to next section
            $state.go('app.submit');
        }
    }
}