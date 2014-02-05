$(function(){

    $('.tabsBlock').css({'display':'none'});
    $('.firstBlock').css({'display':'block'});

    // работа табов
    $( '.tabs a' ).click(function(){

        $( '.tabs a').removeClass('active');
        $(this).addClass('active');

        var _id = $( this ).attr( 'id' ),
            _this=$( '.tabsBlock ' ).eq(_id);

        $( '.tabsBlock' ).css({ 'display': 'none' });
        _this.css({ 'display': 'block' });

        return false;
    });

    $('.content .subMenu table td a').click( function(){

        $('.content .subMenu table td a').removeClass('active');
        $(this).addClass('active');
        $('.subLevel').css({'display':'none'});
        $(this).next().slideDown();


        return false;
    });

    $('.close').click( function(){
        $('.subLevel').css({'display':'none'});
        $('.content .subMenu table td a').removeClass('active');
    });




    var myGallery = $( '.gallWrap' ).clone();



    startGall();

    $(window).bind('resize',function(){
        $( '.gallWrap' ).remove();
        $('.wraper').prepend( myGallery );
        myGallery = $( '.gallWrap' ).clone();

        if($.browser.msie && $.browser.version<=7){
            $(".gallery a").append('<div class="moreLeft"></div><div class="moreRight"></div>');

        }

        startGall();
    });

    function startGall(){
        var countElems = $('.gallery li').length;
        if( countElems > 1) {
            elWidth = ($('.gallWrap').width());
            $('.gallery li').width(elWidth);
            $(".gallery").jCarouselLite({
                btnNext: ".next",
                btnPrev: ".prev",
                visible: 1
            });
        } else {
            elWidth = ($('.site__content').width())/countElems;
            $('.gallery li').width(elWidth);
        }
    }

    $(function () {
        var tabContainers = $('div.tabs > div'); // получаем массив контейнеров
        tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
        // далее обрабатывается клик по вкладке
        $('div.tabs ul.tabNavigation a').click(function () {
            tabContainers.hide(); // прячем все табы
            tabContainers.filter(this.hash).show(); // показываем содержимое текущего
            $('div.tabs ul.tabNavigation a').removeClass('selected'); // у всех убираем класс 'selected'
            $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
            return false;
        }).filter(':first').click();
    });
        $('#accordion > li ul')
            .click(function(event){
                event.stopPropagation();
            })
            .filter(':not(:first)')
            .hide();

        $('#accordion > li, #accordion > li > ul > li, #accordion > li > ul > li > ul > li').click(function(){
            var selfClick = $(this).find('ul:first').is(':visible');
            if(!selfClick) {
                $(this)
                    .parent()
                    .find('> li ul:visible')
                    .slideToggle();
            }

            $(this)
                .find('ul:first')
                .stop(true, true)
                .slideToggle();
        });

    $('#accordion > li').click(function(){

        if ($(this).hasClass('active')){
            $(this).removeClass('active')
        } else {
            $('#accordion > li').removeClass('active');

            $(this).addClass('active');
        }
    });

} );