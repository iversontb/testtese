$( function(){
    var request = new XMLHttpRequest();

    $('.yourStation').on('click','.selectMetro, .changeStation', function(){




        $('.stationPopup').find('tr').remove();



        request.abort();
        request = $.ajax({
            url: $('.stationForm').attr('data-php'),
            data: $('.stationForm').serialize(), // отправляет всю форму
            dataType: 'json',
            timeout: 20000,
            type: "GET",
            success: function (msg) {
                var i,
                    stationCount = msg.station.length,
                    resultString = "",
                    letter = "",
                    letterStr ="",
                    counter = 0,
                    temTd = "",
                    j;

//                console.log(stationCount);


                for( i = 0; i<stationCount; i++){

                    if(letter != msg.station[i].charAt(0).toUpperCase() ){
                        if(counter != 0){

                            for(j=counter; j < 3; j++){
                                temTd += '<td></td>';
                            }
                            letterStr +='<tr>'+temTd+'</tr>';
                            temTd = "";
                            counter = 0;

                        }
                        letter = msg.station[i].charAt(0).toUpperCase();
                        letterStr += '<tr><td colspan="3" class="no_hover">'+letter+'</td></tr>'
                    }

                    counter++;
                    temTd += '<td><a href="#">'+msg.station[i]+'</a></td>';

                    if(counter == 3){
                        counter = 0;
                        letterStr +='<tr>'+temTd+'</tr>';
                        temTd = "";
                    }



                    resultString += '<td><a href="#">'+msg.station[i]+'</a></td>';
                }
//
                $('.tableWrap table tbody').append(letterStr);

            },
            error: function (XMLHttpRequest) {
                if (XMLHttpRequest.statusText != "abort") {
                    alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                }
            }
        });


        $('.stationPopup').fadeIn();
        return false;
    });

    $('.stationPopup').on('click','.backPop, .closePop', function(){
        $('.stationPopup').css({'display':'none'});
        return false;
    });




    var windowHeight = $(window).height(),
        stationListHeight = $('.stationList').height(windowHeight - 100);
    $('.tableWrap').css({'height': stationListHeight.height() - 20});



    $(window).resize( function(){

        var windowHeight = $(window).height(),
            stationListHeight = $('.stationList').height(windowHeight - 100);
        $('.tableWrap').css({'height': stationListHeight.height() - 20});

    });


    $('.stationList').on('click','a', function(){


        $('.yourStation .resultStation input[type="text"]').val($(this).text());
        $('.yourStation .townChoose').css({'display':'none'});
        $('.yourStation .resultStation').css({'display':'block'});
        $('.stationPopup').css({'display':'none'});
        return false;
    });

});