/*require('./travel-info/travel-info.scss');*/
var stateController = require('./travel-info/travel-info.js');
export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
             url: '/',
            template: require('./travel-info/travel-info.html'),
            controller: stateController
        })
        .state('app.home', {
            template: '<form-info></form-info>',
            controller: stateController
        })
        .state('app.location', {
            template: '<form-location></form-location>',
            controller: stateController
        })
        .state('app.submit', {
            template: '<form-verify></form-verify>',
            controller: stateController
        });
}
