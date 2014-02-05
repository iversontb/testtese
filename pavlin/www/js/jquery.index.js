$(function(){
    $(".gallery").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 4,
        auto: 5000
    });

    new Tabs( $( '.tabs' ) );
    new Menu( $( '.category' ) );
});

var Tabs = function( obj ){
    this.obj = obj;
    this.btns = this.obj.find( '> dt' );
    this.content = this.obj.find( '> dd' );

    this.init();
};
    Tabs.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.btns.filter( '.active').next().css( { display: 'block' } );
                    self.core.controls();
                },
                controls: function(){
                    self.btns.on( {
                        'click': function(){
                            self.core.show( $( this ) );
                        }
                    } );
                },
                show: function( curItem ){
                    var curContent = curItem.next(),
                        oldItem = self.btns.filter( '.active'),
                        oldContent = oldItem.next();

                    curItem.addClass( 'active' );
                    oldItem.removeClass( 'active' );
                    oldContent.stop( true, false ).fadeOut( 300 );
                    curContent.stop( true, false ).fadeIn( 300 );

                }
            };
        }
    };

var Menu = function( obj ){
    this.obj = obj;
    this.btns = this.obj.find( '> li > span' );
    this.init();
};
Menu.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.controls();
    },
    core: function(){
        var self = this;

        return {
            controls: function(){
                self.btns.on( {
                    'click': function(){
                        var curItem = $( this).parent();
                        console.log(1);

                        curItem.toggleClass( 'active' );
                    }
                } );
            }
        };
    }
};