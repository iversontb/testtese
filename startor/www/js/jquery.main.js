$(function(){

    $(window).scroll(function() {
        scrollElem = (window.scrollY==undefined)?document.documentElement.scrollTop:window.scrollY;
        if( scrollElem >= 164 ){
            console.log(scrollElem);
            $('.moveBlock' ).css( {
                'position' : 'fixed',
                'top':'0',
                'left':'0'

            } );
        }
        else{
            $( '.moveBlock' ).css( {
                'position' : 'absolute',
                'top':'78px',
                'left':'0'

            } );
        }
    });




    $('.gallImg').hover(
        function(){
            $(this).find('.descript').css({'display':'block'});
        },
        function(){
            $(this).find('.descript').css({'display':'none'});
        }
    );


    // работа табов
    $( '.content .asideMenu li a' ).click(function(){
        $( '.content .asideMenu li a' ).removeClass('active');
        $(this).addClass('active');

        var _id = $( this ).attr( 'id' ),
            _this=$( '.block ' ).eq(_id);
            topElem = $(this).position().top;

        $( '.block' ).css({ 'display': 'none' });

        _this.css({'top':topElem+30});
        _this.css({ 'display': 'block' });

        return false;
    });


} );