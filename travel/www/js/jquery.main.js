



var isMove = false;
$(function(){

//    $("#coin-slider").coinslider({
//        width: 1024,
//        height: 462,
//        spw: 5,
//        sph: 4,
//        delay: 5000
//    });


        $('#slides').slidesjs({
            width: 1024,
            height: 462,
            navigation: false,
            play: {
                active: true,
                auto: true,
                interval: 5000,
                swap: true
            }
        });




    $("#slider").slider({
        min: 0,
        max: 1000,
        values: [0,1000],
        range: true,
        stop: function(event, ui) {
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        },
        slide: function(event, ui){
            $("input#minCost").val($("#slider").slider("values",0));
            $("input#maxCost").val($("#slider").slider("values",1));
        }
    });

//vars
    var conveyor = $(".content-conveyor", $("#sliderContent")),
        item = $(".item", $("#sliderContent"));

    //set length of conveyor
    conveyor.css("width", item.length * parseInt(item.css("width")));

    //config
    var sliderOpts = {
        max: (item.length * parseInt(item.css("width"))) - parseInt($(".viewer", $("#sliderContent")).css("width")),
        slide: function(e, ui) {
            conveyor.css("left", "-" + ui.value + "px");
        },
        stop: function(e, ui) {
            conveyor.css("left", "-" + ui.value + "px");
        },
        change: function(e, ui) {
            conveyor.css("left", "-" + ui.value + "px");
        }
    };

    //create slider
    $("#slider2").slider(sliderOpts);

    $("#slider3").slider({
        min: 0,
        max: 1000,
        values: 0,
        range: false,
        stop: function(event, ui) {
            $("input#minCost").val($("#slider3").slider("values",0));
        },
        slide: function(event, ui){
            $("input#minCost").val($("#slider3").slider("values",0));
            $("input#maxCost").val($("#slider3").slider("values",1));
        }
    });
    $( '.btn-prev' ).on( {
        mouseup: function(){
            isMoveLeft = false;
        },
        mouseleave: function(){
            isMoveLeft = false;
        },
        mousedown: function(){
            isMoveLeft = true;
        }
    } );
    $( '.btn-next' ).on( {
        mouseup: function(){
            isMoveRight = false;
        },
        mouseleave: function(){
            isMoveRight = false;
        },
        mousedown: function(){
            isMoveRight = true;
        }
    } );
    var isMoveLeft = false;
    var isMoveRight = false;
    moveLeft();
    function moveLeft(){
        setTimeout( function(){
            if( isMoveLeft ){
                var value = $("#slider2").slider( "option", "value" ) - 2;
                if ( value < 0 ) value = 0;
                $( "#slider2" ).slider( "value", value );
            }
            if( isMoveRight ){
                var value = $("#slider2").slider( "option", "value" ) + 2;
                if ( value > 1000 ) value = 1000;
                $( "#slider2" ).slider( "value", value );
            }
            moveLeft();
        }, 1000/60 );
    }

//    $('.address a').click( function(){
//        $('.popUp').fadeIn();
//        return false;
//    });
//    $('.closeBut').click( function(){
//        $('.popUp').fadeOut();
//        return false;
//    });
//



    $( '.propouseBlock li' ).hover(
        function () {
            $( '.propouseBlock li' ).removeClass('active');
            $(this).addClass('active');
            var _id = $( this ).attr( 'id' ),
                _this=$( '.propouseBlock .imgWrap' ).eq(_id);

            $( '.propouseBlock .imgWrap' ).css({ 'display': 'none' });

            _this.fadeIn();

        },
        function () {

        }
    );


    $('.searchForm dd a').click( function(){
        $('.searchForm .inputWrap input').val($(this).text());
        return false;
    });


    $('a[href="#"],.sortBut').filter(function(){
        if($(this).attr('class') == 'addressSite'){
            return false;
        }
        return $(this).closest('#slides').attr('id') === undefined && $(this).parent().attr('id') != 'slider2';
    }).click( function(){
            $('.popUp').fadeIn();
            return false;
        });
    $('.main-menu__layout a').filter(function(){return $(this).attr('href') != '/turyi.html'}).click( function(){
        $('.popUp').fadeIn();
        return false;
    });
    $('.closeBut').click( function(){
        $('.popUp').fadeOut();
        return false;
    });




    // инициализация маленькой галереи
    loadLightBox( $( '.miniGallWrap .preview li a' ).eq(0)  );

    $( '.miniGallWrap .preview' ).on( 'click', 'li a', function() {
        loadLightBox( $( this ) );
        $( '.miniGallWrap .preview a').removeClass('active');
        $(this).addClass('active');
        return false;
    } );



    if($('.littlGall').is('div')){
        $('.preview').css('width',$('.preview li').length*112);
        if($('.preview').width() > 672) $('#buttonNext').css({'display': 'block'});
    }
    $('#buttonNext').click(function(){
        if(!isMove) moveGalery(-112);
        return false;
    });
    $('#buttonPrev').click(function(){
        if(!isMove) moveGalery(112);
        return false;
    });



});



function moveGalery(direction){
    isMove = true;
    var galery = $('.preview');
    var position = galery.position();
    galery.animate({left: position.left + direction}, 500,
        function(){
            isMove = false;
            position = galery.position();
            if (direction < 0) $('#buttonPrev').css({'display': 'block'});
            else {$('#buttonNext').css({'display': 'block'});}
            if ((galery.width() + position.left) <= 672)
                $('#buttonNext').css({'display': 'none'});
            else if (position.left == 0)
                $('#buttonPrev').css({'display': 'none'});
        });
}

// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().attr('src'),
        hrefAttr = obj.attr('href');

    $( '.imgBigWrap a' ).remove();
    $( '.imgBigWrap' ).append( '<a href="'+ hrefAttr +'"><img src="'+ srcAttr +'"  height="338" width="672" alt=""></a>' );


};



$(function(){
    $('.offers .topicType').click(function(){
        $('.offers .topicType').next().addClass('hide');

       $(this).next().removeClass('hide');

        if( $(this).hasClass('up')) {
            $('.offers .topicType').removeClass('up').addClass('down');
            $(this).removeClass('up').addClass('down');
        } else {
            $('.offers .topicType').removeClass('up').addClass('down');
            $(this).removeClass('down').addClass('up');
        }

       $(this).next().slideToggle();
        $('.offers .hide').slideUp();
    });
} );