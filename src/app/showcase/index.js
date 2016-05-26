'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),

        /* Custom */
        require('../signup'),
        'ngCookies'
    ])
    .config(require('./config'))
    .config(require('./route'))
    .controller('LoginCtrl', require('./controllers/LoginCtrl'))
    .factory('LoginService',  require('./services/LoginService'));
