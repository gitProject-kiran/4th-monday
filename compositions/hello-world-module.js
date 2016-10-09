const MODULE_NAME = 'sample-project.components';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
  .component('helloWorld', require('../components/hello-world/hello-world.js'))
  .component('formLocation', require('../components/step2/form-location.js'))
  .component('formVerify', require('../components/step3/form-verify.js'));