$(function(){
    $(".niceRadio").each( function() {
            changeRadioStart(jQuery(this));
    } );
    new Page();
    $( '.new' ).each( function(){
        new New( $( this ) );
    } );
    $( '.filter' ).each( function(){
        new Filter( $( this ) );
    } );
    $( '.plus-minus' ).each( function(){
        new PlusMinus( $( this ) );
    } );
    if ( $('.filter__sub__page') ) {
        new Paginator( $('.filter__sub__page') );
    }
} );
var Page = function(){
    this.window = $( window );
    this.header = $( '.header' );
    this.readAbout = $( '.read_about' );
    this.content = $( '.content' );

    this.init();
};
    Page.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.controls();
                },
                controls: function(){
                    self.window.on( {
                        'scroll': function(){
                            self.core.setHeader();
                        }
                    } );
                    self.readAbout.on( {
                        'click': function (){
                            $( 'body, html').animate( { scrollTop: self.content.offset().top - 90 }, 300 );

                            return false
                        }
                    } );
                },
                setHeader: function(){
                    var curHeaderTop = self.window.scrollTop(),
                        maxScroll = 107;

                    if( $( 'body' ).hasClass( 'index' ) ||  $( 'body' ).hasClass( 'robinson' ) ){
                        maxScroll = 109;
                    } 

                    if( curHeaderTop > maxScroll ) {
                        curHeaderTop = maxScroll;
                    }

                    self.header.css( { top: -curHeaderTop } );
                }
            };
        }
    };
var New = function( obj ){
    this.obj = obj;
    this.refresh = this.obj.find( '.refresh' );
    this.request = new XMLHttpRequest();
    this.php = this.obj.attr( 'data-php' );

    this.init();
};
    New.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.controls();
                },
                controls: function(){
                    self.refresh.on( {
                        'click': function(){
                            self.core.loadContent();
                            return false;
                        }
                    } );
                },
                loadContent: function(){
                    self.obj.find( 'ul').height( self.obj.find( 'ul').height() );
                    self.obj.find( 'li' ).stop( true, false ).fadeOut( 300, function(){
                        $( this ).remove();
                    } );
                    self.request.abort();
                    self.request = $.ajax( {
                        url: self.php,
                        data: {
                            type: self.obj.attr( 'data-type' )
                        },
                        dataType: 'html',
                        timeout: 20000,
                        type: "GET",
                        success: function( msg ){
                            setTimeout( function(){
                                var newContent = $( msg );



                                self.obj.find( 'ul').append( newContent );
                                self.obj.find( 'ul').css( {
                                    height: 'auto'
                                } );
                                newContent.css( {
                                    display: 'none'
                                } );
                                newContent.fadeIn( 300 );
                            }, 300 );
                        },
                        error: function(XMLHttpRequest){
                            if(XMLHttpRequest.statusText!="abort"){
                                alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                            }
                        }
                    } );
                }
            };
        }
    };
