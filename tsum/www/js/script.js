// функция выравнивания отступов между элементами верхнего меню
function setTopMenuJustification()
{
    var ul = $('ul#top-menu');
    var totalWidth = ul.width();
    var liAll = $('li', ul);

    var currentWidth = 0;
    for (i=0; i<liAll.length; i++)
    {
        currentWidth += $(liAll[i]).width();
    }
    var space = totalWidth - currentWidth - 7;
    var spaces = liAll.length - 1;
    var addW = parseInt(space / spaces);
    var addByOne = space - (addW * spaces);
    for (i=0; i<spaces; i++)
    {
        w = $(liAll[i]).width();
        newW = w + addW;
        if (i>0 && addByOne>0)
        {
            newW++;
            addByOne--;
        }
        $(liAll[i]).width(newW);
    }
}

// фотослайдер с точечной навигацией
jQuery.fn.photoSlider = function(/*options*/)
{
    /*var defaults = {
          show: false
    };
    var settings = $.extend(false, defaults, options);*/
    var sliders = [];
    $(this).each(function() {
        var sl = new PhotoSlider(this /*, settings*/);
        sliders[sliders.length] = sl;
    });
    return sliders;
}
function PhotoSlider(wrapper /*, settings*/) {
    this.init(wrapper /*, settings*/);
};
PhotoSlider.prototype = {
//    settings: false,
    items: [],
    wrapper: false,
    nav: false,
    current: 0,
    tmout: false,
    touchX: false,
    init: function(wrapper /*, settings*/) {
        var context = this;
        this.wrapper = wrapper;

        this.items = $('div.item', wrapper);
        this.items.hide();
        $(this.items[0]).show();

        var nav = '<div class="nav"><div>';
        for (var i = 0; i < this.items.length; i++)
        {
            nav += '<span></span>';
        }
        nav += '</div></div>';
        $(wrapper).append(nav);
        this.nav = $('div.nav span', wrapper);
        $('div.nav span:first', wrapper).addClass('active');
        var j = 0;
        this.nav.each(function(){
            $(this).attr('rel', j);
            j++;
        });

        this.initActions();
        this.initAutoScroll();
    },
    initActions: function(){
        var context = this;
        this.nav.on('click', function(){
            var num = $(this).attr('rel');
            if (num != context.current)
            {
                var backward = (num < context.current);
                context.scroll(num, backward);
                context.initAutoScroll();
            }
        });
        this.nav.on('mouseover', function(){ $(this).addClass('hover'); });
        this.nav.on('mouseout', function(){ $(this).removeClass('hover'); });
        /*$('div.item', this.wrapper).on('touchmove', function(e){
            if (e.originalEvent.targetTouches && e.originalEvent.targetTouches.length == 1)
            {
                context.next();
                context.initAutoScroll();
            }
        });*/
        this.initTouch();
    },
    scroll: function(num, backward) {
        if (typeof(backward) == 'undefined')
            backward = false;
//        $('div.item:visible', this.wrapper).fadeOut(500);
//        $(this.items[num]).fadeIn(500);
        if (!backward)
        {
            $('div.item:visible', this.wrapper).hide('slide', {direction: 'left'});
            $(this.items[num]).show('slide', {direction: 'right'});
        }
        else
        {
            $('div.item:visible', this.wrapper).hide('slide', {direction: 'right'});
            $(this.items[num]).show('slide', {direction: 'left'});
        }
        this.nav.removeClass('active');
        $(this.nav[num]).addClass('active');
        this.current = num;
    },
    getNextNum: function() {
        var num = this.current + 1;
        if (num >= this.nav.length)
            num = 0;
        return num;
    },
    getPrevNum: function() {
        var num = this.current - 1;
        if (num < 0)
            num = this.nav.length-1;
        return num;
    },
    next: function(){
        var num = this.getNextNum();
        this.scroll(num);
    },
    prev: function(){
        var num = this.getPrevNum();
        this.scroll(num, true);
    },
    initAutoScroll: function(){
        clearInterval(this.tmout);
        var context = this;
        this.tmout = setInterval(function(){
            context.next();
        }, 5000);
    },
    initTouch: function(){
        var context = this;
        var touchStartX,
            touchStartY,
            moved,
            moving = false;

        $('div.item', this.wrapper).unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind(
            'touchstart.jsp',
            function(e)
            {
                if (e.originalEvent.touches.length == 1)
                {
                    var touch = e.originalEvent.touches[0];
                    touchStartX = touch.pageX;
                    touchStartY = touch.pageY;
                    moved = false;
                    moving = true;
                }
            }
        ).bind(
            'touchmove.jsp',
            function(ev)
            {
                if(!moving || moved) {
                    return;
                }

                var touchPos = ev.originalEvent.touches[0];
                var dx = Math.abs(touchPos.pageX - touchStartX);
                var dy = Math.abs(touchPos.pageY - touchStartY);
                if (dy > dx)
                {
                    moved = true;
                    return true;
                }

                if (touchPos.pageX > touchStartX)
                    context.prev();
                else
                    context.next();
                moved = true;
                context.initAutoScroll();

                // return true if there was no movement so rest of screen can scroll
//                return dX == horizontalDragPosition && dY == verticalDragPosition;
                return false;
            }
        ).bind(
            'touchend.jsp',
            function(e)
            {
                moving = false;
                /*if(moved) {
                    return false;
                }*/
            }
        ).bind(
            'click.jsp-touchclick',
            function(e)
            {
                if(moved) {
                    moved = false;
                    return false;
                }
            }
        );
    }
}

