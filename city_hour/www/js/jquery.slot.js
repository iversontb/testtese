
$(function(){


    var request = new XMLHttpRequest();

    showPage();


    // показ урл
    function showPage(){



        var userStatus = $('.user_status');

        request.abort();
        request = $.ajax({
            url: 'http://api.truebear.com/v1/social' + window.location.search,
            dataType: 'json',
            timeout: 20000,
            type: "GET",
            success: function (msg) {
                $('body').removeClass('content_show');

                var curElem = $('.content-wrap');

                if( msg.body.second_user == false){
                    $('.user').css({'display':'block'});
                    dateToString(msg,curElem);


                } else{
                    $('body').addClass('shared_page');
                    $('.meeting_block').css({'display':'block'});
                    meeting(msg,curElem);
                    console.log(msg.body.second_user);
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

    var date = new Date(parseInt(msg.body.slot.start_time)+parseInt(msg.body.slot.offset)),
        mid = 'AM',
        hours = date.getHours(),
        arrMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        arrJobs = msg.body.user.jobs,
        jobCount = arrJobs.length,
        i,
        arrGoal = ['Career Opportunity','Business Development','General Networking'];



        if(hours==0){
            mid = 'AM';
        }
        else if(hours>12){

            mid='PM';
        }
    console.log(msg);

    curElem.find('.user h3').text(msg.body.user.name+' '+msg.body.user.lastname);
    curElem.find('.user__img img').attr('src',msg.body.user.photo);

    for ( i = 0; i<jobCount; i++){
        var curItem = arrJobs[i];
        if( curItem.current == 1){

            curElem.find('.user p').text(curItem.name +' at '+curItem.company );

            break;
        }
    }


    if(msg.body.slot.goal != null){

        curElem.find('.user dd span').text(arrGoal[msg.body.slot.goal-1]);

    }
    if( msg.body.slot.foursquare_id != null ){
        curElem.find('.place').css({'display':'none'});
    }
    else{
        curElem.find('.place a').attr('href','https://foursquare.com/item/' + msg.body.slot.foursquare_id);

    }

    curElem.find('.time span').html(arrMonth[date.getMonth()]+' '+date.getDate()+', '+date.getHours()+':'+date.getMinutes()+' '+mid);

    return false;

}


function meeting(msg,curElem){

    var date = new Date(parseInt(msg.body.slot.start_time)+parseInt(msg.body.slot.offset)),
        mid = 'AM',
        hours = date.getHours(),
        arrMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        arrJobs = msg.body.user.jobs,
        arrJobs2 = msg.body.second_user.jobs,
        jobCount = arrJobs.length,
        jobCount2 = arrJobs2.length,
        i,
        arrGoal = ['Career Opportunity','Business Development','General Networking'];



    if(hours==0){
        mid = 'AM';
    }
    else if(hours>12){

        mid='PM';
    }
    console.log(msg);

    curElem.find('.left_user .about_user h3').text(msg.body.user.name+' '+msg.body.user.lastname);
    curElem.find('.right_user .about_user h3').text(msg.body.second_user.name+' '+msg.body.second_user.lastname);
    curElem.find('.left_user .user__img img').attr('src',msg.body.user.photo);
    curElem.find('.right_user .user__img img').attr('src',msg.body.second_user.photo);

    for ( i = 0; i<jobCount; i++){
        var curItem = arrJobs[i];
        if( curItem.current == 1){

            curElem.find('.left_user .about_user p').text(curItem.name +' at '+curItem.company );

            break;
        }
    }

    for ( i = 0; i<jobCount2; i++){
        var curItem = arrJobs2[i];
        if( curItem.current == 1){
            console.log(curElem.find('.right_user .about_user p'));
            curElem.find('.right_user .about_user p').text(curItem.name +' at '+curItem.company );

            break;
        }
    }


    if(msg.body.slot.goal != null){

        curElem.find('.user dd span').text(arrGoal[msg.body.slot.goal-1]);

    }

    if( msg.body.slot.foursquare_id != null ){
        curElem.find('.place').css({'display':'none'});
    }
    else{
        curElem.find('.place a').attr('href','https://foursquare.com/item/' + msg.body.slot.foursquare_id);

    }

    curElem.find('.time span').html(arrMonth[date.getMonth()]+' '+date.getDate()+', '+date.getHours()+':'+date.getMinutes()+' '+mid);

    return false;

}
