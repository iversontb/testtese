$(function(){
    new LargeGallery($('.largeGallery'));

    $('.showLiteBox').click( function(){
        $('.zoom').eq( $( '.preview li.active' ).index() ).trigger('click');
        return false;
    });
});

/* LargeGallery
 *
 *
 * */
var LargeGallery = function(obj){
    this.obj = obj;
    this.elems = {
        links: this.obj.find('.preview a')
    };
    this.move = false;

    this.init();
};
    LargeGallery.prototype = {
        init: function(){
            var self = this;

            self.mainConteiner = $('<div class="largeGallery__main"></div>');
            self.obj.prepend(self.mainConteiner);

            self.loadImages();
        },
        controls: function(){
            var self = this,
                links = self.elems.links;

            $('.preview__next').on( 'click', function(){
                if( !self.move ){
                    self.move = true;

                    var viewWidth = $('.preview').width(),
                        items = $('.preview').find('li'),
                        itemsWidth = (items.length * 180) - 20,
                        left =  items.eq(0).position().left,
                        delta = viewWidth - (itemsWidth - (-left)),
                        distance = -180;

                    if ( delta > -160 ){
                        distance = delta - 2;
                    }
                    items.each( function(){
                        var curElem = $( this );

                        curElem.animate({ left: curElem.position().left + distance }, 300, function(){
                            self.move = false;
                        });
                    } );
                }
            } );
            $('.preview__prev').on( 'click', function(){
                if( !self.move ){
                    self.move = true;

                    var viewWidth = $('.preview').width(),
                        items = $('.preview').find('li'),
                        left =  items.eq(0).position().left,
                        distance = -180;

                    if ( left > -160 ){
                        distance = left;
                    }
                    items.each( function(){
                        var curElem = $( this );

                        curElem.animate({ left: curElem.position().left - distance }, 300, function(){
                            self.move = false;
                        });
                    } );
                }
            } );
            $('.preview__down').on( 'click', function(){
                if( !self.move ){
                    self.move = true;

                    var viewHeight = $('.preview').height(),
                        items = $('.preview').find('li'),
                        itemsHeight = (items.length * 100) - 12,
                        top =  items.eq(0).position().top,
                        delta = viewHeight - (itemsHeight - (-top)),
                        distance = -100;

                    if ( delta > -88 ){
                        distance = delta - 2;
                    }
                    items.each( function(){
                        var curElem = $( this );

                        curElem.animate({ top: curElem.position().top + distance }, 300, function(){
                            self.move = false;
                        });
                    } );
                }
            } );
            $('.preview__up').on( 'click', function(){
                if( !self.move ){
                    self.move = true;

                    var viewHeight = $('.preview').height(),
                        items = $('.preview').find('li'),
                        top =  items.eq(0).position().top,
                        distance = -100;

                    if ( top > -88 ){
                        distance = top;
                    }
                    items.each( function(){
                        var curElem = $( this );

                        curElem.animate({ top: curElem.position().top - distance }, 300, function(){
                            self.move = false;
                        });
                    } );
                }
            } );

            links.on('click', function(){
                var newActive = $(this).parent();

                if( !newActive.hasClass('active') && !self.move ){
                    var curActive = links.parents('.preview').find('li').filter('.active'),
                        curIndex = curActive.index(),
                        newIndex = newActive.index();

                    self.move = true;

                    curActive.removeClass( 'active' );
                    $(self.images[curIndex]).parent().fadeOut(300);
                    newActive.addClass('active');
                    $(self.images[newIndex]).parent().fadeIn(300, function(){
                        self.move = false;
                    });
                }
                return false;
            });

            $('.zoom').on('mousemove', function(e){

                var curElem = $(this),
                    x = e.pageX - curElem.offset().left,
                    y = e.pageY - curElem.offset().top,
                    img1 = curElem.find('img').eq(0),
                    img2 = curElem.find('img').eq(1),
                    maxW = img2.width(),
                    curW = img1.width(),
                    maxH = img2.height(),
                    curH = img1.height(),
                    maxTop = 0,
                    maxLeft = 0,
                    minTop = curH - maxH,
                    minLeft = curW - maxW,
                    top, left;

                left = (curW / 2) - (x / curW * maxW);
                top = (curH / 2) - (y / curH * maxH);

                if( top > maxTop ) top = maxTop;
                if( left > maxLeft ) left = maxLeft;

                if( top < minTop ) top = minTop;
                if( left < minLeft ) left = minLeft;

                img2.css({
                    left: left,
                    top: top
                });
            });

            $(window).on('resize', function(){
                self.normalView();
            });
        },
        loadImages: function(){
            var self = this,
                links = self.elems.links,
                countItems = links.length,
                counter = 0;

            self.images = [];

            links.each(function(i){
                var curUrl = $(this).attr('href');

                self.images[i] = new Image();

                $(self.images[i]).attr('data-id', i);

                self.images[i].onload = function(){
                    var curElem = this,
                        item = $('<a class="zoom" rel="lightbox[roadtrip]" href="' + curUrl + '"><img src="' + curUrl + '" height="' + curElem.height * 2 + '" width="' + curElem.width * 2 + '"></a>'),
                        id = $(curElem).attr('data-id'),
                        j;

                    $(this).attr('max-height', curElem.height);
                    $(this).attr('max-width', curElem.width);

                    item.prepend( curElem );

                    counter++;
                    if(counter == countItems){
                        for(j = 0; j < countItems; j++){
                            self.mainConteiner.append( $( self.images[j] ).parent() );
                            if( j != 0 ){
                                $( self.images[j] ).parent().css({display: 'none'});
                            }
                        }

                        self.mainConteiner.css({display: 'block'});
                        self.size = {
                            w: self.mainConteiner.width(),
                            h: self.mainConteiner.height()
                        };
                        self.obj.css({minHeight: $('.preview').height()});
                        self.normalView();
                        self.setPreview();
                        self.controls();
                    }
                };

                self.images[i].src = curUrl;
            });
        },
        setPreview: function(){
            var self = this,
                items = self.obj.find('.preview li');

            if( self.obj.hasClass('light') ){
                items.each( function(i){
                    var curElem = $(this);

                    curElem.css( {top: 100 * i } );
                } );
            } else {
                items.each( function(i){
                    var curElem = $(this);

                    curElem.css( {left: 180 * i } );
                } );
            }
        },
        normalView: function(){
            var self = this,
                countItems = self.images.length,
                i;

            self.size = {
                w: self.mainConteiner.width(),
                h: self.mainConteiner.height()
            };

            if( self.obj.hasClass('light')){

            } else {
                $('.preview').width( self.obj.width() - 40 );
            }

            for(i = 0; i < countItems; i++){
                $( self.images[i] ).parent().css({display: 'block'});

                var curItem = $(self.images[i]),
                    curParent = curItem.parent(),
                    maxW = parseInt( curItem.attr('max-width') ),
                    maxH = parseInt( curItem.attr('max-height') ),
                    activeIndex = self.elems.links.parents('.preview').find('li').filter('.active').index(),
                    size = self.size,
                    newH = 0,
                    newW = 0;

                curParent.removeAttr('style');
                curItem.removeAttr('style');

                console.log(maxW , size.w  , maxH , size.h);

                if(maxW / size.w  > maxH / size.h){
                    if(size.w <= maxW) {
                        newW = size.w;
                    } else {
                        newW = maxW;
                    }
                    curItem.width(newW);
                } else {
                    if(size.h <= maxH) {
                        newH = size.h;
                    } else {
                        newH = maxH;
                    }

                    curItem.height(newH);
                }

                if( newW == 0 ){
                    curItem.width(maxW/maxH*newH);
                }
                if( newH == 0 ){
                    curItem.height(maxH/maxW*newW);
                }

                curParent.css({
                    height: curItem.height(),
                    width: curItem.width(),
                    left: (size.w - curItem.width()) / 2,
                    top: (size.h - curItem.height()) / 2
                });

                if(i != activeIndex){
                    curParent.css({display: 'none'});
                }
            }

        }
    };
