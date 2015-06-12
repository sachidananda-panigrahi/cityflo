$(document).ready(function(){
    console.log('user validation called');
    $('#loginForm').validate({
        errorElement: 'span',
        errorClass: 'error',
        validClass: "success",
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: 'Please enter your email',
                email:'Please enter a valid email'
            },
            password: {
                required: 'Please enter your password',
                minlength: 'Password must be greater than 5 characters'
            }
        }
    });

    $('#signupForm').validate({
        errorElement: 'span',
        errorClass: 'error',
        validClass: "success",
        rules: {
            email: {
                required: true,
                email: true,
                remote: {
                    url: "/api/userpresent",
                    type: "post"
                }
                // notEqual: user
            },
            mobile: {
                required: true,
                minlength: 10,
                maxlength: 10,
                number: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: 'Please enter your email',
                email:'Please enter a valid email',
                remote: "Email already in use!"
            },
            mobile: {
                required: 'Please enter your mobile number',
                minlength: 'Please enter a valid mobile number',
                maxlength: 'Please enter a valid mobile number',
                number: 'Please enter a valid mobile number'
            },
            password: {
                required: 'Please enter your password',
                minlength: 'Password must be greater than 5 characters'
            }
        }
    });

})