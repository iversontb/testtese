$(function(){




    $( '.asideMenu a' ).click( function () {
        if ( $( this ).next().css( 'display' ) == 'none' ){
            $( this ).next().slideDown( 300 );
            $( this ).removeClass( 'downArrow' );
            $( this ).addClass( 'upArrow' );
        } else {
            $( this ).next().slideUp( 300 );
            $( this ).removeClass( 'upArrow' );
            $( this ).addClass( 'downArrow' );
        }
        return false;
    });

    new Paginator();

    $('.popUp').css({'display':'none'});





} );

/*
* Paginator
* */
var Paginator = function(){
    this.parent = $( '.goodsContainer' );
    this.items = this.parent.find( 'li' );
    this.pager = $( '.parent' );
    this.pages = this.pager.find('a');
    this.request = new XMLHttpRequest();

    this.init();
};
    Paginator.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.startView( parseInt( self.pager.attr( 'data-active' ) ) );

        },
        core: function(){
            var self = this;

            return {
                controls: function(){
                    self.pages.on( 'click', function(){
                        var curElem = $( this ),
                            active = self.pages.parents( 'ul').find('li.active').text() - 1;

                        if( curElem.text() == '<' ){
                            active--;
                        } else if ( curElem.text() == '>' ) {
                            active++;
                        } else {
                            active = curElem.text() - 1;
                        }

                        self.getPage( active );

                        return false;
                    } );
                },
                startView: function( active ){
                    var count = parseInt( self.pager.attr( 'data-count' ) ),
                        resultString = '', i;

                    if( count <= 6 ){
                        for( i = 0; i < count; i++ ){
                            if ( i == active ) {
                                resultString += '<li class="active">' + ( i + 1 ) + '</li>';
                            } else {
                                resultString += '<li><a href="#">' + ( i + 1 ) + '</a></li>';
                            }
                        }
                    } else {
                        if( active != 0 ){
                            resultString += '<li><a href="#" class="prevPag"><</a></li>'
                        }
                        if ( ( count <= 10 && active <= 4 ) || ( count > 10 && active <= 4 ) ) {
                            for( i = 0; i < 5; i++ ){
                                if ( i == active ) {
                                    resultString += '<li class="active">' + ( i + 1 ) + '</li>';
                                } else {
                                    resultString += '<li><a href="#">' + ( i + 1 ) + '</a></li>';
                                }
                            }
                            resultString += '<li>...</li>';
                            resultString += '<li><a href="#">' + count + '</a></li>';
                        } else if( ( count <= 10 && active > 4 ) || ( count > 10 && active >= ( count - 5 ) ) ){
                            resultString += '<li><a href="#">1</a></li>';
                            resultString += '<li>...</li>';
                            for( i = count - 5; i < count; i++ ){
                                if ( i == active ) {
                                    resultString += '<li class="active">' + ( i + 1 ) + '</li>';
                                } else {
                                    resultString += '<li><a href="#">' + ( i + 1 ) + '</a></li>';
                                }
                            }
                        } else if( count > 10 ){
                            resultString += '<li><a href="#">1</a></li>';
                            resultString += '<li>...</li>';
                            for( i = ( active - 2 ); i < ( active + 3 ); i++ ){
                                if ( i == active ) {
                                    resultString += '<li class="active">' + ( i + 1 ) + '</li>';
                                } else {
                                    resultString += '<li><a href="#">' + ( i + 1 ) + '</a></li>';
                                }
                            }
                            resultString += '<li>...</li>';
                            resultString += '<li><a href="#">' + count + '</a></li>';
                        }
                        if( active != ( count - 1 ) ){
                            resultString += '<li><a href="#" class="nextPag">></a></li>'
                        }
                    }
                    self.pages.off( 'click' );
                    self.pager.find('ul').html( resultString );

                    self.pages = self.pager.find('a');
                    self.core.controls();
                }
            }
        },
        getPage: function( index ){
            var self = this;

            self.request = $.ajax( {
                url: self.pager.attr( 'data-php' ),
                data: 'page=' + index,
                dataType: 'json',
                timeout: 20000,
                type: "POST",
                success: function(msg){
                    var count = msg.items.length,
                        gallery = self.parent,
                        items = gallery.find( 'li' ),
                        j,
                        tempString = '',
                        curItem;

                    self.core.startView( index );
                    console.log( msg );
                    gallery.height( gallery.height() );

                    for( j = 0; j < count; j++ ){
                        curItem = msg.items[ j ];
                        var features = '', curFeatures;

                        for( i = 0; i < curItem.features.length; i++ ){
                            curFeatures = curItem.features[ i ];
                            features += '<dl>\
                                            <dt>' + curFeatures.title + ': </dt>\
                                            <dd>' + curFeatures.text + '</dd>\
                                        </dl>';

                        }

                        tempString += '<li class="min">\
                                            <a href="' + curItem.href + '" class="imgWrap">\
                                                <img src="' + curItem.src + '" height="153" width="180" alt="">\
                                            </a>\
                                            <div class="desription">\
                                                <a href="' + curItem.href + '">' + curItem.title + '</a>\
                                                ' + features + '<div class="price">\
                                                    <dl>' + curItem.price + '</dl>\
                                                    <a href="' + curItem.buyhref + '" class="basketBut">' + curItem.buytext + '</a>\
                                                </div>\
                                            </div>\
                                        </li>'
                    }

                    newItems = $( tempString );

                    items.each( function(){
                        var cur = $( this );

                        cur.addClass('min');
                        cur.stop( false, false ).fadeOut( 300 );
                    } );

                    setTimeout( function(){
                        items.remove();
                        gallery.append( newItems );
                        gallery.height( 'auto' );
                        gallery.height( gallery.height() );

                        items = gallery.find( 'li' );

                        items.each( function(){
                            var cur = $( this );

                            cur.css( { display: 'none' } );
                            cur.fadeIn();
                            cur.removeClass('min');
                        } );
                    },310 )



                },
                error: function(XMLHttpRequest){
                    if(XMLHttpRequest.statusText!="abort"){
                        alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                    }
                }
            } );
        }

    };
/*
* /Paginator
* */