$( function(){
    var scrolPanel = $( '.transition');

    $(window).scroll(function() {

        var scrollElem = $(window).scrollTop(),
            blocks = $('.site__content > div'),
            i;

        for( i=0; i < blocks.length; i++){

            if( blocks.eq(i).offset().top > scrollElem && blocks.eq(i).offset().top < scrollElem+$(window).height() ){

                $( '.transition li').removeClass('active');
                $( '.transition li').eq(i).addClass('active');

                break;

            }
        }

    });
    scrolPanel.find('li').on( {
        'click': function(){
            $( '.transition li').removeClass('active');
           var curItem = $( this ),
           newClass = curItem.attr('data-href'),
           nextItemTop = $( '.' + newClass  ).offset().top;
            curItem.addClass('active');
            $( 'html, body' ).stop( true, false );
            $( 'html, body' ).animate( { scrollTop: nextItemTop  }, 300 );
        }
    } );

    $('.next').on( {
        'click': function(){

            var curItem = $( this ),
                newClass = curItem.attr('data-href'),
                nextItemTop = $( '.' + newClass  ).offset().top;
            $( 'html, body' ).stop( true, false );
            $( 'html, body' ).animate( { scrollTop: nextItemTop  }, 300 );
            return false;
        }
    } );
} );
