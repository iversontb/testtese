$(function(){
    $( '.dates').each( function(){
        new Dates( $( this ) );
    } );
    if( $( '.order' ).length ){
        new Order();
    }
    new PageUp();

    $( '.filter' ).each( function(){
        new Filter( $( this ) );
    } );

    if( $( '.map' ).length ){
        initMap();
    }

    function initMap(){

        var map,
            map__wrap = $( '.map__wrap' );

        function initialize() {
            var mapOptions = {
                zoom: 12,
                center: new google.maps.LatLng( map__wrap.attr( 'data-lat' ), map__wrap.attr( 'data-lang' ) )
            };
            map = new google.maps.Map(document.getElementById( 'map' ),
                mapOptions);

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(map__wrap.attr( 'data-lat' ), map__wrap.attr( 'data-lang' )),
                map: map,
                title: map__wrap.attr( 'data-title' )
            });

            $( '.card__map' ).on( {
                'click': function(){
                    $( 'html, body' ).animate( {
                        scrollTop: $( '.map' ).offset().top
                    }, 300 );
                    return false
                }
            } );

        }

        google.maps.event.addDomListener( window, 'load', initialize );


    }
} );
var Dates = function( obj ){
    this.obj = obj;
    this.start = this.obj.find( '.dates__start' );
    this.finish = this.obj.find( '.dates__finish' );
    this.countDays = this.obj.find( '.dates__count span' );
    this.price = this.obj.find( '.dates__price-item' );
    this.line = this.obj.find( '.dates__line' );

    this.init();
};
    Dates.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.getRanges();
                    self.core.addDatePicker();
                    self.core.addScroll();
                },
                addScroll: function(){
                    if( self.line.length ){
                        self.scroll = new IScroll('#scroll', {
                            scrollX: true,
                            scrollY: false,
                            mouseWheel: false,
                            scrollbars: 'custom',
                            probeType: 3,
                            interactiveScrollbars: true
                        });
                    }
                },
                getRanges: function(){
                    var tempArr = self.obj.attr( 'data-busy' ).split( '::' ),
                        i;

                    self.ranges = [];

                    for( i = 0; i < tempArr.length; i++ ){
                        var start = new Date( $.trim( tempArr[ i ].split( '-' )[ 0 ] )),
                            finish = new Date( $.trim( tempArr[ i ].split( '-' )[ 1 ] )),
                            counter = 0,
                            curDate = start;

                        self.ranges[ i ] = [];
                        while ( curDate <= finish ){
                            self.ranges[ i ][ counter ]= {
                                year: curDate.getFullYear(),
                                month: curDate.getMonth(),
                                day: curDate.getDate()
                            };
                            counter ++;
                            curDate = new Date(curDate.getTime() + (24 * 60 * 60 * 1000));
                        }
                    }

                },
                checkRanges: function( curData ){
                    var curItem;

                    setTimeout( function(){
                        var days = $( '.ui-datepicker-calendar tbody a.ui-state-default'),
                            i, j;

                        days.each( function(){
                            curItem = $( this );
                            for( i = 0; i < self.ranges.length; i++ ){
                                var curRange = self.ranges[ i ];

                                for( j = 0; j < curRange.length; j++ ){
                                    var curDay = curRange[ j ];

                                    if( curDay.year == curData.selectedYear &&  curDay.month == curData.selectedMonth){
                                        if( curDay.day == curItem.text() ){
                                            curItem.parent().removeAttr( 'class' );
                                            curItem.parent().attr( 'class', 'ui-datepicker-unselectable ui-state-disabled' );
                                            curItem.parent().html( '<span class="ui-state-default">' + curItem.text() + '</span>' );
                                        }
                                    }
                                }
                            }
                        } );
                    },1 );

                },
                checkMaxDate: function( date ){
                    var i;

                    self.finish.datepicker( "option", "maxDate", null );
                    for( i = 0; i < self.ranges.length; i++ ){
                        var curRange = self.ranges[ i ],
                            curDay = new Date( curRange[ 0 ].year + '.' + ( curRange[ 0 ].month + 1 ) + '.' + curRange[ 0 ].day );

                        if( curDay > date ){
                            self.finish.datepicker( "option", "maxDate", curRange[ 0 ].day + '.' + ( curRange[ 0 ].month + 1 ) + '.' + curRange[ 0 ].year );
                        }
                    }
                },
                checkCountDays: function(){
                    if( self.countDays.length && ( self.start.val() != '' ) && ( self.finish.val() != '' ) ){
                        var start = self.start.val().split('.'),
                            finish = self.finish.val().split('.'),
                            startDate = new Date( start[ 2 ] + '.' + start[ 1 ] + '.' + start[ 0 ]),
                            finishDate = new Date( finish[ 2 ] + '.' + finish[ 1 ] + '.' + finish[ 0 ]);

                        self.countDays.text( Math.round( ( finishDate - startDate ) / 86400000 ) );
                        if( self.price.length ) {
                            self.price.text( Math.round( ( finishDate - startDate ) / 86400000 ) * self.obj.attr( 'data-price' ) );
                        }
                    }

                    self.core.checkLine();
                },
                checkLine: function(){
                    if( self.line.length && ( self.start.val() != '' ) && ( self.finish.val() != '' ) ){
                        self.line.find( 'li' ).remove(),
                        arrWeak = ['вс','пн','вт','ср','чт','пт','сб'];

                        var start = self.start.val().split('.'),
                            finish = self.finish.val().split('.'),
                            startDate = new Date( start[ 2 ] + '.' + start[ 1 ] + '.' + start[ 0 ] ),
                            finishDate = new Date( finish[ 2 ] + '.' + finish[ 1 ] + '.' + finish[ 0 ]),
                            globalStart = new Date( start[ 2 ] + '.' + start[ 1 ] + '.' + 1 ),
                            globalFinish = (new Date((new Date(finish[ 2 ] + '.' + ( parseInt( finish[ 1 ] ) + 1 ) + '.' + 1 )) - 1)),
                            curDate = globalStart,
                            newList = '',
                            parent = self.line.find( 'ul'),
                            checkCur = false,
                            i, j,
                            counter = 0;

                        while ( curDate <= globalFinish ){
                            var newList = $( '<li>' + arrWeak[ curDate.getDay() ] + '<span>' + curDate.getDate() + '</span></li>'),
                                block = newList.find( 'span' );

                            parent.append( newList );
                            counter ++;

                            for( i = 0; i < self.ranges.length; i++ ){
                                var curRange = self.ranges[ i ];

                                for( j = 0; j < curRange.length; j++ ){
                                    var curDay = curRange[ j ];

                                    if( curDay.year == curDate.getFullYear() && curDay.month == curDate.getMonth() && curDay.day == curDate.getDate() ){

                                        if( j == 0 ){
                                            block.addClass( 'dates__busy-on' );
                                        } else if( j == curRange.length - 1 ){
                                            block.addClass( 'dates__busy-of' );
                                        } else {
                                            block.addClass( 'dates__busy' );
                                        }
                                    }
                                }
                            }

                            if( startDate.getFullYear() == curDate.getFullYear() && startDate.getMonth() == curDate.getMonth() && startDate.getDate() == curDate.getDate() ){
                                checkCur = true;
                            }

                            if( checkCur && startDate <= finishDate ){
                                block.addClass( 'dates__reserve' );
                                startDate = new Date(startDate.getTime() + (24 * 60 * 60 * 1000));
                            }

                            curDate = new Date( curDate.getTime() + (24 * 60 * 60 * 1000) );
                        }

                        self.line.find( 'ul').width( ( counter * 29 ) - 1 );

                        self.scroll.refresh();
                    }
                },
                addDatePicker: function(){
                    $.datepicker.regional['ru'] = {
                        closeText: 'Закрыть',
                        prevText: '&#x3c;Пред',
                        nextText: 'След&#x3e;',
                        currentText: 'Сегодня',
                        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                            'Июл','Авг','Сен','Окт','Ноя','Дек'],
                        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                        weekHeader: 'Не',
                        dateFormat: 'dd.mm.yy',
                        firstDay: 1,
                        isRTL: false,
                        showMonthAfterYear: false,
                        yearSuffix: ''};
                    $.datepicker.setDefaults($.datepicker.regional['ru']);

                    self.start.datepicker( {
                        changeMonth: true,
                        minDate: 0,
                        beforeShow: function( item, data){
                            self.core.checkRanges( data );
                        },
                        onChangeMonthYear: function( year, month, data ){
                            self.core.checkRanges( data );
                        },
                        onClose: function( selectedDate, data ){
                            if(selectedDate!=''){
                                self.core.checkMaxDate( new Date( data.selectedYear + '.' + ( data.selectedMonth + 1 ) + '.' + data.selectedDay ), selectedDate );
                                self.finish.datepicker( "option", "minDate", selectedDate );
                                self.finish.val( '' );
                                self.core.checkCountDays();
                            }
                        }
                    } );
                    self.finish.datepicker( {
                        changeMonth: true,
                        minDate: 0,
                        beforeShow: function( item, data){
                            self.core.checkRanges( data );
                        },
                        onChangeMonthYear: function( yaar, month, data ){
                            self.core.checkRanges( data );
                        },
                        onClose: function( selectedDate ) {
                            if(selectedDate!=''){
                                self.core.checkCountDays();
                            }
                        }
                    } );
                },
                controls: function(){
                }
            };
        }
    };
