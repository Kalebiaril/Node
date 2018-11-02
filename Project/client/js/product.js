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
                       fillCategories(data);
                    } else {
                        error(data);
                    }
                },
                error: error
            });

            $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/product",
                contentType: 'application/json',
                data: JSON.stringify({
                    name: name                  
                }),
                dataType: "json",
                success: function (data) {
                    if (data) {
                        fillProducts(data);
                    } else {
                        error(data);
                    }
                },
                error: error
            });
            function error(err) {
                console.log(err);
            }

            function fillCategories(data){             
                $.each(data, function(){
                $('#categories').append(`
                    <li class="p-t-4">
                    <a href="#" class="categoryFilter s-text13" data-category-id="${this._id}">
                    ${this.name}
                    </a>
                </li>`);
                });
                $(".categoryFilter").on("click", function() {
                    filterByCategory($(this).data("category-name"));

                })
            }

            function filterByCategory(id){
                $('#products').empty();
                $.ajax({
                    type: "GET",
                    url: `http://localhost:8080/api/product/category?id=${id}`,
                    contentType: 'application/json',
                    data: JSON.stringify({
                        name: name                  
                    }),
                    dataType: "json",
                    success: function (data) {
                        if (data) {
                            fillProducts(data);
                        } else {
                            error(data);
                        }
                    },
                    error: error
                });
            }

            function fillProducts(products){             
                $.each(products, function(){
                $('#products').append(`
                <div class="col-sm-12 col-md-6 col-lg-4 p-b-50">
               
                <div class="block2">
                    <div class="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                        <img src="./images/${this.image_url}" alt="${this.name}">

                        <div class="block2-overlay trans-0-4">
                            <a href="#" class="block2-btn-addwishlist hov-pointer trans-0-4">
                                <i class="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                <i class="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                            </a>

                            <div class="block2-btn-addcart w-size1 trans-0-4">
                                <!-- Button -->
                                <button class="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="block2-txt p-t-20">
                        <a href="product-detail.html" class="block2-name dis-block s-text3 p-b-5">
                            ${this.name}
                        </a>

                        <span class="block2-price m-text6 p-r-5">
                        ${this.price}
                        </span>
                    </div>
                </div>
            </div>`);                        
                });
            }
        });
    })(jQuery);