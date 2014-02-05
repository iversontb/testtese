$(function(){

    $(window).scroll(function() {
        elemPos = $( '.navContainer' ).offset().top + 200;
        windowTop = $(window).scrollTop();
        sum = elemPos - windowTop;
        mapConteiner = $( '.bigWrap' ).offset().top + 200;



        scrollElem = (window.scrollY==undefined)?document.documentElement.scrollTop:window.scrollY;

        if(sum < 0){
            $( '.navContainer' ).css( { 'position' : 'fixed', 'top' : -200, 'left' : '50%', 'margin-left' : -490} );
            $( '.navContainer' ).css( { 'box-shadow' : '0 0 10px #afb3b6'} );
            $( '.navContainer' ).css( { 'background-position' : '0 438px'} );
        }
        else if( mapConteiner > elemPos){
            $( '.navContainer' ).css( { 'position' : 'absolute', 'top' : 0, 'left' : 0, 'margin-left' : 0} );
            $( '.navContainer' ).css( { 'box-shadow' : 'none'} );
            $( '.navContainer' ).css( { 'background-position' : '0 437px'} );
        }

    });


    if( elem == 1){
        var params = {
            changedEl: ".selectWrap select"
        }
        cuSel(params);
    }


} );