// установка всей анимации в корзине
jQuery.fn.miniBasket = function() {
    return this.each(function(){

        var context = $(this);

        function animateHover()
        {
            $('a.basket-opener', context).animate({'border-top-width':'4px'});
        }
        function animateBlur()
        {
            $('a.basket-opener', context).animate({'border-top-width':'0px'});
        }
        function closeBasket()
        {
            hideDelTT();
            $('div.inner', context).slideUp();
            animateBlur();
        }
        function openBasket()
        {
            $('div.inner', context).slideDown();
            $('div.items', context).bind('jsp-initialised', function(){
                if (!$('.jspContainer .sh', this).length)
                    $('.jspContainer', this).append('<div class="sh"></div>');
            });
            $('div.items', context).bind('jsp-scroll-y', function(){
                hideDelTT();
            });
            $('div.items', context).jScrollPane({showArrows:false});
        }
        function hideDelTT()
        {
            $('.basket-del-tt', context).hide('slide', {direction:'left', duration: 100});
        }
        function showDelTT(obj)
        {
            var pos = obj.offset();
            var basketPos = context.offset();
            var _left = pos.left - basketPos.left + obj.outerWidth() + 2;
            var _top = pos.top - basketPos.top - 33;
            $('.basket-del-tt', context).css('left', _left+'px');
            $('.basket-del-tt', context).css('top', _top+'px');
            $('.basket-del-tt', context).show('slide', {direction:'left', duration: 100});
        }

        $('a.basket-opener', context).on('click', function(){
            if ($('div.inner', context).css('display') == 'none')
            {
                openBasket();
            }
            else
            {
                closeBasket();
            }
            return false;
        })
        context.bind('mouseenter', function(){
            if ($('.inner', this).css('display') == 'none')
            {
                animateHover();
            }
        }).bind('mouseleave', function(){
            if ($('.inner', this).css('display') == 'none')
            {
                animateBlur();
            }
        });
        $(document).click(function(e){
            if ($(e.target).parents().filter('.basket').length != 1) {
                if ($('div.inner', context).css('display') != 'none')
                {
                    closeBasket();
                }
            }
        });

        $('div.basket-del-tt a.del-btn', context).live('mousedown', function(){$(this).addClass('onclick');})
            .live('mouseup', function(){$(this).removeClass('onclick');})
            .live('mouseout', function(){$(this).removeClass('onclick');});
        $('a.del', context).live('click', function(){
            showDelTT($(this));
            return false;
        });
    });
}

// фотогалерея товара с миниатюрами
jQuery.fn.photoGallery = function(options)
{
    var defaults = {
        start: 1
    };
    var settings = $.extend(false, defaults, options);
    var sliders = [];
    $(this).each(function() {
        var sl = new PhotoGallery(this, settings);
        sliders[sliders.length] = sl;
    });
    return sliders;
}
function PhotoGallery(wrapper, settings) {
    this.init(wrapper, settings);
};
PhotoGallery.prototype = {
    settings: false,
    wrapper: false,
    elH: 0,
    elCount: 0,
    list: false,
    current: 1,
    init: function(wrapper, settings) {
        this.wrapper = wrapper;
        this.list = $('.miniatur .ph-list', wrapper);
        var context = this;

        this.elH = $('.miniatur .ph-list a', wrapper).outerHeight(true);
        this.elCount = $('.miniatur .ph-list a', wrapper).length;
        var j = 1;
        $('.miniatur .ph-list a', wrapper).each(function(){
            $(this).attr('rel', j);
            j++
        });

        $('.miniatur .ph-list', wrapper).jScrollPane({
            showArrows: false,
            arrowButtonSpeed: this.elH,
            animateScroll : true
        });

        $('.miniatur a.prev', wrapper).live('click', function(){
                $('.ph-list', $(this).parent()).data('jsp').scrollByY(-context.elH);
                return false;
            });
        $('.miniatur a.next', wrapper).live('click', function(){
                $('.ph-list', $(this).parent()).data('jsp').scrollByY(context.elH);
                return false;
            });

        $('.miniatur .ph-list a', wrapper).click(function(){
            /*var src = $(this).attr('href');
            $('.big img', context.wrapper).attr('src', src);
            $('a', $(this).parent()).removeClass('current');
            $(this).addClass('current');*/

            var num = $(this).attr('rel');
            context.goToNum(num);
            return false;
        });
        $('.big img', wrapper).live('click', function(){
            var next = context.current+1;
            if (next > context.elCount)
            {
                next = 1;
            }
            context.goToNum(next);
        });
        context.goToNum(settings.start);
    },
    goToNum: function(num)
    {
        var context = this;

        var el = $('.miniatur .ph-list a[rel='+num+']', context.wrapper);
        var src = el.attr('href');
        $('.big img', context.wrapper).attr('src', src);
        $('a', el.parent()).removeClass('current');
        el.addClass('current');

        var top = 0;
        if (context.elCount > 3)
        {
            var top = context.elH * (num - 2);
            if (num == 1)
                top = 0;
            if (num == context.elCount)
                top = context.elH * (num - 3);
        }
        context.list.data('jsp').scrollToY(top);
        context.current = parseInt(num);
    }
}

