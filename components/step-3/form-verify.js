require('./form-verify.scss');

export default {
  template: require('./form-verify.html'),
  controller: helloWorldController
};

function helloWorldController($scope,customerInfoService,sendMailService) {
  'ngInject';

  console.log('email info',sendMailService,customerInfoService)
  sendMailService.sendMail(customerInfoService);
  /*$http({  
          method: 'GET',
          url: 'http://localhost:3000/postEmail?email='+kiranshinde42@gmail.com+''
        }).then(function successCallback(response) {
          console.log('response',response);
        });
  */
}