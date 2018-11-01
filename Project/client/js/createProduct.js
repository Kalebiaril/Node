(function ($) {
    // USE STRICT
    "use strict";

        $(document).ready(function () {            
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/categories",                             
               
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
            var form = this;
            var formData = {
                'name'              : $('input[name=name]').val(),
                'image_url'             : $('input[name=image_url]').val(),
                'description'    : $('input[name=description]').val(),
                'price'    : $('input[name=price]').val(),
                'category_id' : $('input[name=categoriesDropdown]').val(),
            };
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/api/product",
                contentType: 'application/json',
                data: JSON.stringify(formData),
                dataType: "json",
                success: function (product) {
                    if(product)
                    {
                        $('#result').html(`<p> ${product.name} has been created</p>`);
                        form.reset();
                    }     

                }
            });

            event.preventDefault();
          });        
    })(jQuery);