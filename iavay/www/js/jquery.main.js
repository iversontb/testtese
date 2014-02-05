$(function(){



    // показать больше соцсетей
    $( '.popUpContainer .moreSoc' ).click( function(){
        $( this ).prev().animate({
            height: "300px"

        }, 500 );
        $(this).fadeOut();
        return false;
    });

    $( '#registed' ).change( function(){
        if( $(this).attr('checked')){
            console.log(1);
            $('.popUpContainer .registred').fadeIn();
            $('.popUpContainer .notReg').css({ 'display' : 'none' });
        }
        else{
            $('.popUpContainer .registred').css({ 'display' : 'none' });
            $('.popUpContainer .notReg').fadeIn();
        }
    });


    $(".selectPop .cusel span").live("click", function(){
       if($( this).index() !== 0 ){
           $( this).parent().parent().parent().parent().parent().next().css({'display':'block'});
       }
        else{
           $( this).parent().parent().parent().parent().parent().next().css({'display':'none'});
       }
    });


    // скрытие openBlock
    $('.content-wrap .openBlock').slideUp(100);

    $('.sendBut, .content-wrap .allServiceWrap .openService .moreInfo').click( function(){
        $('.content-wrap .openBlock').css({'display':'none'});
        $(this).parents('.tableWrap').next().slideDown();
        $('.sendBut').css({'display':'block'});
        $('.moreInfo').css({'display':'block'});
        $(this).css({'display':'none'});
        $('.tableWrap tr').css({'background':'#fff'});
        $(this).parents('.tableWrap tr').css({'background':'#f0f8fc'});

        return false;

    });

    $('.cencelBut, .doneBut').click( function(){
        $(this).parents('.openBlock').slideUp();
        $(this).parents('.openBlock').prev().find('.sendBut').css({'display':'block'});
        $(this).parents('.openBlock').prev().find('.moreInfo').css({'display':'block'});
        $(this).parents('.openBlock').prev().find('tr').css({'background':'#fff'});
        return false;
    });

    // добавление слжб и сотрудников
    $('.addBut').click( function(){

        var _id = Math.round(Math.random(2)*1000);
        var _id2 = Math.round(Math.random(2)*2000);
        var addBlock = $('<!--lineContainer--><div class="lineContainer"><!--blockWrap--><div class="blockWrap">               <!--—BEGIN selectWrap --><div class="selectWrap"><label for="'+_id+'">Служба</label><select id="'+_id+'" name="'+_id+'"><option value="Дорожные работы">Коломенское дорожное ремонтно-строительное управление</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><!--—END selectWrap --></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap">       <!--—BEGIN selectWrap --><div class="selectWrap middleWidth"><label for="'+_id2+'">Сотрудник</label><select id="'+_id2+'" name="'+_id2+'"><option value="Дорожные работы">Константин Константинопольский</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div><!--—END selectWrap -->      </div><!--/blockWrap--><!--blockWrap--><div class="blockWrap buttonContainer"><a href="javascript:void(0)" class="buttonType pinkButton size4 deleteBut">Удалить</a></div><!--/blockWrap--></div><!--/lineContainer-->');

        addBlock.insertBefore($( this).parent().parent());
//        params = {
//            refreshEl: ".selectWrap select",
//            visRows: 5,
//            scrollArrows: false
//        }
//        cuSelRefresh(params);
//        var params = {
//            changedEl: ".selectWrap select",
//            visRows: 5,
//            scrollArrows: false
//        }
//        cuSel(params);
        return false;

    });

    // удаление добавленной строки
    $('.deleteBut').live( 'click', function(){
        $(this).parents('.lineContainer').remove();
    });

    // нажатеи удалить в таблице
    $('.content-wrap .tableWrap.hiddenTable .tableBut .deleteProblem').live( 'click', function(){
        $('.popUpWrap').fadeIn();
        var getID = $(this).parents('.content-wrap .tableWrap tr').attr('id');
        $('.popUpWrap').attr("_id",getID);
    });

    // нажетие отмены в попапе
    $('.content-wrap .tablePop .cancelBut, .content-wrap .workList .cancelBut').live( 'click', function(){
        $('.popUpWrap').fadeOut();
    });

    // удаление строки в таблице
    $('.content-wrap .tablePop .deleteProblem').live( 'click', function(){
        $('.popUpWrap').fadeOut();
        var getID = $('.popUpWrap').attr('_id');
        $('.content-wrap .tableWrap').find('#'+getID).parents('.tableWrap').next().remove();
        $('.content-wrap .tableWrap').find('#'+getID).remove();

    });

    // для последней таблице добавляю калссы для бордера
    $('.tableWrap').eq(-1).addClass('lastTable ');
 //   $('.openBlock').eq(-1).addClass('borderBottom');

    // раскрытие коменатриев
    $('.content-wrap .openBlock .showComments').click( function(){
        $(this).css({'display':'none'});
        $(this).next().slideDown();
        $(this).next().next().fadeIn();
        return false;
    });
    // скрытие коменатриев
    $('.content-wrap .openBlock .hideComments').click( function(){
        $(this).css({'display':'none'});
        $(this).prev().slideUp();
        $(this).prev().prev().fadeIn();
        return false;
    });


    // работа табов
    $( '.contentMenu a' ).click(function(){
        $( '.contentMenu li' ).removeClass('active');
        $(this).parent().addClass('active');
        var _id = $( this ).attr( 'id' ),
            _this=$( '.tabBlock ' ).eq(_id);

        $( '.tabBlock' ).css({ 'display': 'none' });

        _this.fadeIn();

//        var params = {
//            changedEl: ".selectWrap select",
//            visRows: 5,
//            scrollArrows: false
//        }
//        cuSel(params);

        return false;
    });

    // выстовлю высоту  .content-wrap .openService
    var serviceHeight = $('.content-wrap .allServiceWrap .serviceFilter').height();
    $('.content-wrap .openService').css({'min-height':serviceHeight-4});


    // добавить режимы работы
    $('.addTerms').click( function(){

        var _id = Math.round(Math.random(2)*1000);
        var _id2 = Math.round(Math.random(2)*2000);
        var _id3 = Math.round(Math.random(2)*1000);
        var _id4 = Math.round(Math.random(2)*2000);
        var _id5 = Math.round(Math.random(2)*1000);
        var _id6 = Math.round(Math.random(2)*2000);
        var addBlock = $('<!--lineContainer--><div class="lineContainer noFirstMargin"><!--blockWrap--><div class="blockWrap"><!--—BEGIN selectWrap --><div class="selectWrap firstDay"><label for="'+_id+'">ДНИ НЕДЕЛИ</label><select id="'+_id+'" name="'+_id+'"><option value="Понедельник">Понедельник</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><!--—END selectWrap --><span>-</span></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap"><!--—BEGIN selectWrap --><div class="selectWrap lastDay"><select id="'+_id2+'" name="'+_id2+'"><option value="Понедельник">Воскресенье</option><option value="1">1</option><option value="2">2</option></select></div><!--—END selectWrap --></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap"><!--—BEGIN selectWrap --><div class="selectWrap firstTime"><label for="idSelect14">ЧЧ</label><select id="'+_id3+'" name="'+_id3+'"><option value="9">9</option><option value="1">1</option><option value="2">2</option></select></div><!--—END selectWrap --><span>:</span></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap"><!--—BEGIN selectWrap --><div class="selectWrap lastTime"><label for="'+_id4+'">ММ</label><select id="'+_id4+'" name="'+_id4+'"><option value="9">9</option><option value="1">1</option></select></div><!--—END selectWrap --><span>-</span></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap"><!--—BEGIN selectWrap --><div class="selectWrap firstTime"><label for="'+_id5+'">ЧЧ</label><select id="'+_id5+'" name="'+_id5+'"><option value="9">9</option><option value="1">1</option><option value="2">2</option></select></div><!--—END selectWrap --><span>:</span></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap"><!--—BEGIN selectWrap --><div class="selectWrap lastTime"><label for="'+_id6+'">ММ</label><select id="'+_id6+'" name="'+_id6+'"><option value="9">9</option><option value="1">1</option></select></div><!--—END selectWrap --></div><!--/blockWrap--><div class="blockWrap buttonContainer"><a href="javascript:void(0)" class="buttonType pinkButton size4 deleteTime">Удалить</a></div></div><!--/lineContainer-->');

        addBlock.insertBefore($( this).parent().parent());
//        params = {
//            refreshEl: ".selectWrap select",
//            visRows: 5,
//            scrollArrows: false
//        }
//        cuSelRefresh(params);
//        var params = {
//            changedEl: ".selectWrap select",
//            visRows: 5,
//            scrollArrows: false
//        }
//        cuSel(params);
        return false;

    });

    // добавить сотрудников
    $('.addWorker').click( function(){


        var addBlock = $('<!--borderLine--><div class="borderLine noLine"><!--copyBlock--><div class="copyBlock"><!--lineContainer--><div class="lineContainer"><!--blockWrap--><div class="blockWrap"><label>Сотрудник</label><div class="inputWrap nameInput"><input type="text"></div></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap buttonContainer"><a href="javascript:void(0)" class="buttonType pinkButton size4 deleteWorker">Удалить</a></div><!--/blockWrap--></div><!--/lineContainer--><!--lineContainer--><div class="lineContainer"><!--blockWrap--><div class="blockWrap"><label>Почта</label><div class="inputWrap emailInput"><input type="text"></div></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap"><label>Телефон</label><div class="inputWrap phoneInput"><input type="text"></div></div><!--/blockWrap--></div><!--/lineContainer--></div><!--/copyBlock--></div><!--/borderLine-->');

        addBlock.insertBefore($( this).parent().parent().parent());

        return false;

    });

    // добавить сотрудников c чекбоксом
    $('.addWorkerService').click( function(){

        var _id = Math.round(Math.random(2)*1000);

        var addBlock = $('<!--borderLine--><div class="borderLine noLine"><!--copyBlock--><div class="copyBlock"><!--lineContainer--><div class="lineContainer"><!--blockWrap--><div class="blockWrap"><label>Сотрудник</label><div class="inputWrap nameInput"><input type="text"></div></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap buttonContainer"><a href="javascript:void(0)" class="buttonType pinkButton size4 deleteWorker">Удалить</a></div><!--/blockWrap--></div><!--/lineContainer--><!--lineContainer--><div class="lineContainer"><!--blockWrap--><div class="blockWrap"><label>Почта</label><div class="inputWrap emailInput"><input type="text"></div></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap"><label>Телефон</label><div class="inputWrap phoneInput"><input type="text"></div></div><!--/blockWrap--><!--blockWrap--><div class="blockWrap sendEmail"><div class="checkContainer"><input type="checkbox" id="'+_id+'" /><label for="'+_id+'">Отправить уведомление о регистрации на почту</label></div></div><!--/blockWrap--></div><!--/lineContainer--></div><!--/copyBlock--></div><!--/borderLine-->');

        addBlock.insertBefore($( this).parent().parent().parent());

        return false;

    });

    // удаление сотрудника
    $('.deleteWorker').live( 'click', function(){
        $(this).parents('.borderLine').remove();
    });

    // скрытие openBlock
    $('.content-wrap .tabBlock').slideUp(200);

    // раскрыть первый блок
    setTimeout( function(){
        $('.content-wrap .firstBlock').css({'display':'block'});
    }, 500)

    // нажатие применить в Списке работ
    $('.applyBut').live( 'click', function(){
        var nameInput = $(this).parents('.lineContainer').find('.nameInput input').val(),
            startInput = $(this).parents('.lineContainer').find('.startInput input').val(),
            finishInput = $(this).parents('.lineContainer').find('.finishInput input').val(),
            areaInput = $(this).parents('.lineContainer').find('.areaInput input').val();
        console.log(finishInput);
        console.log(areaInput);

        $(this).parents('.lineContainer').find('input').remove();
        $(this).parents('.borderLine').addClass('doneWorkers');
        $(this).parents('.lineContainer').find('.nameInput').append(nameInput);
        $(this).parents('.lineContainer').find('.startInput').append(startInput);
        $(this).parents('.lineContainer').find('.finishInput').append(finishInput);
        $(this).parents('.lineContainer').find('.areaInput').append(areaInput);
    });

    // нажатие изменить в Списке работ
    $('.changeBut').live( 'click', function(){
        var nameInput = jQuery.trim($(this).parents('.lineContainer').find('.nameInput').html()),
            startInput = jQuery.trim($(this).parents('.lineContainer').find('.startInput').html()),
            finishInput = jQuery.trim($(this).parents('.lineContainer').find('.finishInput').html()),
            areaInput = jQuery.trim($(this).parents('.lineContainer').find('.areaInput').html());
        $(this).parents('.lineContainer').find('.inputWrap').empty();
        $(this).parents('.lineContainer').find('.nameInput').append('<input class="text" value="'+nameInput+'">');
        $(this).parents('.lineContainer').find('.startInput').append('<input class="text" value="'+startInput+'">');
        $(this).parents('.lineContainer').find('.finishInput').append('<input class="text" value="'+finishInput+'">');
        $(this).parents('.lineContainer').find('.areaInput').append('<input class="text" value="'+areaInput+'">');
        $(this).parents('.borderLine').removeClass('doneWorkers');

    });


    // добавление строки  с работниками в сплывающем окне "список работ"
    $('.addWorkList').click( function(){

        var addBlock = $('<div class="borderLine"><div class="lineContainer"><div class="blockWrap"><label>Наименование</label><div class="inputWrap nameInput"><input class="text"></div></div><div class="blockWrap"><label>Старт</label><div class="inputWrap startInput"><input class="text"></div></div><div class="blockWrap "><label>Окончание </label><div class="inputWrap finishInput"><input class="text"></div></div><div class="blockWrap "><label>Площадь (м. кв.) </label><div class="inputWrap areaInput"><input class="text"></div></div><div class="blockWrap"><a href="javascript:void(0)" class="buttonType greenButton size4 applyBut">Применить</a><a href="javascript:void(0)" class="buttonType greenButton size4 changeBut">Изменить</a></div></div></div>');

        addBlock.insertBefore($( this).parent().parent().parent());

        return false;
    });


    $('.content-wrap .allServiceWrap .openService .tooltip').click( function(){
        $('.content-wrap .popUpWrap').fadeIn();
    });

    // добавление комапании
    $('.addCompany').click( function(){
        var _id = Math.round(Math.random(2)*1000);
        var addBlock = $('<!--lineContainer--><div class="lineContainer"><!--blockWrap--><div class="blockWrap"><!--—BEGIN selectWrap --><div class="selectWrap longSelect"><label for="'+_id+'">Управляющая компания</label><select id="'+_id+'" name="'+_id+'"><option value="МУЗ Коломенский доктор ">МУЗ Коломенский доктор </option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div><!--—END selectWrap --></div><!--/blockWrap--></div><!--/lineContainer-->');

        addBlock.insertBefore($( this).parent().parent().parent());
//
//        var params = {
//            changedEl: ".selectWrap select",
//            visRows: 5,
//            scrollArrows: false
//        }
//        cuSel(params);
        return false;
    });


    // добавление службы
    $('.addService').click( function(){
        var _id = Math.round(Math.random(2)*1000);
        var addBlock = $('<!--lineContainer--><div class="lineContainer"><!--blockWrap--><div class="blockWrap"><!--—BEGIN selectWrap --><div class="selectWrap longSelect"><label for="'+_id+'">Подрядные организации</label><select id="'+_id+'" name="'+_id+'"><option value="МУЗ Коломенский доктор ">МУЗ Коломенский доктор </option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></div><!--—END selectWrap --></div><!--/blockWrap--></div><!--/lineContainer-->');

        addBlock.insertBefore($( this).parent().parent().parent());

//        var params = {
//            changedEl: ".selectWrap select",
//            visRows: 5,
//            scrollArrows: false
//        }
//        cuSel(params);
        return false;
    });

    // закрыие попапов по крестику
    $('.closeBut').click( function(){
       $(this).parents('.popUpWrap').fadeOut();
    });

    // Закрытие окна по ESC
    $('body').bind('keydown', function(e) {
        if(e.keyCode == 27){
            $('.popUpWrap').fadeOut();
        }

    });

    // удаление реима работы
    $('.deleteTime').live( 'click', function(){
        $(this).parents('.lineContainer').remove();
    });

    // действие по нажатия на Отправить сообщение в службу
    $('.sendMessage').live( 'click', function(){
        $(this).parents('.lineContainer').find('.cencelBut').css({'display':'none'});
        $(this).parents('.openBlock').find('.takeBlock').css({'display':'none'});
        $(this).parents('.lineContainer').css({'display':'none'});
        $(this).parents('.openBlock').find('.messageBlock').slideDown();

    });

    // действие по нажатия на Взять в работу
    $('.takeToJob').live( 'click', function(){
        $(this).parents('.lineContainer').find('.cencelBut').css({'display':'none'});
        $(this).parents('.lineContainer').css({'display':'none'});
        $(this).parents('.openBlock').find('.messageBlock').css({'display':'none'});
        $(this).parents('.openBlock').find('.takeBlock').slideDown();
    });

    // закрытие блока Отправить сообщение в службу
    $('.cencelmessageBlock').live( 'click', function(){
        $(this).parents('.messageBlock').slideUp();
        $(this).parents('.messageBlock').prev().prev().find('.withButton').css({'display':'block'});
        console.log($(this).parents('.messageBlock').prev().prev().find('.withButton'))
        $(this).parents('.messageBlock').prev().prev().find('.cencelBut').css({'display':'block'});
    });

    // закрытие блока Взять в работу
    $('.cencelTakeBlock').live( 'click', function(){
        $(this).parents('.takeBlock').slideUp();
        $(this).parents('.takeBlock').prev().find('.withButton').css({'display':'block'});
        $(this).parents('.takeBlock').prev().find('.cencelBut').css({'display':'block'});

    });

    $('.takeDone').click( function(){
       $('.popUpWrap').fadeIn();
    });



    $('.closeProblemBut').live( 'click', function(){
        $(this).parents('.lineContainer ').next().next().css({'display':'none'});
        $(this).parents('.lineContainer ').next().slideDown();
        $(this).parents('.withButton').css({'display':'none'});
    });

    $('.removeDate').live( 'click', function(){
        $(this).parents('.lineContainer ').next().css({'display':'none'});
        $(this).parents('.lineContainer ').next().next().slideDown();
        $(this).parents('.withButton').css({'display':'none'});
    });

    $('.cencelMove').live('click', function(){
        $(this).parents('.delay').slideUp();
        $(this).parents('.reasons').slideUp();
        $(this).parents('.reasons').prev().css({'display':'block'});
        $(this).parents('.delay').prev().prev().css({'display':'block'});
    });



} );