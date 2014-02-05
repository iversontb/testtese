$(function(){

    $("#slider").slider({
        range: "min",
        min: 3,
        max: 100,
        value: 0,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value  );
            total_price();
        }
    });

    $( "#amount" ).val($( "#slider" ).slider( "value" ) );

    $( "#amount" ).keyup(function() {
        total_price();

        var elem = $(this);
        if( elem.val() == ""){
            $("#slider").slider( "value", 3 );
        }
        else{
            $("#slider").slider( "value", elem.val() );
        }
    });

    $('.qty_up').click(function(){
        $('.server .link span').html(parseInt($('.server .link span').html()) + 1);
//        $('#total').val(parseInt($('#total').val()) + 1000);
    });
    $('.qty_down').click(function(){
        if (parseInt($('.server .link span').html()) <= 1){
            return false;
        }
        $('.server .link span').html(parseInt($('.server .link span').html()) - 1);
//        $('#total').val(parseInt($('#total').val()) - 1000);

    });

} );

function total_price(){
    var input_val = parseInt($( "#amount").val());
    switch (input_val) {
        case 1:
        case 2:
        case 3:
            $('#total').val(input_val*1000);
            break;
        case 4:
            $('#total').val(input_val*950);
            break;
        case 5:
            $('#total').val(input_val*900);
            break;
        case 6:
            $('#total').val(input_val*850);
            break;
        case 7:
            $('#total').val(input_val*800);
            break;
        case 8:
            $('#total').val(input_val*750);
            break;
        case 9:
            $('#total').val(input_val*700);
            break;
        case 10:
            $('#total').val(input_val*650);
            break;
        case 11:
            $('#total').val(input_val*600);
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            $('#total').val(input_val*600);
            break;
    }
}