function setShortSidebar()
{
    $('#sidebar').addClass('short-sidebar');
    $('#sidebar').addClass('hidden-sidebar');
    $('#wrapper').addClass('moved-wrapper');
    $('#sidebar .abs').width(64);
    fixSidebar();
}
function unsetShortSidebar()
{
    $('#sidebar').removeClass('short-sidebar');
    $('#sidebar').removeClass('hidden-sidebar');
    $('#wrapper').removeClass('moved-wrapper');
    $('#sidebar .abs').width(183);
    fixSidebar();
}

jQuery.fn.inpSel = function() {
    return this.each(function(){

        var context = $(this);
        $('.variants', context).hide();

        function initScroll()
        {
            $('.variants', context).jScrollPane();
        }
        function openVariants()
        {
            var v = $('input', context).val();
            var cnt = 0;
            $('.variants li', context).each(function(){
                var txt = $(this).text();
                var pos = stripos(txt, v);
                if (v.length && pos!==0)
                {
                    $(this).hide();
                }
                else
                {
                    cnt++;
                    $(this).show();
                }
            });
            if (cnt)
            {
                $('.variants', context).show();
                initScroll();
            }
            else
            {
                $('.variants', context).hide();
            }
        }
        function closeVariants()
        {
            $('.variants', context).hide();
            $('.variants li', context).removeClass('current');
        }
        function setItem(obj)
        {
            $('li', obj.parent()).removeClass('current');
            obj.addClass('current');
            $('input', context).val(obj.text());
        }
        function nextItem()
        {
            var cur = $('.variants li.current', context);
            if (!cur.length)
            {
                setItem($('.variants li:visible:first', context));
            }
            else
            {
                var next = cur.next('li:visible');
                if (!next.length) next = $('.variants li:visible:first', context);
                setItem(next);
            }
        }
        function prevItem()
        {
            var cur = $('.variants li.current', context);
            if (!cur.length)
            {
                setItem($('.variants li:visible:last', context));
            }
            else
            {
                var prev = cur.prev('li:visible');
                if (!prev.length) prev = $('.variants li:visible:last', context);
                setItem(prev);
            }
        }

        var t = false;
        $('.variants li span', context).live('click', function(){
            clearTimeout(t);
            var txt = $(this).text();
            $('input', context).val(txt);
            closeVariants();
        });
        $('input', context).bind('focus', function(){
            $(this).addClass('focused');
            openVariants();
        });
        $('input', context).bind('blur', function(e){
            $(this).removeClass('focused');
            if (!e || !e.relatedTarget || $(e.relatedTarget).parents().filter('.inp-sel').length != 1)
            {
                t = setTimeout(function() { closeVariants(); }, 200);
            }
            return false;
        });
        $('input', context).bind('keydown', function(e){
            if (e.keyCode == 40 || e.keyCode==38 || e.keyCode==37 || e.keyCode==39 || e.keyCode==13)
            {
                if ($('.variants', context).css('display') != 'none')
                {
                    if (e.keyCode == 40) nextItem();
                    if (e.keyCode == 38) prevItem();
                    return false;
                }
            }
        });
        $('input', context).bind('keyup', function(e){
            if (!(e.keyCode == 40 || e.keyCode==38 || e.keyCode==37 || e.keyCode==39 || e.keyCode==13))
            {
                openVariants();
            }
        });
    });
}

function stripos ( f_haystack, f_needle, f_offset ){
	var haystack = f_haystack.toLowerCase();
	var needle = f_needle.toLowerCase();
	var index = 0;

	if(f_offset == undefined) {
		f_offset = 0;
	}

	if((index = haystack.indexOf(needle, f_offset)) > -1) {
		return index;
	}

	return false;
}

