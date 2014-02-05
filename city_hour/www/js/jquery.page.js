
$(function(){


    var request = new XMLHttpRequest();

    showPage();


    // показ урл
    function showPage(){



        var userStatus = $('.user_status'),
            answer = window.location.search.replace('?','').split('&'),
            i,
            code;
        for (i=0; i < answer.length ; i++ ){
            if(answer[i].indexOf('answer')+1){

                code = answer[i].replace('answer=','');

                break;
            }
        }
        console.log(code);



        request.abort();
        request = $.ajax({
            url: 'http://api.truebear.com/v1/meetings/' + window.location.search,
            dataType: 'json',
            timeout: 20000,
            type: "GET",
            success: function (msg) {

                $('body').removeClass('content_show');
                console.log(msg);
                if (code == 4 ){
                    if(msg.errorCode == 200){
                        var curElem = userStatus.eq(0);
                        dateToString(msg,curElem);
                    }
                    else if(msg.errorCode == 301){
                        var curElem = userStatus.eq(1);
                        dateToString(msg,curElem);
                    }
                    else if( msg.errorCode == 404 || msg.errorCode == 412){
                        var curElem = userStatus.eq(3);
                        dateToString(msg,curElem);
                    }
                    else{
                        alert('нужен макет страницы');
                    }

                }
                else if(code == 5 ){
                    if(msg.errorCode == 200){
                        var curElem = userStatus.eq(2);
                        dateToString(msg,curElem);
                    }
                    else{
                        alert('нужен макет страницы');
                    }
                }




            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                }
            }
        });

    };

} );





function dateToString(msg,curElem){

    var date = new Date(parseInt(msg.body.start_time)+parseInt(msg.body.offset)),
        mid = 'AM',
        hours = date.getHours(),
        arrMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];



    if(hours==0){
        mid = 'AM';
    }
    else if(hours>12){

        mid='PM';
    }

    curElem.addClass('active_status');

    curElem.find('.user_info__text h2').html(msg.body.fullname);
    curElem.find('.meeting_place').html(msg.body.place);
    curElem.find('.work_place').html(msg.body.job);

    if( msg.body.foursquare_id != null ){
        curElem.find('.place').css({'display':'none'});
    }
    else{
        curElem.find('.meeting_place').attr('href','https://foursquare.com/item/' + msg.body.foursquare_id);

    }
    if(msg.body.photo != "" ){
        curElem.find('.user_info__img img').attr('src', msg.body.photo);
    }

    curElem.find('.meeting_time').html(arrMonth[date.getMonth()]+' '+date.getDate()+', '+date.getHours()+':'+date.getMinutes()+' '+mid);

    return false;

}

