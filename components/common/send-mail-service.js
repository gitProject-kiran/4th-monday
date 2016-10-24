function sendMailService($http, $q) {
	this.sendMail = function(emailContain){

		/* call to mailer API */
        $http({  
          method: 'GET',
          url: 'http://localhost:5000/postEmail?email='+emailContain.email+
          		'&fName='+emailContain.fName+
          		'&lName='+emailContain.lName+
          		'&location='+emailContain.location+
          		'&startdt='+emailContain.startdt+
          		'&returndt='+emailContain.returndt+
          		'&mobile='+emailContain.mobile
        }).then(function successCallback(response) {
          console.log('response',response);
        });
    };         
}
module.exports = /*@ngInject*/ sendMailService;