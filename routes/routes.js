/*require('./travel-info/travel-info.scss');*/
var stateController = require('./travel-info/travel-info.js')
export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            template: require('./travel-info/travel-info.html'),
            controller: stateController,
            controllerAs: 'launch'
        })
        .state('app.home', {
            url: '/',
            template: '<hello-world author="{{launch.data.appName}}" description="{{launch.data.description}}" ></hello-world>',
            controller: stateController,
            controllerAs: 'launch'
        })
        .state('app.location', {
            url: '/',
            template: '<form-location></form-location>',
            controller: stateController,
            controllerAs: 'launch'
        })
        .state('app.submit', {
            url: '/',
            template: '<form-verify author="{{launch.data.appName}}" description="{{launch.data.description}}" ></form-verify>',
            controller: stateController,
            controllerAs: 'launch'
        });
}
