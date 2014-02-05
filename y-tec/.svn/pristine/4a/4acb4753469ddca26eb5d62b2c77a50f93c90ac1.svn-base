$(function(){
    new SubMenu( $( '.submenu' ) );

    $( '.order fieldset > input').each( function(){
        new Required( $( this ) );
    } );
} );
var Required = function( obj ){
    this.obj = obj;
    this.star = $( '<div>*</div>' )

    this.init();
};
Required.prototype = {
    init: function(){
        var self = this;
        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.obj.parent().append( self.star );
                self.star.css( {
                    position: 'absolute',
                    top: self.obj.position().top + 8,
                    left: self.obj.position().left + 25
                } );
                if( self.obj.val() != '' ){
                    self.star.css( { 'display': 'none' } );
                }
                self.core.controls();
            },
            controls: function(){
                self.obj.on( {
                    'focus': function(){
                        self.star.css( { 'display': 'none'} );
                    },
                    'blur': function(){
                        if( self.obj.val() == '' ){
                            self.star.css( { 'display': 'block'} );
                        }
                    }
                } );
            }
        };
    }
};
var SubMenu = function( obj ){
    this.obj = obj;
    this.items = this.obj.find( 'li > span' );

    this.init()
};
    SubMenu.prototype = {
        init: function(){
            var self = this;
            self.core = self.core();
            self.core.controls();
        },
        core: function(){
            var self = this,
                elems = self.elems;

            return {
                controls: function(){
                    self.items.on( {
                        'click': function(){
                            var curItem = $( this ).parent();

                            if( curItem.hasClass( 'active' ) ){
                                self.hide( curItem );
                            } else {
                                if( self.obj.find( 'li.active' ).length ){
                                    self.hide( this.obj.find( 'li.active' ) );
                                }

                                self.show( curItem );
                            }
                        }
                    } )
                }
            };
        },
        show: function( item ){
            var curItem = item.find( '> div' );

            item.addClass( 'active' );
            curItem.css( {
                display: 'none'
            } );
            curItem.stop( false, true ).slideDown( 300 );
        },
        hide: function( item ){
            var curItem = item.find( '> div' );

            item.removeClass( 'active' );
            curItem.css( {
                display: 'block'
            } );
            curItem.stop( false, true ).slideUp( 300 );
        }
    };
