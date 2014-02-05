$(function(){

    $("#slider").slider({
        range: "min",
        min: 0,
        max: 5000,
        value: 0,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value + " р."  );
        }
    });
    $( "#amount" ).val($( "#slider" ).slider( "value" )+ " р." );


} );

