$(function(){



     $( '.gallWrap' ).each( function(){

         var self = $(this);

         // инициализация маленькой галереи
         loadLightBox( self.find( '.miniGallWrap .preview li a' ).eq(0));
        self.find('.gallery').jCarouselLite({
            btnNext: '#' + $(this).find( '.next' ).attr('id'),
            btnPrev: '#' + $(this).find( '.prev' ).attr('id'),
            visible: 3,
            vertical: true
        });



         self.find( '.miniGallWrap .preview' ).on( 'click', 'li a', function() {
             loadLightBox( $( this ) );
             self.find('.littlGall LI a').removeClass('active');
             $(this).addClass('active');
             return false;
         } );

     } );



} );


// загрузка лайтбокс
var loadLightBox = function(obj){

    var srcAttr = obj.children().children().attr('src'),
        hrefAttr = obj.attr('href');

    obj.parent().parent().parent().parent().parent().parent().find( '.imgBigWrap div' ).remove();
    obj.parent().parent().parent().parent().parent().parent().find( '.imgBigWrap' ).append( '<div><img src="'+ srcAttr +'"  height="309" width="468" alt=""></div>' );


};