var Order = function(){
    this.obj = $( '.order' );
    this.window = $( window );
    this.footer = $( '.footer' );

    this.init();
};
    Order.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.refresh();
                    self.core.controls();
                },
                refresh: function(){
                    var scroll = self.window.scrollTop();

                    if( scroll + self.window.height() > self.footer.offset().top ) {
                        self.obj.css( {
                            bottom: ( scroll + self.window.height() - self.footer.offset().top )
                        } );
                    } else {
                        self.obj.css( {
                            bottom: 0
                        } );
                    }
                },
                controls: function(){
                    self.window.on( {
                        'scroll': function(){
                            self.core.refresh();
                        },
                        'resize': function(){
                            self.core.refresh();
                        }
                    } );
                    self.core.refresh();
                }
            };
        }
    };
var PageUp = function(){
    this.window = $( window );

    this.init();
};
    PageUp.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.checkSize();
                },
                checkSize: function(){
                    if( self.window.height() < $( '.site' ).height() ){
                        self.upBtn = $( '<a href="#" class="up-button">В начало</a>' );
                        self.upBtn.css( { left: self.window.width()/2 - 545 } );
                        $( 'body' ).append( self.upBtn );
                        self.core.controls();
                        self.core.refresh();
                    }
                },
                refresh: function(){
                    var scroll = self.window.scrollTop();

                    if( scroll > 0 ){
                        self.upBtn.stop( true, false).fadeTo( 300, 1 );
                    } else {
                        self.upBtn.stop( true, false).fadeOut( 300, 0 );
                    }
                },
                controls: function(){
                    self.window.on( {
                        'scroll': function(){
                            self.core.refresh();
                        }
                    } );
                    self.upBtn.on( {
                        'click': function(){
                            $( 'html, body' ).animate( {
                                scrollTop: 0
                            }, 300 );

                            return false
                        }
                    } );
                }
            };
        }
    };
