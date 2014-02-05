$(function(){

    $(".gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 1
    });

    $('.downContainer > a').click( function(){
       $('.townList').fadeIn();
    });


    $('.closeBut').click( function(){
        $('.townList').fadeOut();
    });

    $(".showMap").click( function () {

        if ($('.mapContainer').css('display')=="none"){
            $('.mapContainer').slideDown(300);
        }
        else {$('.mapContainer').slideUp(300);}
    });


});