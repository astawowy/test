var d = new Date();
var n = d.getHours();
$('#getHour').html(n);

//LADOWANIE
$(document).ready(function() {
    $('select').change(function(){
        count = $(this).val();

        var getProducts = $.getJSON("data/example.json", function(data) {
            var html = '';

            countMax = data.count;

            if (count > countMax) {
                count = countMax;
            }


            for (index = 0; index < count; index++) {

                var baseGrossPriceFloat = data.list[index].price.gross.base_float;
                var finalGrossPriceFloat = data.list[index].price.gross.final_float;
                var promoGrossPriceFloat = baseGrossPriceFloat - finalGrossPriceFloat;

                if (baseGrossPriceFloat == promoGrossPriceFloat) {
                    $('.priceGrossBase').css('display', 'none')
                    $('.priceGrossPromo').css('display', 'none')
                }



                html += '<div class="product colLightGray relative" bigImg="https://outletmeblowy.pl/environment/cache/images/500_500_productGfx_'+data.list[index].main_image+'.jpg"><div class="productContent colBlack w100">';
                var availability = data.list[index].availability.name;
                var unavailable = availability.includes("brak");
                if (unavailable == true ){
                    html += '<div class="overlay"><div class="unavailable colWhite absolute">' + availability + '</div></div>';
                } else {
                    html += '<div class="availability tCenter absolute"><div class="cart"></div>' + availability + '</div>';
                }
                html += '<div class="priceGrossPromo tCenter absolute colRed">oszczędzasz : '+promoGrossPriceFloat+'zł</div>';
                html += '<img class="w100 absolute" src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_'+data.list[index].main_image+'.jpg">';
                html += '<div class="priceGrossBase strike absolute">' +data.list[index].price.gross.base+ '</div>';
                html += '<div class="priceGrossFinal absolute colRed">' +data.list[index].price.gross.final+ '</div>';
                html += '<div class="name w100 absolute">' +data.list[index].name+ '</div>';
                html += '<div class="producer colDarkGray absolute">' +data.list[index].producer.name+ '</div>';

                html += '</div></div>';
            };

            $('#productContainer').html(html);

            var numItems = $('.product').length;

            if (numItems == 2) {
                $('.product').addClass("w49");
            }

        });

    });
    $(function(){
        $("select").change();
    });
});

