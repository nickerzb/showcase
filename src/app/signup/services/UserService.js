'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService() {
    var UserService = {
        create: create
    };

    return UserService;

    //////////

    function create(username, password, confirmPassword) {
        //Verify Form
        if(password === confirmPassword 
        			&& !!password 
    				&& !!confirmPassword){
        	validUser(username);
        }else{
        	alert('Passwords must match and have a length.  Username must be Bookbottles... You\'ll know the password!');
        }
    }

    function validUser(username){
    	$cookies.put('username', username);
        $cookies.put('loggedIn', true);
    }
}

