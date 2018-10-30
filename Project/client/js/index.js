(function ($) {
    // USE STRICT
    "use strict";

        $(document).ready(function () {
            console.log("hi");
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
                       fillCategoriesBanner(data);
                    } else {
                        error(data);
                    }
                },
                error: error
            });

            function error(err) {
                console.log(err);
            }
            function fillCategoriesBanner(data){
                let i = 0;
                $('.category').each(function(){
                    if(data[i]){
                    $(this).text(data[i].name);
                    
                    i++;}
                });               
            }
        });
    })(jQuery);