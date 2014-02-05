$(function(){

    $( '.tabBlock').css({ 'display':'none'});
    $( '.firstBlock').css({ 'display':'block'});

    // работа табов
    $( '.product a' ).click(function(){
        $( '.product a' ).removeClass('active');
        $(this).addClass('active');
        var _id = $( this ).attr( 'id' ),
            _this=$( '.tabBlock ' ).eq(_id);

        $( '.tabBlock' ).css({ 'display': 'none' });

        _this.fadeIn();

        return false;
    });


} );