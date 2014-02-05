$(function(){


    $(window).scroll(function() {
        scrollElem = (window.scrollY==undefined)?document.documentElement.scrollTop:window.scrollY;


        if(!$('.baner_top').length){
            if( scrollElem >= 1 ){
                $( '.head_top' ).css( {
                    'position' : 'fixed',
                    'top':'0',
                    'left':'50%',
                    'margin-left':'-518px',
                    'width':'1043px'
                } );
            }
            else{
                $( '.head_top' ).css( {
                    'position' : 'relative',
                    'top':'0',
                    'left':'0',
                    'margin-left':'0',
                    'width':'100%'
                } );
            }

            if( scrollElem >= 59 ){
                $( '.main_menu' ).css( {
                    'position' : 'fixed',
                    'top':'35px',
                    'left':'50%',
                    'margin-left':'-518px',
                    'width':'1043px'
                } );
            }
            else{
                $( '.main_menu' ).css( {
                    'position' : 'absolute',
                    'top':'110px',
                    'left':'0',
                    'margin-left':'0',
                    'width':'100%'
                } );
            }
        }
        else{

            if( scrollElem >= 50 ){
                $( '.head_top' ).css( {
                    'position' : 'fixed',
                    'top':'0',
                    'left':'50%',
                    'margin-left':'-518px',
                    'width':'1043px'
                } );
            }
            else{
                $( '.head_top' ).css( {
                    'position' : 'relative',
                    'top':'0',
                    'left':'0',
                    'margin-left':'0',
                    'width':'100%'
                } );
            }

            if( scrollElem >= 129 ){
                $( '.main_menu' ).css( {
                    'position' : 'fixed',
                    'top':'35px',
                    'left':'50%',
                    'margin-left':'-518px',
                    'width':'1043px'
                } );
            }
            else{
                $( '.main_menu' ).css( {
                    'position' : 'absolute',
                    'top':'110px',
                    'left':'0',
                    'margin-left':'0',
                    'width':'100%'
                } );
            }

        }


    });


    $(".faq dt").on({
        'click': function(){
            var curElem = $( this ),
                nextcurElem = curElem.next();

            if( nextcurElem.css( 'display' ) == 'block' ){
                nextcurElem.slideUp(300);
                curElem.removeClass('faq__active')
            } else {
                nextcurElem.slideDown(300);
                curElem.addClass('faq__active')
            }
        }
    });
    checkTab();
    function checkTab(){
        var activeBlock = $('.dynamic dt.active + dd');
        $('.dynamic dd').css( { display: 'none' } );
        activeBlock.css( { display: 'block' } );
        $('.dynamic dl').css( { height: activeBlock.outerHeight() + 39 } );
    };
    $(".dynamic dt").on({
        'click': function(){
            var curElem = $( this );
            $('.dynamic dt').removeClass('active')
            curElem.addClass('active')
            checkTab();
        }
    });
    transaction();
    function transaction(){
        var  td;
        $( '.dynamic__districts tbody tr' ).each( function(){
            td = $(this).find('td').eq(-1);
            if(td.text()*1 > 0){
                td.css('color' , '#639485');
            }else if(td.text()*1 < 0){
                td.css('color' , '#dd3e3e');
            }
        });
    };
} );
