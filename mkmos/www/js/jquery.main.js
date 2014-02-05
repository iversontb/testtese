$(function(){



    $(window).scroll(function() {
        scrollElem = (window.scrollY==undefined)?document.documentElement.scrollTop:window.scrollY;
        if( scrollElem >= 164 ){
            $( '.menuTop' ).css( {
                'position' : 'fixed',
                'top':'0',
                'left':'50%',
                'margin-left':'-566px',
                'width':'1131px',
                'padding-left':'85px'
            } );
        }
        else{
            $( '.menuTop' ).css( {
                'position' : 'absolute',
                'top':'-101px',
                'left':'0',
                'margin-left':'0',
                'width':'960px',
                'padding-left':'0'
            } );
        }
    });

} );