/**
 * Created by Kiran on 25-10-2016.
 * sending the mail
 */
function sendMailService($http) {
    this.sendMail = function (emailContain) {

        /* call to mailer API */
        $http({
            method: 'POST',
            url: 'http://localhost:5000/postEmail?email=' + emailContain.email +
            '&fName     =' + emailContain.fName +
            '&lName     =' + emailContain.lName +
            '&location  =' + emailContain.location +
            '&startdt   =' + emailContain.startdt +
            '&returndt  =' + emailContain.returndt +
            '&mobile    =' + emailContain.mobile
        }).then(function successCallback(response) {
            console.log('response', response);
        });
    };
}
module.exports = /*@ngInject*/ sendMailService;