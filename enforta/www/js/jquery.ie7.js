$(function(){
    $( '.menu, .menu__item a, .site__footer,.footer__layout,.nice-select__item' ).append( '<u class="after"></u>' );
    $( '.response .response__err' ).append( '<u class="after">Заполните поле.</u>' );
    $( '.menu__item a,.site__footer' ).prepend( '<u class="before"></u>' );
} );