function openProductCart()
{
    $('#shadow').fadeIn();
    $('.product-cart').css('top', $(window).scrollTop() + 'px');
    $('.product-cart').slideDown();
    $('.product-cart .win-actions').show();

    function closeCart()
    {
        $('.product-cart .win-actions').hide();
        $('.product-cart').slideUp();
        $('#shadow').fadeOut();
        $('#sidebar .cart-sidebar').hide();
        $('#sidebar .catalog-sidebar').show();
        unsetShortSidebar();
    }
    $('.product-cart a.close-ico').unbind('click').bind('click', function(){
        closeCart();
        return false;
    });
    $('.product-cart a.close-line').unbind('click').bind('click', function(){
        closeCart();
        return false;
    });

    var obj = $('.product-cart');
    if ($('.product-slider', obj).length)
    {
        $('.product-slider', obj).horizontalSlider({
            items: '.product'
        });
    }

    $('#productPhoto').photoGallery({});

    $('.short-photoslider').photoSlider();


    $('#sidebar .catalog-sidebar').hide();
    $('#sidebar .cart-sidebar').show();

    $('div.last-viewed div.items').bind('jsp-initialised', function(){
        if (!$('.jspContainer .sh', this).length)
            $('.jspContainer', this).append('<div class="sh"></div>');
    });
    $('div.last-viewed div.items').jScrollPane({showArrows:false});

    $('a.zoom-ico').click(function(){
        $('#productPhotos').tsumWindow().data('tsumWin').show();
        var cur = $('#productPhoto div.miniatur a.current').attr('rel');
        $('#productPhotos div.content').photoGallery({start: cur});
        return false;
    });

    $('#razmerLink').click(function(){
        $('#razmer').tsumWindow().data('tsumWin').show();
        return false;
    });

    setShortSidebar();
}

// окно
$.fn.tsumWindow = function()
{
    function TsumWindow(elem)
    {
        tsumWin = this;

        function init()
        {
            $('a.close-ico', elem).live('click',function(){
                hide();
                return false;
            });
        }

        function show()
        {
            $('#full-shadow').fadeIn();
            elem.css('top', $(window).scrollTop() + 'px');
            var _left = ($(window).width() - elem.width()) / 2;
            elem.css('left', _left+'px');
            elem.slideDown(200);
        }
        function showCenter()
        {
            $('#full-shadow').fadeIn();
            var _top = ($(window).height() - elem.outerHeight())/2;
            elem.css('top', $(window).scrollTop() + _top + 'px');
            var _left = ($(window).width() - elem.width()) / 2;
            elem.css('left', _left+'px');
            elem.slideDown(200);
        }
        function hide()
        {
            $('#full-shadow').fadeOut();
            elem.slideUp(200);
        }

        // Public API
        $.extend(
            tsumWin,
            {
                show: function(center)
                {
                    if (center)
                        showCenter();
                    else
                        show();
                },
                hide: function(s)
                {
                    hide();
                }
            }
        );
        init();
    }

    return this.each(
        function()
        {
            var elem = $(this), api = elem.data('tsumWin');
            if (api) {
//                api.reinitialise(settings);
            } else {
//                $("script",elem).filter('[type="text/javascript"],:not([type])').remove();
                api = new TsumWindow(elem);
                elem.data('tsumWin', api);
            }
        }
    );
}

// горизонтальный слайдер элементов
$.fn.horizontalSlider = function(settings)
{
    function HorizontalSlider(elem, s)
    {
        horSlider = this;

        var settings, elW;
        function init(s)
        {
            settings = s;

            elem.css('position', 'relative');
            var content = elem.html();
            elem.html('<div class="hslider-hider"><div class="hslider-inner"></div></div>');
            $('.hslider-inner', elem).html(content);
            elem.append('<a href="#" class="prev disabled"></a>');
            elem.append('<a href="#" class="next"></a>');

            var w = 0;
            $(settings.items, elem).each(function(){ w += $(this).outerWidth(true); });
            $('.hslider-inner', elem).width(w);

            elW = $(settings.items + ':first', elem).outerWidth(true);

            $('.hslider-hider', elem).bind('jsp-initialised', function(event, isScrollable){
                if (!isScrollable)
                    $('a.next', elem).addClass('disabled');
            }).bind('jsp-arrow-change', function(event, isAtTop, isAtBottom, isAtLeft, isAtRight){
                if (isAtLeft)
                    $('a.prev', elem).addClass('disabled');
                else
                    $('a.prev', elem).removeClass('disabled');

                if (isAtRight)
                    $('a.next', elem).addClass('disabled');
                else
                    $('a.next', elem).removeClass('disabled');
            });
            $('.hslider-hider', elem).jScrollPane({
                showArrows: false,
                arrowButtonSpeed: elW,
                animateScroll : true
            });

            $('a.prev', elem).live('click', function() {
                $('.hslider-hider', $(this).parent()).data('jsp').scrollByX(-elW);
                return false;
            });
            $('a.next', elem).live('click', function() {
                $('.hslider-hider', $(this).parent()).data('jsp').scrollByX(elW);
                return false;
            });
        }
        function reinitialise(s)
        {
            $('.hslider-hider', elem).jScrollPane({
                showArrows: false,
                arrowButtonSpeed: elW,
                animateScroll : true
            });
        }

        // Public API
        $.extend(
            horSlider,
            {
                reinitialise: function(s)
                {
                    s = $.extend({}, settings, s);
                    reinitialise(s);
                }
            }
        );

        init(s);
    }

    settings = $.extend({}, $.fn.horizontalSlider.defaults, settings);

    return this.each(
        function()
        {
            var elem = $(this), api = elem.data('horSlider');
            if (api) {
                api.reinitialise(settings);
            } else {
                api = new HorizontalSlider(elem, settings);
                elem.data('horSlider', api);
            }
        }
    );
}
$.fn.horizontalSlider.defaults = {
    slideCount: 1,
    items: '.item'
};

