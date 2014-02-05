$( function(){
    new Star($('.star'));
});

var Star = function( obj ){

    this.obj = obj;
    this.item = this.obj.find( 'div' );
    this.width = '100%';

    this.init();
};
Star.prototype = {
    init: function(){
        var self= this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self= this;

        return {
            build: function(){
                self.core.controls();
            },
            controls: function(){
                self.obj.on( {
                    'mousemove': function(e){
                        var curItem = $( this),
                            curPos = Math.ceil( ( e.pageX - curItem.offset().left )/ curItem.width() * 10 );

                        if( curPos > 8 ){
                            self.item.width( '100%' );
                        } else if (curPos > 6 ){
                            self.item.width( '80%' );
                        } else if (curPos > 4 ){
                            self.item.width( '60%' );
                        } else if (curPos > 2 ){
                            self.item.width( '40%' );
                        } else {
                            self.item.width( '20%' );
                        }
                    },
                    'click': function(){
                        self.width = self.item.width();
                        self.item.width( self.width );
                        self.obj.find('input').val( self.width/20 );
                    },
                    'mouseleave': function(){
                        self.item.width( self.width );
                    }
                } );
            }
        };
    }
};