var Filter = function( obj ){
    this.obj = obj;
    this.content = $( '.result__content' );
    this.pager = $( '.result__pager' );
    this.pagerItems = this.pager.find( 'a' );
    this.sorting = $( '.result__filter' );
    this.sortingItems = this.sorting.find( 'li' );
    this.sliders = this.obj.find( '.filter__slider' );
    this.startDate = this.obj.find( '.filter__date-start input' );
    this.finishDate = this.obj.find( '.filter__date-finish input' );
    this.sortingInput = this.obj.find( '.filter__sorting' );
    this.pageInput = this.obj.find( '.filter__page' );
    this.request = new XMLHttpRequest();

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
                    self.core.addDatePicker();
                    self.core.addSliders();
                    self.core.setSorting();
                    self.core.controls();
                },
                setSorting: function(){
                    var active = self.sorting.find( '.active' );

                    self.sortingInput.val( active.attr( 'data-by' ) + '__' + $.trim( active.attr( 'class' ).replace('active', '') ) );
                },
                addSliders: function(){
                    self.sliders.each( function(){
                        new Slider( $( this ) );
                    } );
                },
                addDatePicker: function(){
                    $.datepicker.regional['ru'] = {
                        closeText: 'Закрыть',
                        prevText: '&#x3c;Пред',
                        nextText: 'След&#x3e;',
                        currentText: 'Сегодня',
                        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                            'Июл','Авг','Сен','Окт','Ноя','Дек'],
                        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                        weekHeader: 'Не',
                        dateFormat: 'dd.mm.yy',
                        firstDay: 1,
                        isRTL: false,
                        showMonthAfterYear: false,
                        yearSuffix: ''};
                    $.datepicker.setDefaults($.datepicker.regional['ru']);

                    self.startDate.datepicker( {
                        changeMonth: true,
                        minDate: 0,
                        onClose: function( selectedDate ) {
                            if(selectedDate!=''){
                                self.finishDate.datepicker( "option", "minDate", selectedDate );
                            }
                        }
                    } );
                    self.finishDate.datepicker( {
                        changeMonth: true,
                        minDate: 0,
                        onClose: function( selectedDate ) {
                            if(selectedDate!=''){
                                self.startDate.datepicker( "option", "maxDate", selectedDate );
                            }
                        }
                    } );
                },
                makeSorting: function( curItem ){
                    if( curItem.hasClass( 'active' ) ){
                        if( curItem.hasClass( 'up' ) ){
                            curItem.removeClass( 'up' );
                            curItem.addClass( 'down' );
                        } else {
                            curItem.removeClass( 'down' );
                            curItem.addClass( 'up' );
                        }
                    } else {
                        self.sortingItems.removeClass( 'active' );
                        curItem.addClass( 'active' );
                    }
                    self.core.setSorting();
                    self.pager.find( 'a' ).eq( 0 ).trigger( 'click' );
                },
                loadContent: function(){
                    self.request.abort();
                    self.request = $.ajax( {
                        url: self.obj.attr( 'action' ),
                        data: self.obj.serialize(),
                        dataType: 'json',
                        timeout: 20000,
                        type: "GET",
                        success: function( msg ){
                            self.content.height( self.content.height() );
                            self.content.find( 'li' ).fadeOut( 300 );

                            setTimeout( function(){
                                var newItems = $( msg.html );

                                newItems.css( { display: 'none' } );
                                self.content.append( newItems );
                                newItems.fadeIn( 300 );
                                self.pager.find( 'li' ).remove();

                                for( var i = 0; i < msg.pageCount; i++ ){
                                    if( ( i + 1 ) == self.pageInput.val() ){
                                        self.pager.append( '<li><a class="active" href="#">' + ( i + 1) + '</a></li>' );
                                    } else {
                                        self.pager.append( '<li><a href="#">' + ( i + 1) + '</a></li>' );
                                    }

                                }
                            }, 310 );
                        },
                        error: function(XMLHttpRequest){
                            if(XMLHttpRequest.statusText!="abort"){
                                alert("При попытке отправить сообщение произошла неизвестная ошибка. \n Попробуй еще раз через несколько минут.");
                            }
                        }
                    } );
                },
                controls: function(){
                    self.sortingItems.on( {
                        'click': function(){
                            var curItem = $( this );

                            self.core.makeSorting( curItem );

                            return false;
                        }
                    } );
                    self.pager.on( 'click', 'a', function(){
                            var curItem = $( this );

                            self.pagerItems.removeClass( 'active' );
                            curItem.addClass( 'active' );

                            self.pageInput.val( curItem.text() );

                            self.core.loadContent();

                            return false;
                        } );
                    self.obj.on( {
                        'submit': function(){
                            self.pager.find( 'a' ).eq( 0 ).trigger( 'click' );

                            return false;
                        }
                    } );
                }
            };
        }
    };
var Slider = function( obj ){
    this.obj = obj;
    this.sliderItem = this.obj.find( '.filter__slider__wrap' );
    this.counter = this.obj.find( '>span > span' );
    this.start = parseInt( this.obj.attr( 'data-start' ) );
    this.finish = parseInt( this.obj.attr( 'data-finish' ) );
    this.curent = parseInt( this.obj.attr( 'data-curent' ) );
    this.input = this.obj.find( 'input' );

    this.init();
};
    Slider.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.sliderItem.slider({
                        min: self.start,
                        max: self.finish,
                        value: self.curent,
                        slide: function( event, ui ) {
                            self.counter.text( ui.value );
                            self.input.val( ui.value );
                        }
                    });
                }
            };
        }
    };
