require('./hello-world.scss');

export default {
  bindings: {
    author: '@',
    description :'@'
  },
  template: require('./hello-world.html'),
  controller: helloWorldController
};

function helloWorldController($scope) {
  'ngInject';

  $scope.data = 'kira nswhinde tandulawasdi';

  
  console.log('directive componenent');

}
