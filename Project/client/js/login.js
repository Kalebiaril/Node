(function ($) {
    // USE STRICT
    "use strict";

        $( "#login_form" ).submit(function( event ) {
            var form = this;
            var formData = {
                'login'              : $('input[name=login]').val(),
                'password'             : $('input[name=password]').val()             
            };
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/api/login",
                contentType: 'application/json',
                data: JSON.stringify(formData),
                dataType: "json",
                success: function (product) {
                    if(product)
                    {
                        location.href("index.html");
                    }     

                }
            });

            event.preventDefault();
        });
            
    })(jQuery);