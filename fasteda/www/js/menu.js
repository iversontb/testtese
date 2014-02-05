$(function(){

    var foodTabs_top = $('.foodTabs').offset().top;

    $(window).scroll(function() {
        scrollElem2 = $(window).scrollTop();

        if( scrollElem2 >= foodTabs_top ){

            $('.foodTabs > li').css({'background':'none'});
            $('.foodTabs').css( {
                'position' : 'fixed',
                'top': '0',
                'width': '100%',
                'background': '#f65940',
                'left': '0',
                'padding-left': '57px',
                'margin-left': '0'


            } );

            $('.foodTabs > li > a').css( {
                'color' : '#fff'
            } );
            $('.foodTabs > li > a span').css( {
                'border-bottom' : '1px dashed #fff'
            } );


        }
        else{
            $('.foodTabs > li').css({'background':'#fff'});

            $('.foodTabs').css( {
                'position' : 'relative',
                'top':'auto',
                'background': 'none',
                'padding-left': '0',
                'margin-left': '7px'

            } );
            $('.foodTabs > li > a').css( {
                'color' : '#02869b'
            } );
            $('.foodTabs > li > a span').css( {
                'border-bottom' : '1px dashed #02869b'
            } );


        }

    });



    $('.productImg').mouseover( function(){
        $(this).parent().find('.description').stop().fadeIn();
    });


    $('.productImg').mouseleave( function(){
        $(this).parent().find('.description').css({'display':'none'});
    });

    $(window).load(function () {
        var productWidth = $('.product').width(),
            productHeight = $('.product').height();

        $('.madeList').css({'top':productHeight});


        $('.listOf').css({'width': productWidth});

        $('.product').each( function(){

            var productCount = $( this ).find('.listOf').length;
            $( this ).find('.madeList').css({'width': productWidth*productCount+4});

        } );
    });

    $(window).bind('resize',function(){

        var productWidth = $('.product').width(),
            productHeight = $('.product').height();

        $('.madeList').css({'top':productHeight})

        $('.listOf').css({'width': productWidth});

        $('.product').each( function(){

            var productCount = $( this ).find('.listOf').length;
            $( this ).find('.madeList').css({'width': productWidth*productCount+4});

        } );



    });

    $('.product').on('click','.madeFood', function(){
        $(this).addClass('active');
        $(this).next().slideDown();
        $(this).next().next().slideDown();



        return false;
    });


    $('.madeList').mouseleave( function(){
        $(this).css({'display':'none'});
        $(this).parent().find('.active').removeClass('active');

    });

} );


