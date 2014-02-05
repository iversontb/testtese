$( function(){
    new Tabs( $( '.tabs' ) );
    new Filik();

} );

var Tabs = function( obj ){
    this.obj = obj;
    this.elems = {
        btn: this.obj.find( '.tabs__btn' ),
        content: this.obj.find( '.tabs__content' )
    };
    this.init();
};
    Tabs.prototype = {
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
                    elems.btn.on( {
                        'click': function(){
                            var curItem = $( this );

                            if( !curItem.hasClass( 'active' ) ){
                                elems.btn.removeClass( 'active' );
                                elems.content.removeClass( 'active' );

                                elems.content.eq( curItem.index() ).addClass( 'active' );
                                curItem.addClass( 'active' );
                            }
                        }
                    } );
                }
            };
        }
    };

var Filik = function(){
    this.init();
};
Filik.prototype = {
    init: function(){
        $( '.file__remove' ).on( {
            'click': function(){
                var fileNames = $( '.filepath' ).val();

                $( '.filepath' ).val( '' );
                $( '.file__info' ).css( { display: 'none' } );
                $( '.file__load, .file__btn, .file > span').css( { display: 'block' } );
                $( '.file__load span').width( 0 );

                $.ajax({//данные для аякс запроса
                    url: 'php/delete-doc.php',
                    data: "fileNames=" + fileNames,
                    dataType: 'json', // определяем тип получаемых данных
                    timeout: 20000,
                    type: "GET",
                    success: function(msg){},
                    error: function(XMLHttpRequest){}
                });
            }
        } );
        new qq.FileUploader({
            element: $('.file__btn')[0],
            action: 'php/upload2.php',
            params: {},
            allowedExtensions: [ 'doc', 'docx', 'pdf' ],
            sizeLimit: 0,
            minSizeLimit: 0,
            debug: false,
            fileNum: 0,
            uploaded: 2,
            maxConnections: 10,
            onSubmit: function( id, fileName ){
                $( '.file__btn, .file > span').css( { display: 'none' } );
            },
            onProgress: function( id, fileName, loaded, total ){},
            onComplete: function(id, fileName, responseJSON){

                $( '.file__load span').animate( { width: 390 }, 500, function(){
                    $( '.filepath' ).val( responseJSON.path );
                    $( '.file__info > span' ).eq( 0 ).text( fileName );
                    $( '.file__info' ).css( { display: 'block' } );

                    $( '.file__load').css( { display: 'none' } );
                } );
            },
            onCancel: function(id, fileName){},
            messages: {},
            showMessage: function(message){ alert(message);}
        });
    }
};

