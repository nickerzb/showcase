'use strict';

module.exports = LoginService;

/**
 * @ngInject
 */
function LoginService() {
    var LoginService = {
        login: login
    };

    return LoginService;

    //////////

    function login(username, password){
        console.log(username);
        console.log(password);
    	if(!!username && !! password 
                && username.trim() === "showcase" 
                && password.trim() === "bookbottles"){
        	validUser(username);
        }else{
        	alert('Invalid User');
        }
    }

    function validUser(username){
    	$cookies.put('username', username);
        $cookies.put('loggedIn', true);
        console.log("logged in!");
    }
}

