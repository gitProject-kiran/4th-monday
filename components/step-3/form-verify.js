/**
 * Created by Kiran
 * taking the data report, date return and location
 */
export default {
  template: require('./form-verify.html'),
  controller: formVerifyController
};

function formVerifyController($scope,$state,customerInfoService,sendMailService) {
  'ngInject';

    $scope.customerInfo = customerInfoService;
    $scope.returnDate = customerInfoService.returndt.toString().split('00:00:00')[0];
    $scope.deportDate = customerInfoService.startdt.toString().split('00:00:00')[0];

  /*submit the form*/
  $scope.submit = function(){

    //sending the data to mail service
    sendMailService.sendMail(customerInfoService);

    alert('Thanks Please check your mail for confirmation');
    console.log('Thanks Please check your mail for confirmation >>>>>>>>>>');

    /*goes to initial point*/
    $state.go('app.home');

  }
}