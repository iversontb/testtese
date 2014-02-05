$(function(){
     $( '.blockType' ).each( function(){

         var self = $(this);

         // инициализация маленькой галереи
         loadLightBox( self.find( '.miniGallWrap .preview li a' ).eq(0));
//        self.find('.gallery').jCarouselLite({
//            btnNext: '#' + $(this).find( '.next' ).attr('id'),
//            btnPrev: '#' + $(this).find( '.prev' ).attr('id'),
//            visible: 1
//        });


     } );
} );