var Filter = function( obj ){
    this.obj = obj;
    this.sliders = this.obj.find( '.filter__slider' );
    this.content = $( '.filter__content' );
    this.request = new XMLHttpRequest();
    this.php = this.obj.attr( 'action' );
    this.from = $( '#price__from' );
    this.to = $( '#price__to' );
    this.subFilter = $( '.filter__sub' );

    this.init();
};
    Filter.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.addSlider();

                    self.core.controls();
                },
                controls: function(){
                    self.from.on( {
                        'keydown': function( event ) {

                            if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                (event.keyCode == 65 && event.ctrlKey === true) ||
                                (event.keyCode >= 35 && event.keyCode <= 39)) {
                                return true;
                            } else {
                                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                                    event.preventDefault();
                                }
                            }
                        },
                        'keyup': function(){
                            self.core.setValues();
                        }
                    } );
                    self.to.on( {
                        'keydown': function( event ) {
                            if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                (event.keyCode == 65 && event.ctrlKey === true) ||
                                (event.keyCode >= 35 && event.keyCode <= 39)) {
                                return true;
                            } else {
                                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                                    event.preventDefault();
                                }
                            }
                        },
                        'keyup': function(){
                            self.core.setValues();
                        }
                    } );
                    self.obj.find( 'input').on( {
                        'change': function(){
                            self.core.loadContent();
                        }
                    } );
                    self.obj.find( 'select').on( {
                        'change': function(){
                            self.core.loadContent();
                        }
                    } );
                    self.subFilter.find( 'select').on( {
                        'change': function(){
                            self.core.loadContent();
                        }
                    } );
                    self.subFilter.find( 'input').on( {
                        'change': function(){
                            self.core.loadContent();
                        }
                    } );
                },
                setValues: function(){
                    if( self.from.val() == '' ) self.from.val( 0 );
                    if( self.to.val() == '' ) self.to.val( 0 );
                    if( parseInt( self.to.val() ) <  parseInt( self.from.val() ) ) self.to.val( self.from.val() );
                    self.sliders.slider( "values", [ parseInt( self.from.val() ), parseInt( self.to.val() ) ] );
                },
                addSlider: function(){
                    self.sliders.slider({
                        range: true,
                        min: self.sliders.attr( 'data-min' ),
                        max: self.sliders.attr( 'data-max' ),
                        values: [ parseInt( self.from.val() ), parseInt( self.to.val() ) ],
                        slide: function( event, ui ) {
                            self.from.val( ui.values[ 0 ] );
                            self.to.val( ui.values[ 1 ] );
                        },
                        change: function(){
                            self.core.loadContent();
                        }
                    });
                },
                loadContent: function(){
                    var data = self.obj.serialize();

                    if( self.subFilter.length ){
                        data = data + '&' + self.subFilter.serialize();
                    }

                    console.log( data )

                    self.content.height( self.content.height() );
                    self.content.find( '> *' ).stop( true, false ).fadeOut( 300, function(){
                        $( this ).remove();
                    } );
                    self.request.abort();
                    self.request = $.ajax( {
                        url: self.php,
                        data: data,
                        dataType: 'html',
                        timeout: 20000,
                        type: "GET",
                        success: function( msg ){
                            setTimeout( function(){
                                var newContent = $( msg );

                                self.content.append( newContent );
                                self.content.css( {
                                    height: 'auto'
                                } );
                                newContent.css( {
                                    display: 'none'
                                } );
                                newContent.fadeIn( 300 );
                            }, 300 );
                        },
                        error: function(XMLHttpRequest){
                            if(XMLHttpRequest.statusText!="abort"){
                                alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                            }
                        }
                    } );
                }
            };
        }
    };
var PlusMinus = function( obj ){
    this.obj = obj;
    this.plus = this.obj.find( '.plus-minus__plus' );
    this.text = this.obj.find( 'input[type="text"]' );
    this.minus = this.obj.find( '.plus-minus__minus' );

    this.init();
};
    PlusMinus.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.controls();
                },
                controls: function(){
                    self.plus.on( {
                        'click': function(){
                            self.text.val( parseInt( self.text.val() ) + 1 );
                            self.text.trigger( 'change' );
                            return false;
                        }
                    } );
                    self.minus.on( {
                        'click': function(){
                            if( parseInt( self.text.val() ) ){
                                self.text.val( parseInt( self.text.val() ) - 1 );
                                self.text.trigger( 'change' );
                            }
                            return false;
                        }
                    } );
                    self.text.on( {
                        'keydown': function( event ) {

                            if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                                (event.keyCode == 65 && event.ctrlKey === true) ||
                                (event.keyCode >= 35 && event.keyCode <= 39)) {
                                return true;
                            } else {
                                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                                    event.preventDefault();
                                }
                            }
                        },
                        'keyup': function(){
                            if( self.text.val() == '' ){
                                self.text.val( 0 )
                            }
                        }
                    } );
                }
            };
        }
    };