// установка фиксации контента левой панели
function fixSidebar() {
    var el = $('#sidebar div.content');
    var winTop = $(window).scrollTop();

    if (el.is(':hidden'))
    {
        var elTotalHeight = 0;
    }
    else
    {
        $('#sidebar div.space').height(el.outerHeight())

        if ($('#sidebar div.space').css('display') == 'none')
        {
//            var pos = el.offset();
            var h = el.outerHeight(true);
        }
        else
        {
//            var pos = $('#sidebar div.space').offset();
            var h = $('#sidebar div.space').outerHeight(true);
        }
        var elTotalHeight = /*pos.top +*/ h /*+ 150*/; // 150 запас под кнопку "наверх"
        var spaceHeight = winTop + $(window).height();
    }

    // вариант когда контент панели по высоте меньше окна
    if (elTotalHeight < $(window).height())
    {
        el.css('position', 'fixed');
//        el.css('top', '137px');
        el.css('top', '0px');
        el.css('bottom', 'auto');
        $('#sidebar div.space').show();
        if (winTop>100)
        {
            $('#uplink').show();
        }
        else
        {
            $('#uplink').hide();
        }
        return false;
    }

    if (elTotalHeight < spaceHeight)
    {
        el.css('position', 'fixed');
//        el.css('bottom', '150px');
        el.css('top', 'auto');
        el.css('bottom', '0px');
        $('#sidebar div.space').show();
        if ($('#uplink').css('display') == 'none')
        {
            $('#uplink').show();
        }
    }
    else
    {
        el.css('position', 'relative');
        el.css('bottom', 'auto');
        $('#sidebar div.space').hide();
        if ($('#uplink').css('display') != 'none')
        {
            $('#uplink').hide();
        }
    }
}

//
function openDetailPage(id)
{
    var obj = $('#'+id);
    $('#shadow').fadeIn();
    obj.css('top', $(window).scrollTop() + 'px');
    obj.slideDown();
    $('.win-actions', obj).show();

    $('a.close-ico', obj).click(function(){
        $('#shadow').fadeOut();
        $(this).parent().parent().slideUp();
        unsetShortSidebar();
        $(this).parent().hide();
        return false;
    });
    $('a.close-line', obj).click(function(){
        $('#shadow').fadeOut();
        $(this).parent().slideUp();
        unsetShortSidebar();
        $(this).parent().hide();
        return false;
    });

    $('.photos', obj).horizontalSlider({
        items: '.item'
    });

    $('.photos .hslider-inner a', obj).live('click', function(){
        $('#newsPhotos').tsumWindow().data('tsumWin').show();
        var num = $('img', this).attr('rel');
        $('#newsPhotos div.content').photoGallery({start: num});
        return false;
    });

    if ($('.product-slider', obj).length)
    {
        $('.product-slider', obj).horizontalSlider({
            items: '.product'
        });
    }

    if ($('.brand-news').length)
    {
        $('.brand-news').horizontalSlider();
    }
    setShortSidebar();
}

// поле ввода числа с +/-
$.fn.numberField = function(settings)
{
    function NumberField(elem, s)
    {
        var settings, obj;
        function init(s)
        {
            settings = s;

            elem.wrap('<span class="number-field"></span>');
            elem.before('<i class="minus"></i>');
            elem.after('<i class="plus"></i>');
            elem.attr('readonly', true);
            obj = elem.parent();
            $('i.minus', obj).bind('click', function(){
                minus();
            });
            $('i.plus', obj).bind('click', function(){
                plus();
            });
        }
        function plus()
        {
            var v = elem.val();
            v++;
            elem.val(v);
        }
        function minus()
        {
            var v = elem.val();
            v--;
            if (v<=0) v = 0;
            elem.val(v);
        }

        init(s);
    }

    settings = $.extend({}, $.fn.numberField.defaults, settings);

    return this.each(
        function()
        {
            var elem = $(this), api = elem.data('num');
            if (api) {
            } else {
                api = new NumberField(elem, settings);
                elem.data('num', api);
            }
        }
    );
}
$.fn.numberField.defaults = {
};

