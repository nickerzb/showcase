'use strict';

module.exports = LoginCtrl;

/**
 * @ngInject
 */
function LoginCtrl(LoginService) {
    var vm = this;

    vm.login = LoginService.login;
}

