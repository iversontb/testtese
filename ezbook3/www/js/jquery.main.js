$(function(){




        $(".iframe").fancybox({
            'height': 600
        });


    $('.superSearch').live('click',  function(){

        $( '.tabsMenu a' ).removeClass('active');
        $('#1').addClass('active');
        $( '.tabBlock' ).css({ 'display': 'none' });
        $('.superSearchBlock').fadeIn();
        return false;
    });

    $('.hotels').live('click',  function(){

        $( '.tabsMenu a' ).removeClass('active');
        $('#2').addClass('active');
        $( '.tabBlock' ).css({ 'display': 'none' });
        $('.hotelsBlock').fadeIn();
        return false;
    });

    $('.commissions').live('click',  function(){

        $( '.tabsMenu a' ).removeClass('active');
        $('#3').addClass('active');
        $( '.tabBlock' ).css({ 'display': 'none' });
        $('.commissionsBlock').fadeIn();
        return false;
    });

    $('.addService').live('click',  function(){

        $( '.tabsMenu a' ).removeClass('active');
        $('#4').addClass('active');
        $( '.tabBlock' ).css({ 'display': 'none' });
        $('.addServiceBlock').fadeIn();
        return false;
    });


    $('.collection').live('click',  function(){

        $( '.tabsMenu a' ).removeClass('active');
        $('#5').addClass('active');
        $( '.tabBlock' ).css({ 'display': 'none' });
        $('.collectionBlock').fadeIn();
        return false;
    });

    $('.xTra').live('click',  function(){

        $( '.tabsMenu a' ).removeClass('active');
        $('#6').addClass('active');
        $( '.tabBlock' ).css({ 'display': 'none' });
        $('.xTraBlock').fadeIn();
        return false;
    });

    $('.tools').live('click',  function(){

        $( '.tabsMenu a' ).removeClass('active');
        $('#7').addClass('active');
        $( '.tabBlock' ).css({ 'display': 'none' });
        $('.toolsBlock').fadeIn();
        return false;
    });









    $('.firstBlock').css({'display':'block'});

    // работа табов
    $( '.tabsMenu a' ).click(function(){
        $( '.tabsMenu a' ).removeClass('active');
        $(this).addClass('active');
        var _id = $( this ).attr( 'id' ),
            _this=$( '.tabBlock ' ).eq(_id);

        $( '.tabBlock' ).css({ 'display': 'none' });

        _this.fadeIn();

        return false;
    });


} );
