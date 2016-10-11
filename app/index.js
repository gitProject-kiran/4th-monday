let dataInfo = require('../compositions/hello-world-module.js');
angular.module('travel-booking', [
        'ngSanitize',
        'ui.router',
        'ngAnimate',
        'ui.bootstrap',
        'ui.select',
        dataInfo
    ])
    .config(require('../routes/routes'))
    .constant('appName', 'travel-booking')
    .run(function($rootScope, $log) {
        $rootScope.$on(function sessionExpiredListener() {
            $log.debug('session expired');
            // TODO: Node module for frame communication messages?
            // TODO: Domain checking
            top.postMessage('_SESSION_EXPIRED_', '*');
        });
    });