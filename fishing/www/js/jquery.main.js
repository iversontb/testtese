jQuery(document).ready(function(){



    $( '.photoGallWrap ul a' ).lightBox();


    $( '.main .main-menu__item' ).hover(
      function () {
				var self = $( this );
				$( '.main .main-menu__item' ).children().next().css({ 'display' : 'none' });
				if ( self.children().next().css( 'display' )=="none"){
					self.children().next().fadeIn();
				}
      },
      function () {
        $( '.main .main-menu__item' ).children().next().css({ 'display' : 'none' });
      }
    );




jQuery(".niceCheck").mousedown(
/* при клике на чекбоксе меняем его вид и значение */
function() {

     changeCheck(jQuery(this));
     
});


jQuery(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
function() {
     
     changeCheckStart(jQuery(this));
     
});

  });

function changeCheck(el)
/* 
	функция смены вида и значения чекбокса
	el - span контейнер дял обычного чекбокса
	input - чекбокс
*/
{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -27px");	
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		input.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el)
/* 
	если установлен атрибут checked, меняем вид чекбокса
*/
{
var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","0 -17px");	
		}
     return true;
}