var productPhTmout = false;
var deliveryMap = false;
$(function(){
    // выравниваем меню  с задержкой для отрисовки шрифта
    setTimeout('setTopMenuJustification()', 500);

    // корзина в сайдбаре
    $('#minibasket').miniBasket();

    // поле поиска
    $('#search-field').on('focus', function(){
        $(this).addClass('active');
        $(this).animate({'width': '200px'});
    }).on('blur', function(){
        $(this).removeClass('active');
        $(this).animate({'width': '140px'});
    });

    // карусель лучших предложений
    $('.thebest .list .container').horizontalSlider({
        items: 'li'
    });
    /*var w = 0;
    $('.thebest .list .container li').each(function(){
        w += $(this).outerWidth();
    });
    $('.thebest .list .container ul').width(w);
    $('.thebest .list .container').jScrollPane({
        showArrows: true,
        arrowButtonSpeed: 240,
        animateScroll : true
    });
    $('div.thebest div.list span.prev').live('mouseover', function(){
            $(this).addClass('hovered');
        }).live('mouseout', function(){
            $(this).removeClass('hovered');
        }).live('click', function(){
            $('.container', $(this).parent()).data('jsp').scrollByX(-240);
        });
    $('div.thebest div.list span.next').live('mouseover', function(){
            $(this).addClass('hovered');
        }).live('mouseout', function(){
            $(this).removeClass('hovered');
        }).live('click', function(){
            $('.container', $(this).parent()).data('jsp').scrollByX(240);
        });*/

    // прокручиваемые списки в сайдбаре
    $('#sidebar div.scrollable ul').jScrollPane({showArrows:false});

    // фотослайдер на главной
    $('#indexPhotoSlider').photoSlider();

    // кнопка купить
    $('a.buy').live('mousedown', function(){$(this).addClass('onclick');})
        .live('mouseup', function(){$(this).removeClass('onclick');})
        .live('mouseout', function(){$(this).removeClass('onclick');});

    // подменю
    $('#top-menu li').live('mouseenter', function(){
        var obj = $(this);
        obj.addClass('current');
        var pos = obj.position();
        var _left = pos.left + $('a',obj).width()/2 - 7;
        $('.submenu .arr span', obj).css('left', _left+'px');
        if ($('.submenu', obj).is(':hidden'))
        {
            $('.submenu', obj).slideDown();
        }
    });
    $('#top-menu li').live('mouseleave', function(){
        var obj = $(this);
        obj.removeClass('current');
        $('.submenu', obj).slideUp(200);
    });

    // прокрутка наверх
    $('#uplink').on('click', function(){
        $.scrollTo(0, 500);
        return false;
    });

    // выбор города
    $('.city-select a.current').on('click', function(){
        $(this).parent().parent().toggleClass('city-select-open');
    });
    $(document).click(function(e){
        if ($(e.target).parents().filter('.city-select').length != 1) {
            $('.city-select').removeClass('city-select-open');
        }
    });

    // теги
    $('a.tag span').live('mouseover',function(){$(this).addClass('hover')}).live('mouseout',function(){$(this).removeClass('hover')});

    // выбор цвета товара
    $('.product .colors .container').bind('jsp-initialised', function(event, isScrollable){
        if (!isScrollable)
        {
            var par = $(this).parent();
            $('a.prev', par).hide();
            $('a.next', par).hide();
        }
    }).jScrollPane({
        showArrows: true,
        arrowButtonSpeed: 23,
        animateScroll : true,
        animateDuration: 100
    });
    $('.product .colors a.prev').live('click', function(){
        $('.container', $(this).parent()).data('jsp').scrollByX(-23);
        return false;
    });
    $('.product .colors a.next').live('click', function(){
        $('.container', $(this).parent()).data('jsp').scrollByX(23);
        return false;
    });

    // товар
    $('.product').live('mouseenter', function(){
        $('.actions', this).show();
        var bFirst = (!$(this).hasClass('product-hover'));
        $(this).addClass('product-hover');
        var context = $(this);
        function nextPh()
        {
            var ph = $('div.ph img', context);
            if (ph.length <= 1) return;

            var forHide = $('div.ph img:visible', context);
            var forShow = forHide.next('img');
            if (!forShow || !forShow.length) forShow = $('div.ph img:first', context);
//            forHide.hide('slide', {direction: 'left', duration:100});
//            forShow.show('slide', {direction: 'right', duration:100});
            forHide.fadeOut(300);
            forShow.fadeIn(300);
        }
        if (bFirst && !$(this).hasClass('product-row'))
        {
            nextPh();
            productPhTmout = setInterval(function(){
                nextPh();
            }, 3000);
        }
    });
    $('.product').live('mouseleave', function(){
        clearTimeout(productPhTmout);
        $('div.ph img', this).stop(true,true);
        $('.actions', this).hide();
        $(this).removeClass('product-hover');
    });

    // фильтр по категориям
    $('.category-list>ul>li>a').live('click', function(){
        $(this).parent().toggleClass('open');
        return false;
    });

    // чекбоксы
    $('input[type=checkbox]').styler();
    $('input[type=radio]').styler();
    $('#sidebar div.ch-list label').live('mouseenter', function(){
        $(this).addClass('hover');
        $('.jq-checkbox', this).addClass('hovered');
    });
    $('#sidebar div.ch-list label').live('mouseleave', function(){
        $(this).removeClass('hover');
        $('.jq-checkbox', this).removeClass('hovered');
    });

    // селекты
    $('select.styled').styler({
        singleSelectzIndex: 5
    });

    // фильтр по цветам
    $('div.colors-filter a.color').live('click', function(){
        $(this).parent().addClass('active');
        return false;
    }).live('mouseenter', function(){
            var par = $(this).parent();
            $('span.tt', par).show();
        }).live('mouseleave', function(){
            var par = $(this).parent();
            $('span.tt', par).hide();
        });
    $('div.colors-filter a.del').live('click', function(){
        $(this).parent().removeClass('active');
        return false;
    });

    // фиксируем сайдбар на прокрутке
    $(window).scroll(function(){
        fixSidebar();
    });
    fixSidebar();

    // кнопки купить
    $('a.white-btn').live('mousedown', function(){ $(this).addClass('clicked'); })
        .live('mouseup', function(){ $(this).removeClass('clicked'); })
        .live('mouseout', function(){ $(this).removeClass('clicked'); });
    $('a.orange-btn').live('mousedown', function(){ $(this).addClass('clicked'); })
        .live('mouseup', function(){ $(this).removeClass('clicked'); })
        .live('mouseout', function(){ $(this).removeClass('clicked'); });
    $('a.black-btn').live('mousedown', function(){ $(this).addClass('clicked'); })
        .live('mouseup', function(){ $(this).removeClass('clicked'); })
        .live('mouseout', function(){ $(this).removeClass('clicked'); });

    // рейтинг
    $('div.rating').each(function(){
        var el = $(this);
        var j=0;
        $('a', el).each(function(){ $(this).attr('num', j); j++; });
        el.live('mouseenter', function(){
            if ($(this).hasClass('rated'))
                return true;
            $(this).addClass('rating-process');
        });
        el.live('mouseleave', function(){
            $(this).removeClass('rating-process');
        });
        $('a', el).live('mouseover', function(){
            var par = $(this).parent();
            if (par.hasClass('rated'))
                return false;
            var num = $(this).attr('num');
            $('a', par).each(function(){
                if ($(this).attr('num') <= num)
                    $(this).addClass('preactive');
            });
        });
        $('a', el).live('mouseout', function(){
            var par = $(this).parent();
            $('a', par).removeClass('preactive');
        });
        $('a', el).live('click', function(){
            /*var par = $(this).parent();
            if (par.hasClass('rated'))
                return false;
            par.addClass('rated');
            par.removeClass('rating-process');
            var num = $(this).attr('num');
            $('a', par).each(function(){
                if ($(this).attr('num') <= num)
                    $(this).addClass('preactive');
            });*/
            return false;
        });
    });

    $('.product-list .product div.ph img').click(function(){
        openProductCart();
        return false;
    });

    // сворачивание/разворачивание сайбдара
    $('.short-sidebar').live('mouseenter', function(){
//        $(this).finish();
        var context = $(this);
        setTimeout(function(){
            context.removeClass('hidden-sidebar');
        }, 40);
        $('#sidebar .abs').animate({
            width: '183px'
        }, 100, function(){
            fixSidebar();
        });
    });
    $('.short-sidebar').live('mouseleave', function(){
        // скроем корзину
        $('#sidebar div.basket div.inner').hide();
        $('#sidebar div.basket a.basket-opener').css('border-top-width', '0px');

        var context = $(this);
        context.addClass('hidden-sidebar');
        $('#sidebar .abs').animate({
            width: '64px'
        }, 100, function(){

        });
    });

    $('input.number').numberField();

    $('.basket-item a.del-link').live('click', function(){
        var par = $(this).parent();
        $(this).hide();
        $('div.del', par).show();
        return false;
    });
    $('.basket-item a.return').live('click', function(){
        var del = $(this).parent();
        var par = del.parent();
        del.hide();
        $('a.del-link', par).show();
        return false;
    });

    $('p.enter-card a').live('click', function(){
        var par = $(this).parent();
        $(this).hide();
        $('input', par).show();
        return false;
    });

    $('.basket-item i.plus').live('click', function(){
        var obj = $(this).prev('input');
        var tt = $('.number-add-tt');
        var pos = obj.position();
        tt.show();
        tt.css('top', pos.top+14+'px');
        var _left = pos.left - (tt.width()/2) + obj.outerWidth()/2;
        tt.css('left', _left+'px');
    });
    $(document).click(function(e){
        if ($(e.target).parents().filter('.number-add-tt').length != 1
            && !$(e.target).hasClass('plus')) {
            if (!$('.number-add-tt').is(':hidden'))
            {
                $('.number-add-tt').hide();
            }
        }
    });

    $('.form-block a.reg-type').live('click', function(){
        var par = $(this).parent();
        if (!$(this).hasClass('active'))
        {
            $('a.reg-type', par).each(function(){
                $('#'+$(this).attr('rel')).hide();
            });
            $('a.reg-type', par).removeClass('active');
            $('#'+$(this).attr('rel')).show();
            $(this).addClass('active');
        }
        return false;
    });

    $('.form-block .delivery-type input[type=radio]').live('change', function(){
        var par = $(this).parent();
        while (!par.hasClass('delivery-type')) par = par.parent();
        if ($(this).attr('checked'))
        {
            $('input[type=radio]', par).each(function(){
                $('#'+$(this).attr('rel')).hide();
            });
            $('#'+$(this).attr('rel')).show();
            if ($(this).attr('rel') == 'deliverySam')
            {
                if (!deliveryMap)
                {
                    var objLatLng = new google.maps.LatLng(52.3672101, 9.7542994);
                    var myOptions = {
                        zoom: 14,
                        center: objLatLng,
                        streetViewControl: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControl: false
                    };
                    deliveryMap = new google.maps.Map(document.getElementById('map'), myOptions);
                    var icon = {
                        url: 'images/marker2.png',
                        size: new google.maps.Size(17, 20),
                        anchor: new google.maps.Point(9, 20)
                    };
                    var marker = new google.maps.Marker({
                        map: deliveryMap,
                        position: objLatLng,
                        visible: true,
                        icon: icon
                    });
                }
            }
        }
    });

    $('div.delivery-company div.tabs div.tab:not(.tab-limit)').live('click', function(){
        var par = $(this).parent();
        $('.tab', par).removeClass('tab-active');
        $(this).addClass('tab-active');
    });

    $('div.timeline td a').live('click', function(){
        $('div.timeline td').removeClass('current');
        $(this).parent().addClass('current');
        return false;
    });

    $('#tieCardLink').click(function(){
        if ($('#tieCard').is(':hidden'))
        {
            $('#orderCard div.w-shadow').show();
            $('#tieCard').show();
            $(this).addClass('white-btn');
            $(this).removeClass('orange-btn');
        }
        else
        {
            $('#orderCard div.w-shadow').hide();
            $('#tieCard').hide();
            $(this).addClass('orange-btn');
            $(this).removeClass('white-btn');
        }
        return false;
    });

    $('.inp-sel').inpSel();

    $(window).scroll(function(){
        $('.win-actions:visible').each(function(){
            var win = $(this).parent();
            var pos = win.offset();
            var _top = pos.top;
            var wTop = $(window).scrollTop();
            if (wTop>_top)
            {
                var pos = $(this).offset();
                $(this).css('left', pos.left+'px');
                $(this).addClass('fixed');
            }
            else
            {
                $(this).css('left', 'auto');
                $(this).removeClass('fixed');
            }
        });
    });

    $('.timeline .inner').horizontalSlider({
        items: 'td a'
    });

    $('div.history p.more a').live('click', function(){
        var par = $(this).parent().parent();
        $('div.more', par).slideDown();
        $(this).parent().hide();
        return false;
    });

    $('.history-timeline .scrollable').jScrollPane();

    $('.pers-order:not(.pers-order-static)').bind('click', function(){
        var obj = $(this);
        if (obj.hasClass('pers-order-open'))
        {
            obj.removeClass('pers-order-open');
            $('.items', obj).slideUp();
        }
        else
        {
            obj.addClass('pers-order-open');
            $('.items', obj).slideDown();
        }
    });

    $('.pers-history-tabs a').click(function(){
        if ($(this).hasClass('current')) return false;
        var par = $(this).parent();
        $('a', par).each(function(){
            $('#'+$(this).attr('rel')).hide();
        });
        $('a', par).removeClass('current');
        $('#'+$(this).attr('rel')).show();
        $(this).addClass('current');
        return false;
    });

    $('input.autocomplete').on('focus', function(){
        $(this).addClass('focused');
    }).on('blur', function(){
        $(this).removeClass('focused');
    });

    $('.product-row div.photos').photoGallery({});
});