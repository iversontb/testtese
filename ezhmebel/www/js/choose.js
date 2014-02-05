var categoryForm;
var selectBut;
$( function(){


    categoryForm = $('.choose_material');

    $('.selectColorBut').on('click', 'span', function(){
        $('.choose_material').css({'display':'block'});
        selectBut = $(this).attr('id');

        loadContent();
        return false;
    });

    $('.choose_material').on('click', '.cls', function(){
        $('.choose_material').css({'display':'none'});
    });

    $('.choose_material__left_block UL LI').on('click', 'a', function(){

        var category = $(this).attr('data-category');
        $('.choose_material__left_block UL LI').removeClass('active');
        $(this).parent().addClass('active');
        $('#category').val(category);
        loadContent();

        return false;
    });



    $('.choose_material').on('click', '.material__block', function(){
        var  thisTitle = $(this).attr('title'),
            elemSrc =  $(this).children().attr('src'),
            elemPrice =  $(this).attr('data-price');

        $( '.material__image').children().remove();
        $( '.material__image' ).prepend( '<img src="'+ elemSrc +'"  title="'+ thisTitle +'"  height="224" width="200" alt="">' );
        $('.material_show dd').html(elemPrice + "руб.");

        return false;
    });

    $('.choose_material').on('click', '.choose_button', function(){

        var  imgTitle = $(this).prev().children().attr('title'),
            imgSrc =  $(this).prev().children().attr('src');

        console.log(imgTitle);

        if( selectBut == 1){

            console.log(imgTitle);

            $('.basis .selectBlock').prepend( '<img src="'+ imgSrc +'"  height="51" width="51" alt="">' );
            $(' .basis  A p').text(imgTitle);

        }
        else if( selectBut == 2 ){

            console.log(imgTitle);

            $('.companion .selectBlock').prepend( '<img src="'+ imgSrc +'"  height="51" width="51" alt="">' );
            $(' .companion   A p').text(imgTitle);
        }
        $('.choose_material').css({'display':'none'});
        return false;
    });






    $(window).resize(function(){

        recalucl();

    });

});


var request = new XMLHttpRequest();

function recalucl(){
    var blockHeight = $('.choose_material').height(),
        menuHeight = $('.choose_material__left_block > ul').height();

    $('.material').height(blockHeight - menuHeight);
}


function loadContent(){

    $('.material').find('a').fadeOut(300, function(){
        $(this).remove();
    });

    $('.material').find('h2').fadeOut(300, function(){
        $(this).remove();
        request.abort();
        request = $.ajax({
            url: categoryForm.attr('action'),
            data: categoryForm.serialize(),
            dataType: 'html',
            timeout: 20000,
            type: "GET",
            success: function (msg) {

                $('.material ').html(msg).removeClass('active_preload');
                recalucl();


                $('.material__block').eq(0).trigger('click');


            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                }
            }
        });
    });

}