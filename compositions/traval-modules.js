const MODULE_NAME = 'sample-project.components';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
  .component('formInfo', require('../components/step-1/form-info.js'))
  .component('formLocation', require('../components/step-2/form-location.js'))
  .component('formVerify', require('../components/step-3/form-verify.js'));