function customerInfoService() {
	var customer = {};
		customer.fName 		= '';
		customer.lName 		= '';
		customer.email 		= '';
		customer.location   = '';
		customer.startdt    = '';
		customer.returndt   = '';
		customer.mobile		= '';
    return customer;              
}
module.exports = /*@ngInject*/ customerInfoService;