var Paginator = function( obj ){
    this.obj = obj;
    this.input = $( '.filter__sub__page-input' );

    this.init();
};
    Paginator.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.controls();

                    self.core.chek();

                },
                chek: function(){
                    self.obj.find( '.prev' ).css( {
                        display: 'block'
                    } );

                    self.obj.find( '.next' ).css( {
                        display: 'block'
                    } );
                    self.obj.each( function(){
                        var curItem = $( this );

                        if( curItem.find( 'a' ).filter( '.active').parent().index() == 1 ){

                            curItem.find( '.prev' ).css( {
                                display: 'none'
                            } );
                            console.log(curItem.find( '.prev').css('display'))
                        } else if( curItem.find( 'a' ).filter( '.active').parent().index() == curItem.find( 'a').length - 2 ){
                            curItem.find( '.next' ).css( {
                                display: 'none'
                            } );
                        }

                    } );
                },
                controls: function(){
                    self.obj.find( 'a' ).on( {
                        'click': function(){
                            var curItem = $( this );

                            if( !curItem.hasClass('active') ){
                                if( curItem.hasClass('prev') ){
                                    var curIndex = self.obj.eq( 0 ).find( '.active').parent().prev().index();

                                    self.obj.find( 'a' ).removeClass( 'active' );
                                    self.obj.each( function(){
                                        var curObj = $( this );

                                        curObj.find( 'li').eq( curIndex ).find( 'a' ).addClass( 'active' );
                                    } );
                                    self.input.val(curIndex);
                                } else if( curItem.hasClass('next') ){
                                    var curIndex = self.obj.eq( 0 ).find( '.active').parent().next().index();

                                    self.obj.find( 'a' ).removeClass( 'active' );
                                    self.obj.each( function(){
                                        var curObj = $( this );

                                        curObj.find( 'li').eq( curIndex ).find( 'a' ).addClass( 'active' );
                                    } );
                                    self.input.val(curIndex);
                                } else {
                                    var curIndex = curItem.parent().index();

                                    self.obj.find( 'a' ).removeClass( 'active' );
                                    self.obj.each( function(){
                                        var curObj = $( this );

                                        curObj.find( 'li').eq( curIndex ).find( 'a' ).addClass( 'active' );
                                    } );
                                    self.input.val(curIndex);
                                }
                                self.core.chek();
                                self.input.trigger( 'change' );
                            }
                            return false;
                        }
                    } );
                }
            };
        }
    };


function changeRadio(el)
    /*
     функция смены вида и значения radio при клике на контейнер
     */
{

    var el = el,
        input = el.find("input").eq(0);
    var nm=input.attr("name");

    jQuery(".niceRadio input").each(

        function() {

            if(jQuery(this).attr("name")==nm)
            {
                jQuery(this).parent().removeClass("radioChecked");
            }


        });


    if(el.attr("class").indexOf("niceRadioDisabled")==-1)
    {
        el.addClass("radioChecked");
        input.attr("checked", true);
    }

    return true;
}

function changeVisualRadio(input)
{
    /*
     меняем вид radio при смене значения
     */
    var wrapInput = input.parent();
    var nm=input.attr("name");

    jQuery(".niceRadio input").each(

        function() {

            if(jQuery(this).attr("name")==nm)
            {
                jQuery(this).parent().removeClass("radioChecked");
            }


        });

    if(input.attr("checked"))
    {
        wrapInput.addClass("radioChecked");
    }
}

function changeRadioStart(el)
    /*
     новый контрол выглядит так <span class="niceRadio"><input type="radio" name="[name radio]" id="[id radio]" [checked="checked"] /></span>
     новый контрол получает теже name, id и другие атрибуты что и были у обычного
     */
{

    try
    {
        var el = el,
            radioName = el.attr("name"),
            radioId = el.attr("id"),
            radioChecked = el.attr("checked"),
            radioDisabled = el.attr("disabled"),
            radioTab = el.attr("tabindex"),
            radioValue = el.attr("value");
        if(radioChecked)
            el.after("<span class='niceRadio radioChecked'>"+
                "<input type='radio'"+
                "name='"+radioName+"'"+
                "id='"+radioId+"'"+
                "checked='"+radioChecked+"'"+
                "tabindex='"+radioTab+"'"+
                "value='"+radioValue+"' /></span>");
        else
            el.after("<span class='niceRadio'>"+
                "<input type='radio'"+
                "name='"+radioName+"'"+
                "id='"+radioId+"'"+
                "tabindex='"+radioTab+"'"+
                "value='"+radioValue+"' /></span>");

        /* если контрол disabled - добавляем соответсвующий класс для нужного вида и добавляем атрибут disabled для вложенного radio */
        if(radioDisabled)
        {
            el.next().addClass("niceRadioDisabled");
            el.next().find("input").eq(0).attr("disabled","disabled");
        }

        /* цепляем обработчики стилизированным radio */
        el.next().bind("mousedown", function(e) { changeRadio(jQuery(this)) });
        if(jQuery.browser.msie)	el.next().find("input").eq(0).bind("click", function(e) { changeVisualRadio(jQuery(this)) });
        else el.next().find("input").eq(0).bind("change", function(e) { changeVisualRadio(jQuery(this)) });
        el.remove();
    }
    catch(e)
    {
        // если ошибка, ничего не делаем
    }

    return true;
}
