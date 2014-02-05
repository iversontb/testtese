$(function(){

    $('.selectProd').click( function(){
        $(this).next().slideDown();
    });

    $('.selectWrap .openContainer span').click( function(){

        var elemText = $(this).clone();
        $(this).parent().prev().children().remove();
        elemText.appendTo('.selectProd');
        $(this).parent().slideUp();

    });

    $('.openContainer').mouseleave( function(){
        $(this).slideUp();
    });



    $('.sortType').on( 'click', '.sort dd > span, .showPage dd > span', function(){
        $(this).next().slideDown();
    });



    $('.sort .openContainer span').click( function(){

        var elemText = $(this).clone();
        $(this).parent().prev().remove();
        elemText.prependTo('.sort dd');
        $(this).parent().slideUp();

    });

    $('.showPage .openContainer span').click( function(){

        var elemText = $(this).clone();
        $(this).parent().prev().remove();
        elemText.prependTo('.showPage dd');
        $(this).parent().slideUp();

    });


    // работа табов
    $( '.content .tabsBlock a' ).click(function(){
        $( '.content .tabsBlock a' ).removeClass('active');
        $(this).addClass('active');
        var _id = $( this ).attr( 'id' ),
            _this=$( '.showType2 ' ).eq(_id);

        $( '.showType2' ).css({ 'display': 'none' });

        _this.fadeIn();

        return false;
    });

    $('.catalogList > li').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active');
        }
    );

    // инициализация маленькой галереи
    loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );
    $(".preview li a").live("click", function(){
        loadLightBox( $( this ) );
        return false;
    } );


} );


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href');

    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="269" width="244" alt=""></a>' );


};