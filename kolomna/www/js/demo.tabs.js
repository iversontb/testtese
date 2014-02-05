$( function(){

    $('.downBut').click( function(){
       return false;
    });



    $('.mainMenu a').click( function(){
        $('.mainMenu a').removeClass('active');
        $(this).addClass('active');
    });


    $('.programBut').click( function(){
        $('#0').trigger('click');
    });
    $('.leveBut').click( function(){
       $('#1').trigger('click');
    });

    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top-80
        }, 1000);
        e.preventDefault();
        return false;
    });


    // работа табов
    $( '.program' ).click(function(){
        $( '.program' ).removeClass('active');
        $(this).addClass('active');
        var _id = $( this ).attr( 'id' ),
            _this=$( '.tabBlock ' ).eq(_id);

        $( '.tabBlock' ).css({ 'display': 'none' });

        _this.fadeIn();

        return false;
    });

});