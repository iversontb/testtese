$(function () {

        $('.slideBut').click( function(){
            if ($(this).find('.slideText').css('display')=="none"){
                $(this).find('.slideText').slideDown();
            }
            else {
                $(this).find('.slideText').slideUp();
            }

        });


        $( '.mapMenu li a' ).mouseover(function(){

            var _id = $( this ).attr( 'id' ),
                curItem = $( '.map .pointer ' ).eq(_id);

            $( '.map .pointer ').children().css({ 'width' : '15px', 'height' : '21px' });


            curItem.children().stop( false, true ).animate({
                width: 21,
                height: 30
            }, 300 );

            return false;
        });

        $( '.mapMenu li a' ).mouseleave(function(){

            $( '.map .pointer ').children().stop().css({ 'width' : '15px', 'height' : '21px' });

            return false;
        });


    $( '.mapMenu li a' ).mouseover(function(){

        var _id = $( this ).attr( 'id' ),
            curItem = $( '.map .pointer ' ).eq(_id);

        $( '.map .pointer ').children().css({ 'width' : '15px', 'height' : '21px' });


        curItem.children().stop( false, true ).animate({
            width: 21,
            height: 30
        }, 300 );

        return false;
    });

    $( '.mapMenu li a' ).mouseleave(function(){

        $( '.map .pointer ').children().stop().css({ 'width' : '15px', 'height' : '21px' });

        return false;
    });


    var inphone=false;
    $("#firstForm").validate({
        errorClass: "error",
        errorElement: "span",
        rules: {
            phone: {
                required: true,
                number: true,
                minlength: 10
            }
        },
        messages: {
            phone: {
                required: '*Р”Р°РЅРЅРѕРµ РїРѕР»Рµ РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ Р·Р°РїРѕР»РЅРµРЅРѕ!',
                number: '*РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ С„РѕСЂРјР°С‚ РЅРѕРјРµСЂР°',
                minlength: '*РњРёРЅРёРјР°Р»СЊРЅР°СЏ РґР»РёРЅР°: 10'
            }
        },
        errorPlacement: function(error, element) {
            inphone=false;
            $(element).parent().addClass('error');
            $(element).parent().find('span').html(error[0].outerText);
        },
        success: function(label) {
            inphone=true;
            $("#firstForm").find('fieldset').eq(1).children('span').html('');
            $("#firstForm").find('fieldset').eq(1).removeClass('error');
        }
    });
    $("#secondForm").validate({
        errorClass: "error",
        errorElement: "span",
        rules: {
            phone: {
                required: true,
                number: true,
                minlength: 10
            }
        },
        messages: {
            phone: {
                required: '*Р”Р°РЅРЅРѕРµ РїРѕР»Рµ РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ Р·Р°РїРѕР»РЅРµРЅРѕ!',
                number: '*РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ С„РѕСЂРјР°С‚ РЅРѕРјРµСЂР°',
                minlength: '*РњРёРЅРёРјР°Р»СЊРЅР°СЏ РґР»РёРЅР°: 10'
            }
        },
        errorPlacement: function(error, element) {
            inphone=false;
            $(element).parent().addClass('error');
            $(element).parent().find('span').html(error[0].outerText);
        },
        success: function(label) {
            inphone=true;
            $("#secondForm").find('fieldset').eq(1).children('span').html('');
            $("#secondForm").find('fieldset').eq(1).removeClass('error');
        }
    });
    $("#3Form").validate({
        errorClass: "error",
        errorElement: "span",
        rules: {
            phone: {
                required: true,
                number: true,
                minlength: 10
            }
        },
        messages: {
            phone: {
                required: '*Р”Р°РЅРЅРѕРµ РїРѕР»Рµ РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ Р·Р°РїРѕР»РЅРµРЅРѕ!',
                number: '*РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ С„РѕСЂРјР°С‚ РЅРѕРјРµСЂР°',
                minlength: '*РњРёРЅРёРјР°Р»СЊРЅР°СЏ РґР»РёРЅР°: 10'
            }
        },
        errorPlacement: function(error, element) {
            inphone=false;
            $(element).parent().addClass('error');
            $(element).parent().find('span').html(error[0].outerText);
        },
        success: function(label) {
            inphone=true;
            $("#3Form").find('fieldset').eq(1).children('span').html('');
            $("#3Form").find('fieldset').eq(1).removeClass('error');
        }
    });
    $("#4Form").validate({
        errorClass: "error",
        errorElement: "span",
        rules: {
            phone: {
                required: true,
                number: true,
                minlength: 10
            }
        },
        messages: {
            phone: {
                required: '*Р”Р°РЅРЅРѕРµ РїРѕР»Рµ РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ Р·Р°РїРѕР»РЅРµРЅРѕ!',
                number: '*РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ С„РѕСЂРјР°С‚ РЅРѕРјРµСЂР°',
                minlength: '*РњРёРЅРёРјР°Р»СЊРЅР°СЏ РґР»РёРЅР°: 10'
            }
        },
        errorPlacement: function(error, element) {
            inphone=false;
            $(element).parent().addClass('error');
            $(element).parent().find('span').html(error[0].outerText);
        },
        success: function(label) {
            inphone=true;
            $("#4Form").find('fieldset').eq(1).children('span').html('');
            $("#4Form").find('fieldset').eq(1).removeClass('error');
        }
    });
    $('.slideBut').click(function () {
        if ($(this).find('.slideText').css('display') == "none") {
            $(this).find('.slideText').slideDown();
        }
        else {
            $(this).find('.slideText').slideUp();
        }

    });

    $('.callme').live('click',function () {
        $('.callback').fadeIn();
        return false;
    });
    $('.bSale').live('click',function () {
        $('.popup').fadeIn();
        return false;
    });
    $('.bSale2').live('click',function () {
        $('.callBaclSale').fadeIn();
        return false;
    });
    $('.closeFone').live('click',function () {
        $(this).parent('div').fadeOut();
    });
    $('#CallZakaz').live('click',function () {
        _this=$(this);
        $(this).parent().valid();
        _name = $(this).parent().find('input').eq(0).val();
        _phone = $(this).parent().find('input').eq(1).val();
        if (inphone) {
            $.post("obrabotka.php", {"CallMe": 1, "name": _name, "phone": _phone}, function () {
                $('.closeFone').click();
                ga('send', 'event', 'Website', 'Submit', 'Zvonok');
                yaCounter22009270.reachGoal('zvonok');
                _this.parent().find('input').eq(0).val('');
                _this.parent().find('input').eq(1).val('');
            });
            inphone=false;
        }
        return false;
    });
    function getOldHtml(){
        return '<h3>РЎРєРёРґРєР° РЅР° СЃРєСЂСѓС‚РєСѓ</h3>'+
            '<fieldset><input class="name" type="text" placeholder="Р’Р°С€Рµ РёРјСЏ"></fieldset>'+
            '<fieldset><input type="text" name="phone" placeholder="РўРµР»РµС„РѕРЅ"><span></span></fieldset>'+
            '<fieldset ><input class="car" type="text" placeholder="РњР°СЂРєР° Р°РІС‚РѕРјРѕР±РёР»СЏ"></fieldset>'+
            '<input type="submit" class="button" id="hSale2" value="РџРѕР»СѓС‡РёС‚СЊ СЃРєРёРґРєСѓ" title="РџРѕР»СѓС‡РёС‚СЊ СЃРєРёРґРєСѓ">';
    }
    function getOldHtml2(){
        return '<h3>РЈР·РЅР°С‚СЊ СЃС‚РѕРёРјРѕСЃС‚СЊ</h3>'+
            '<fieldset><input class="name" type="text" placeholder="Р’Р°С€Рµ РёРјСЏ"></fieldset>'+
            '<fieldset><input type="text" name="phone" placeholder="РўРµР»РµС„РѕРЅ"><span></span></fieldset>'+
            '<fieldset ><input class="car" type="text" placeholder="РњР°СЂРєР° Р°РІС‚РѕРјРѕР±РёР»СЏ"></fieldset>'+
            '<input type="submit" class="button2" id="hSale3" value="РЈР·РЅР°С‚СЊ СЃС‚РѕРёРјРѕСЃС‚СЊ">';
    }
    $('.closeBut').live('click',function(){
        $('#firstForm,#secondForm').html(getOldHtml());
        $.post("obrabotka.php",{"delCookie":1});
        return false;
    })
    $('.closeBut2').live('click',function(){
        $('#4Form').html(getOldHtml2());
        $.post("obrabotka.php",{"delCookie2":1});
        return false;
    })

    function getNewHtml(sale, day) {
        return '<div class="thanks"><p>РЎРїР°СЃРёР±Рѕ Р·Р° РѕР±СЂР°С‰РµРЅРёРµ!</p></div><div class="cod"><p>РљРѕРґ РІР°С€РµРіРѕ РєСѓРїРѕРЅР°:</p><span>' + sale + '</span></div>' +
            '<div class="date"><p>Р’С‹ СЃРјРѕР¶РµС‚Рµ РІРѕСЃРїРѕР»СЊР·РѕРІР°С‚СЊСЃСЏ РёРј РґРѕ ' + day + '.</p><a href="#" class="closeBut">close</a></div></div>'
    }
    function getNewHtml2() {
        return '<div class="thanks"><p>РЎРїР°СЃРёР±Рѕ Р·Р° Р·Р°СЏРІРєСѓ!</p></div><div class="date"> <p class="textStyle"> РќР°С€Рё СЃРїРµС†РёР°Р»РёСЃС‚С‹ СЃРІСЏР¶СѓС‚СЃСЏ СЃ РІР°РјРё РІ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ</p> <a href="#" class="closeBut2">close</a>  </div>';
    }

    $('#hSale,#hSale2').live('click',function () {
        $(this).parent('form').valid();
        _name = $(this).parent().find('input').eq(0).val();
        _phone = $(this).parent().find('input').eq(1).val();
        _auto = $(this).parent().find('input').eq(2).val();
        if (inphone) {
            $.post("obrabotka.php", {"plSale": 1, "name": _name, "phone": _phone, "auto": _auto}, function (data) {
                if (data.error === null) {
                    $('#firstForm,#secondForm').html(getNewHtml(data.result.sale, data.result.day));
                    ga('send', 'event', 'Website', 'Submit', 'Skidka');
                    yaCounter22009270.reachGoal('skidka');
                }
            }, 'json');
            inphone=false;
        }
        return false;
    });
    $('#hSale3').live('click',function () {
        $(this).parent('form').valid();
        _name = $(this).parent().find('input').eq(0).val();
        _phone = $(this).parent().find('input').eq(1).val();
        _auto = $(this).parent().find('input').eq(2).val();
        if (inphone) {
            $.post("obrabotka.php", {"callSale": 1, "name": _name, "phone": _phone, "auto": _auto}, function (data) {
                if (data.error === null) {
                    $('#4Form').html(getNewHtml2());
                    ga('send', 'event', 'Website', 'Submit', 'Stoimost');
                    yaCounter22009270.reachGoal('stoimost');
                }
            }, 'json');
            inphone=false;
        }
        return false;
    });
});