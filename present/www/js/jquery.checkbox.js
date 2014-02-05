$( function(){
    $( 'input[ type="checkbox" ]').each( function(){
        new NiceCheck( $( this ) )
    } );



    $('.chooseAll input[ type="checkbox" ]').on( "change",function(){

        if($(this).attr( 'checked' )){
            $(".allType .niceCheck > input").attr("checked",true);
            $(".allType .niceCheck").addClass("niceChecked");
        }else{
            $(".allType .niceCheck > input").attr("checked",false);
            $(".allType .niceCheck").removeClass("niceChecked");
        }
    });




} );

var NiceCheck = function( obj ){
    this.obj = obj;

    this.init();
};
NiceCheck.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.checkChecked = self.obj.attr("checked");
                self.checkDisabled = self.obj.attr("disabled");

                self.parent = self.obj.parent();
                self.label = self.parent.find( 'label' );
                self.label2 = self.parent.find( '.label' );

//                self.label.removeAttr( 'for' );

                self.obj.wrap( '<span class="' + self.obj.attr( 'class' ) + '"></span>' );

                self.wraper = self.obj.parent();

                self.obj.removeClass( 'niceCheck' );

                if ( self.checkChecked ) {
                    self.wraper.addClass( 'niceChecked' );
                }

                if( self.checkDisabled ) {
                    self.wraper.addClass( 'niceCheckDisabled' );
                }

                self.core.controls();
            },
            change: function(){
                if ( self.checkChecked ) {
                    self.wraper.removeClass( 'niceChecked' );
                    self.checkChecked = false;
                    self.obj.parents('.lineContainer').removeClass("active");
                    self.obj[ 0 ].checked = false;
                } else {
                    self.wraper.addClass( 'niceChecked' );
                    self.checkChecked = true;
                    self.obj.parents('.lineContainer').addClass("active");
                    self.obj[ 0 ].checked = true;
                }
                self.obj.trigger( 'change' );
            },
            controls: function(){
                self.label.on( {
                    'click': function(){
                        if ( !self.checkDisabled ) {
                            self.core.change();
                        }
                    }
                } );
                self.label2.on( {
                    'click': function(){
                        if ( !self.checkDisabled ) {
                            self.core.change();
                        }
                    }
                } );
                self.label.on( {
                    'click': function(){

                        if ( !self.checkDisabled ) {

                            self.core.change();
                        }
                    }
                } );
                self.wraper.on( {
                    'click': function(){
                        if ( !self.checkDisabled ) {
                            self.core.change();
                        }
                    }
                } );
            }
        }
    }
};



//jQuery(document).ready(function(){
//
//
//    $(".chooseAll .niceCheck").on( "click",function(){
//        console.log(5);
//        if($(this).is(":checked")){
//            console.log(1);
//        }else{
//            console.log(2);
//        }
//    });
//
////    $(".chooseAll").change(function() {
////        console.log(5);
////        if($(this).attr("checked",true))
////        {
////            console.log(1);
////            $(".allType .niceCheck > input").attr("checked",true);
////            $(".allType .niceCheck").addClass("niceChecked");
////        }
////        else
////        {
////            $(".allType .niceCheck > input").attr("checked",false);
////            $(".allType .niceCheck").removeClass("niceChecked");
////            console.log(2);
////        }
////        return;
////
////    });
//
//    jQuery(".niceCheck").each(
//        /* при загрузке страницы меняем обычные на стильные checkbox */
//        function() {
//
//            changeCheckStart(jQuery(this));
//
//        });
//
//
//
//
//
//});
//
//
//function changeCheck(el)
//    /*
//     функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, который отвечает за новый вид)
//     el - span контейнер для обычного чекбокса
//     input - чекбокс
//     */
//{
//
//    var el = el,
//        input = el.find("input").eq(0);
//
//    if(el.attr("class").indexOf("niceCheckDisabled")==-1)
//    {
//        if(!input.attr("checked")) {
//            el.addClass("niceChecked");
//
//            el.parent().addClass("active");
//            input.attr("checked", true);
//        } else {
//            el.removeClass("niceChecked");
//            input.attr("checked", false).focus();
//        }
//    }
//
//    return true;
//}
//
//function changeVisualCheck(input)
//{
//    /*
//     меняем вид чекбокса при смене значения
//     */
//    var wrapInput = input.parent();
//    if(!input.attr("checked")) {
//        wrapInput.removeClass("niceChecked");
//        wrapInput.parent().removeClass("active");
//
//    }
//    else
//    {
//
//        wrapInput.addClass("niceChecked");
//        wrapInput.parent().addClass("active");
//    }
//}
//
//function changeCheckStart(el)
//    /*
//     новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
//     новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
//     */
//{
//
//    try
//    {
//        var el = el,
//            checkName = el.attr("name"),
//            checkId = el.attr("id"),
//            checkChecked = el.attr("checked"),
//            checkDisabled = el.attr("disabled"),
//            checkTab = el.attr("tabindex"),
//            checkValue = el.attr("value");
//        if(checkChecked)
//            el.after("<span class='niceCheck niceChecked'>"+
//                "<input type='checkbox'"+
//                "name='"+checkName+"'"+
//                "id='"+checkId+"'"+
//                "checked='"+checkChecked+"'"+
//                "value='"+checkValue+"'"+
//                "tabindex='"+checkTab+"' /></span>");
//        else
//            el.after("<span class='niceCheck'>"+
//                "<input type='checkbox'"+
//                "name='"+checkName+"'"+
//                "id='"+checkId+"'"+
//                "value='"+checkValue+"'"+
//                "tabindex='"+checkTab+"' /></span>");
//
//        /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */
//        if(checkDisabled)
//        {
//            el.next().addClass("niceCheckDisabled");
//            el.parent().addClass("active");
//            el.next().find("input").eq(0).attr("disabled","disabled");
//        }
//
//        /* цепляем обработчики стилизированным checkbox */
//        el.next().bind("mousedown", function(e) { changeCheck(jQuery(this)) });
//        el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck(jQuery(this)) });
//        if(jQuery.browser.msie)
//        {
//            el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck(jQuery(this)) });
//        }
//        el.remove();
//    }
//    catch(e)
//    {
//        // если ошибка, ничего не делаем
//    }
//
//    return true;
//}
