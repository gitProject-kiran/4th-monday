/**
 * Created by Kiran on 25-10-2016.
 * taking the information of employee
 */
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