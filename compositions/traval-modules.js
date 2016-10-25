const MODULE_NAME = 'sample-project.components';

export default MODULE_NAME;

angular.module(MODULE_NAME, [])
    .service('customerDataService',require('../components/common/customer-data-service.js'))
    .service('customerInfoService',require('../components/common/customer-info-service.js'))
    .service('sendMailService',require('../components/common/send-mail-service.js'))
    .component('formInfo', require('../components/step-1/form-info.js'))
    .component('formLocation', require('../components/step-2/form-location.js'))
    .component('formVerify', require('../components/step-3/form-verify.js'));
