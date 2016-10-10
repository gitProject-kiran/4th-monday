require('./form-verify.scss');

export default {
  bindings: {
    author: '@',
    description :'@'
  },
  template: require('./form-verify.html'),
  controller: helloWorldController
};

function helloWorldController($scope) {
  'ngInject';

  $scope.data = 'form-verify';
  $scope.welcomePage         = false;
  console.log('directive form-verify');

}