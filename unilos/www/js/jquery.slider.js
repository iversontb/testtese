$( function(){

    new Slider( $( '.gall1' ) );


} );

var Slider = function( obj ){
    this.obj = obj;
    this.elems = {
        listItems: this.obj.find( '>div li' ),
        parent: this.obj.find( '>div ul' )
    };

    this.init();
};
Slider.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this,
            elems = self.elems;


        return {
            build: function(){
                var controlStr = '',
                    controlsParent;

                elems.parent.css( { width: 150 * elems.listItems.length } );

                elems.listItems.each( function( i ){
                    var curItem = $( this).find( '> a > div' );


                    curItem.css( { bottom: -curItem.outerHeight() } );

                    if( i >= 3 ){
                        controlStr += '<li></li>';
                    }
                } );

                if( controlStr != '' ){
                    controlsParent = $( '<ul class="gallery__controls"></ul>' );
                    self.obj.append( controlsParent );
                    controlsParent.append( controlStr );
                }

                elems.controls = controlsParent.find( 'li' );
                elems.controls.eq( 0 ).addClass( 'active' );
                controlsParent.css( { marginLeft: -controlsParent.width()/2 } );
                elems.controls.each( function( i ){
                    $( this ).attr( 'data-left', -( i * 150 ) );
                } );
                self.core.controls();
            },
            controls: function(){
                elems.controls.on( {
                    click: function(){
                        var curElem = $( this );

                        if( !curElem.hasClass( '.active' ) ){
                            elems.controls.removeClass( 'active' );
                            curElem.addClass( 'active' );

                            elems.parent.stop( false, false ).animate( { left: curElem.attr( 'data-left' )}, 300 );
                        }
                    }
                } );
            }
        };
    }
};
