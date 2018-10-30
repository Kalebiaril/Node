(function ($) {
    // USE STRICT
    "use strict";

        $(document).ready(function () {            
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/categories",
                contentType: 'application/json',
                data: JSON.stringify({
                    name: name                  
                }),
                dataType: "json",
                success: function (data) {
                    if (data) {
                        fillDropdown(data);
                    } else {
                        error(data);
                    }
                },
                error: error
            });

            function error(err) {
                console.log(err);
            }
            function fillDropdown(data){
                $.each(data, function (index, value) {
                    $('#categoriesDropdown').append($('<option/>', { 
                        value: value._id,
                        text : value.name
                    }));
                });
            
            }
        });
        $( "#product_form" ).submit(function( event ) {
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/api/product",
                contentType: 'application/json',
                data: JSON.stringify({
                    name: name                  
                }),
                dataType: "json",
                success: function (data) {
                    if (data) {
                        console.log(data);
                    } else {
                        error(data);
                    }
                },
                error: error
            });

            event.preventDefault();
          });          

          $( "#submit_product" ).click(function() {
            $( "#product_form" ).submit();
          });
    })(jQuery);