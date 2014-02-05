$(function(){



    // работа табов
    $( '.tab-menu a' ).click(function(){
        $( '.tab-menu a' ).removeClass('active');
        $(this).addClass('active');
        var _id = $( this ).attr( 'id' ),
            _this=$( '.tabBlock ' ).eq(_id);

        $( '.tabBlock' ).css({ 'display': 'none' });

        _this.fadeIn();

        return false;
    });


} );