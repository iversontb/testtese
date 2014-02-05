$(function(){

    $('.showMap').click( function(){
       $(this).prev().animate({
           height: "650"

       }, 500 );
        return false;
    });

    $(".asideMenu span").click(
        function () {
            if ($(this).next().css('display')=="none"){
                $(this).next().slideDown(300);
            }
            else {$(this).next().slideUp(300);}
        });



} );