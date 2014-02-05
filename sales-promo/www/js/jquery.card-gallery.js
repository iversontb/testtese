$( function(){
    new CardGallery( $( '.card__gallery' ) );

} );

var CardGallery = function( obj ){
    this.obj = obj;
    this.elems = {
        screen: this.obj.find( '.card__gallery-pic' ),
        btn: this.obj.find( 'li' )
    };
    this.action = false;

    this.init();
};

CardGallery.prototype = {
    init: function(){
        var self = this;

        self.elems.btn.eq( 0 ).addClass( 'active' );
        self.core = self.core();
        self.core.controls();
    },
    core: function(){
        var self = this,
            elems = self.elems;

        return {
            controls: function(){

                elems.btn.find( 'a' ).on( {
                    'click': function(){
                        var curElem = $( this).parent();

                        if( !curElem.hasClass( 'active' ) && !self.action ) {
                            elems.btn.removeClass( 'active' );
                            curElem.addClass( 'active' );
                            self.action = true;

                            self.show( curElem );
                        }

                        return false;
                    }
                } );
            }
        };
    },
    show: function( item ){
        var self = this,
            src = item.find( 'a' ).attr( 'href'),
            img = $( new Image() ),
            oldLink = self.elems.screen.find( 'a' ),
            newLink = $( '<a style="display: none;" href="' + item.find( 'a' ).attr( 'data-url') + '"></a>' );

        img
            .load( function(){
                newLink.append( img );
                self.elems.screen.append( newLink );
                oldLink.fadeOut( 300, function(){
                    $( this ).remove();
                } );
                newLink.fadeIn( 300, function(){
                    self.action = false;
                } );
            } )
            .attr( 'src', src );

    }
};
