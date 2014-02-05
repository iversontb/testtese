$(function(){

    var params = {
        changedEl: ".selectWrap select"
    }
    cuSel(params);

    jQuery(".gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 4,
        auto: 5000
    });


    $( '.tabsText' ).css({ 'display': 'none' });
    $( '.tabsText.first' ).css({ 'display': 'block' });
    // работа табов
    $( '.tabs a' ).click(function(){
        $( '.tabs a' ).removeClass('active');
        $(this).addClass('active');
        var _id = $( this ).attr( 'id' ),
            _this=$( '.tabsText ' ).eq(_id);

        $( '.tabsText' ).css({ 'display': 'none' });

        _this.fadeIn();

        return false;
    });


} );