/*
 * /LargeGallery
 */




/*
 Lightbox v2.51
 by Lokesh Dhakar - http://www.lokeshdhakar.com

 For more information, visit:
 http://lokeshdhakar.com/projects/lightbox2/

 Licensed under the Creative Commons Attribution 2.5 License - http://creativecommons.org/licenses/by/2.5/
 - free for use in both personal and commercial projects
 - attribution requires leaving author name, author link, and the license info intact

 Thanks
 - Scott Upton(uptonic.com), Peter-Paul Koch(quirksmode.com), and Thomas Fuchs(mir.aculo.us) for ideas, libs, and snippets.
 - Artemy Tregubenko (arty.name) for cleanup and help in updating to latest proto-aculous in v2.05.


 Table of Contents
 =================
 LightboxOptions

 Lightbox
 - constructor
 - init
 - enable
 - build
 - start
 - changeImage
 - sizeContainer
 - showImage
 - updateNav
 - updateDetails
 - preloadNeigbhoringImages
 - enableKeyboardNav
 - disableKeyboardNav
 - keyboardAction
 - end

 options = new LightboxOptions
 lightbox = new Lightbox options
 */

(function() {
    var $, Lightbox, LightboxOptions;

    $ = jQuery;

    LightboxOptions = (function() {

        function LightboxOptions() {
            this.fileLoadingImage = 'images/loading.gif';
            this.fileCloseImage = 'images/close.png';
            this.resizeDuration = 700;
            this.fadeDuration = 500;
            this.labelImage = "Image";
            this.labelOf = "of";
        }

        return LightboxOptions;

    })();

    Lightbox = (function() {

        function Lightbox(options) {
            this.options = options;
            this.album = [];
            this.currentImageIndex = void 0;
            this.init();
        }

        Lightbox.prototype.init = function() {
            this.enable();
            return this.build();
        };

        Lightbox.prototype.enable = function() {
            var _this = this;
            return $('body').on('click', 'a[rel^=lightbox], area[rel^=lightbox]', function(e) {
                _this.start($(e.currentTarget));
                return false;
            });
        };

        Lightbox.prototype.build = function() {
            var $lightbox,
                _this = this;
            $("<div>", {
                id: 'lightboxOverlay'
            }).after($('<div/>', {
                id: 'lightbox'
            }).append($('<div/>', {
                "class": 'lb-outerContainer'
            }).append($('<div/>', {
                "class": 'lb-container'
            }).append($('<img/>', {
                "class": 'lb-image'
            }), $('<div/>', {
                "class": 'lb-nav'
            }).append($('<a/>', {
                "class": 'lb-prev'
            }), $('<a/>', {
                "class": 'lb-next'
            })), $('<div/>', {
                "class": 'lb-loader'
            }).append($('<a/>', {
                "class": 'lb-cancel'
            }).append($('<img/>', {
                src: this.options.fileLoadingImage
            }))))), $('<div/>', {
                "class": 'lb-dataContainer'
            }).append($('<div/>', {
                "class": 'lb-data'
            }).append($('<div/>', {
                "class": 'lb-details'
            }).append($('<span/>', {
                "class": 'lb-caption'
            }), $('<span/>', {
                "class": 'lb-number'
            })), $('<div/>', {
                "class": 'lb-closeContainer'
            }).append($('<a/>', {
                "class": 'lb-close'
            }).append($('<img/>', {
                src: this.options.fileCloseImage
            }))))))).appendTo($('body'));
            $('#lightboxOverlay').hide().on('click', function(e) {
                _this.end();
                return false;
            });
            $lightbox = $('#lightbox');
            $lightbox.hide().on('click', function(e) {
                if ($(e.target).attr('id') === 'lightbox') _this.end();
                return false;
            });
            $lightbox.find('.lb-outerContainer').on('click', function(e) {
                if ($(e.target).attr('id') === 'lightbox') _this.end();
                return false;
            });
            $lightbox.find('.lb-prev').on('click', function(e) {
                _this.changeImage(_this.currentImageIndex - 1);
                return false;
            });
            $lightbox.find('.lb-next').on('click', function(e) {
                _this.changeImage(_this.currentImageIndex + 1);
                return false;
            });
            $lightbox.find('.lb-loader, .lb-close').on('click', function(e) {
                _this.end();
                return false;
            });
        };

        Lightbox.prototype.start = function($link) {
            var $lightbox, $window, a, i, imageNumber, left, top, _len, _ref;
            $(window).on("resize", this.sizeOverlay);
            $('select, object, embed').css({
                visibility: "hidden"
            });
            $('#lightboxOverlay').width($(document).width()).height($(document).height()).fadeIn(this.options.fadeDuration);
            this.album = [];
            imageNumber = 0;
            if ($link.attr('rel') === 'lightbox') {
                this.album.push({
                    link: $link.attr('href'),
                    title: $link.attr('title')
                });
            } else {
                _ref = $($link.prop("tagName") + '[rel="' + $link.attr('rel') + '"]');
                for (i = 0, _len = _ref.length; i < _len; i++) {
                    a = _ref[i];
                    this.album.push({
                        link: $(a).attr('href'),
                        title: $(a).attr('title')
                    });
                    if ($(a).attr('href') === $link.attr('href')) imageNumber = i;
                }
            }
            $window = $(window);
            top = $window.scrollTop() + $window.height() / 10;
            left = $window.scrollLeft();
            $lightbox = $('#lightbox');
            $lightbox.css({
                top: top + 'px',
                left: left + 'px'
            }).fadeIn(this.options.fadeDuration);
            this.changeImage(imageNumber);
        };

        Lightbox.prototype.changeImage = function(imageNumber) {
            var $image, $lightbox, preloader,
                _this = this;
            this.disableKeyboardNav();
            $lightbox = $('#lightbox');
            $image = $lightbox.find('.lb-image');
            this.sizeOverlay();
            $('#lightboxOverlay').fadeIn(this.options.fadeDuration);
            $('.loader').fadeIn('slow');
            $lightbox.find('.lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption').hide();
            $lightbox.find('.lb-outerContainer').addClass('animating');
            preloader = new Image;
            preloader.onload = function() {
                $image.attr('src', _this.album[imageNumber].link);
                $image.width = preloader.width;
                $image.height = preloader.height;
                return _this.sizeContainer(preloader.width, preloader.height);
            };
            preloader.src = this.album[imageNumber].link;
            this.currentImageIndex = imageNumber;
        };

        Lightbox.prototype.sizeOverlay = function() {
            return $('#lightboxOverlay').width($(document).width()).height($(document).height());
        };

        Lightbox.prototype.sizeContainer = function(imageWidth, imageHeight) {
            var $container, $lightbox, $outerContainer, containerBottomPadding, containerLeftPadding, containerRightPadding, containerTopPadding, newHeight, newWidth, oldHeight, oldWidth,
                _this = this;
            $lightbox = $('#lightbox');
            $outerContainer = $lightbox.find('.lb-outerContainer');
            oldWidth = $outerContainer.outerWidth();
            oldHeight = $outerContainer.outerHeight();
            $container = $lightbox.find('.lb-container');
            containerTopPadding = parseInt($container.css('padding-top'), 10);
            containerRightPadding = parseInt($container.css('padding-right'), 10);
            containerBottomPadding = parseInt($container.css('padding-bottom'), 10);
            containerLeftPadding = parseInt($container.css('padding-left'), 10);
            newWidth = imageWidth + containerLeftPadding + containerRightPadding;
            newHeight = imageHeight + containerTopPadding + containerBottomPadding;
            if (newWidth !== oldWidth && newHeight !== oldHeight) {
                $outerContainer.animate({
                    width: newWidth,
                    height: newHeight
                }, this.options.resizeDuration, 'swing');
            } else if (newWidth !== oldWidth) {
                $outerContainer.animate({
                    width: newWidth
                }, this.options.resizeDuration, 'swing');
            } else if (newHeight !== oldHeight) {
                $outerContainer.animate({
                    height: newHeight
                }, this.options.resizeDuration, 'swing');
            }
            setTimeout(function() {
                $lightbox.find('.lb-dataContainer').width(newWidth);
                $lightbox.find('.lb-prevLink').height(newHeight);
                $lightbox.find('.lb-nextLink').height(newHeight);
                _this.showImage();
            }, this.options.resizeDuration);
        };

        Lightbox.prototype.showImage = function() {
            var $lightbox;
            $lightbox = $('#lightbox');
            $lightbox.find('.lb-loader').hide();
            $lightbox.find('.lb-image').fadeIn('slow');
            this.updateNav();
            this.updateDetails();
            this.preloadNeighboringImages();
            this.enableKeyboardNav();
        };

        Lightbox.prototype.updateNav = function() {
            var $lightbox;
            $lightbox = $('#lightbox');
            $lightbox.find('.lb-nav').show();
            if (this.currentImageIndex > 0) $lightbox.find('.lb-prev').show();
            if (this.currentImageIndex < this.album.length - 1) {
                $lightbox.find('.lb-next').show();
            }
        };

        Lightbox.prototype.updateDetails = function() {
            var $lightbox,
                _this = this;
            $lightbox = $('#lightbox');
            if (typeof this.album[this.currentImageIndex].title !== 'undefined' && this.album[this.currentImageIndex].title !== "") {
                $lightbox.find('.lb-caption').html(this.album[this.currentImageIndex].title).fadeIn('fast');
            }
            if (this.album.length > 1) {
                $lightbox.find('.lb-number').html(this.options.labelImage + ' ' + (this.currentImageIndex + 1) + ' ' + this.options.labelOf + '  ' + this.album.length).fadeIn('fast');
            } else {
                $lightbox.find('.lb-number').hide();
            }
            $lightbox.find('.lb-outerContainer').removeClass('animating');
            $lightbox.find('.lb-dataContainer').fadeIn(this.resizeDuration, function() {
                return _this.sizeOverlay();
            });
        };

        Lightbox.prototype.preloadNeighboringImages = function() {
            var preloadNext, preloadPrev;
            if (this.album.length > this.currentImageIndex + 1) {
                preloadNext = new Image;
                preloadNext.src = this.album[this.currentImageIndex + 1].link;
            }
            if (this.currentImageIndex > 0) {
                preloadPrev = new Image;
                preloadPrev.src = this.album[this.currentImageIndex - 1].link;
            }
        };

        Lightbox.prototype.enableKeyboardNav = function() {
            $(document).on('keyup.keyboard', $.proxy(this.keyboardAction, this));
        };

        Lightbox.prototype.disableKeyboardNav = function() {
            $(document).off('.keyboard');
        };

        Lightbox.prototype.keyboardAction = function(event) {
            var KEYCODE_ESC, KEYCODE_LEFTARROW, KEYCODE_RIGHTARROW, key, keycode;
            KEYCODE_ESC = 27;
            KEYCODE_LEFTARROW = 37;
            KEYCODE_RIGHTARROW = 39;
            keycode = event.keyCode;
            key = String.fromCharCode(keycode).toLowerCase();
            if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
                this.end();
            } else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
                if (this.currentImageIndex !== 0) {
                    this.changeImage(this.currentImageIndex - 1);
                }
            } else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
                if (this.currentImageIndex !== this.album.length - 1) {
                    this.changeImage(this.currentImageIndex + 1);
                }
            }
        };

        Lightbox.prototype.end = function() {
            this.disableKeyboardNav();
            $(window).off("resize", this.sizeOverlay);
            $('#lightbox').fadeOut(this.options.fadeDuration);
            $('#lightboxOverlay').fadeOut(this.options.fadeDuration);
            return $('select, object, embed').css({
                visibility: "visible"
            });
        };

        return Lightbox;

    })();

    $(function() {
        var lightbox, options;
        options = new LightboxOptions;
        return lightbox = new Lightbox(options);
    });

}).call(this);
