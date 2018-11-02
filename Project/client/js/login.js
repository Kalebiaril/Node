(function ($) {
    // USE STRICT
    "use strict";

        $( "#login_form").submit(function(event){   
            var formData = {
                'login'              : $('input[name=login]').val(),
                'password'           : $('input[name=password]').val()
            };      
              
            post("http://localhost:8080/api/login", formData);
            event.preventDefault();
        });

        $( "#sign_up_form").submit(function(event){    
            var formData = {
                'login'              : $('input[name=sign_up_login]').val(),
                'password'           : $('input[name=sign_up_password]').val(),
                'checkPassword'      : $('input[name=password_check]').val()
            };        
            if(formData.checkPassword){
                if(formData.checkPassword!= formData.password)
                {
                    $('input[name=sign_up_password]').css('background','light-red');
                    $('input[name=password_check]').css('background','light-red');
                    event.preventDefault();
                    return;
                }
            }

            post("http://localhost:8080/api/signUp",formData);
            event.preventDefault();
        });

         function post(url, formData) {
            var form = this;         
        
            $.ajax({
                type: "POST",
                url: url,
                contentType: 'application/json',
                data: JSON.stringify(formData),
                dataType: "json",
                success: function (user) {      
                        if(user.isAdmin){            
                            window.location.href = '/createProduct.html'; 
                        }    
                        else{
                            window.location.href = '/profile.html'; 
                        }                 
                }
            });

            event.preventDefault();
        }
            
    })(jQuery);