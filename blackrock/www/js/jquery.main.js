$(function(){



    var params = {
        changedEl: ".selectWrap select"
    }
    cuSel(params);


    $('.content .blockWrap').css({'display':'none'});
    $('.content .blockWrap.first').css({'display':'block'});
    // работа табов
    $( '.tabs h2' ).click(function(){
        $( '.tabs h2' ).removeClass('active');
        $(this).addClass('active');
        var _id = $( this ).attr( 'id' ),
            _this=$( '.blockWrap ' ).eq(_id);

        $( '.blockWrap' ).css({ 'display': 'none' });
        console.log(1);
        $('#slides2').slidesjs({

            width: 470,
            height: 289,
            navigation: false,
            play: {
                active: true,
                auto: true,
                interval: 5000,
                swap: true
            }
        });

        $('#slides3').slidesjs({
            width: 470,
            height: 289,
            navigation: false,
            play: {
                active: true,
                auto: true,
                interval: 5000,
                swap: true
            }
        });

        _this.fadeIn();

        return false;
    });





});
