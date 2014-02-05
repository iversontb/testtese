$(function(){

	$(window).scroll(function() {
		 scrollElem = (window.scrollY==undefined)?document.documentElement.scrollTop:window.scrollY;
			if( scrollElem >= 170 ){
				$( '.souping' ).css( { 'display' : 'block'} );
			}
			else{
				$( '.souping' ).css( { 'display' : 'none'} );
			}
  });



	// инициализация календаря
	$( "#searchdate, #searchdateTo, #timeGo " ).datepicker();

  
	// активировать пункт даты пибытия
	 $( '.niceCheck' ).click(function () {

			if ( $( '.niceCheck' ).hasClass("niceChecked") ) {
				$( '.toDate' ).css({'opacity':'0.5'});
				$( '.toDate input' ).attr('disabled','disabled');
			}
			else{
				$( '.toDate' ).css({'opacity':'1'});
				$( '.toDate input' ).removeAttr("disabled");
			}

   });


	// инициализация нестондартного селекта
	var params = {
			changedEl: ".ticketSort select",
		}
		cuSel(params);
	var params = {
			changedEl: ".secondLine select"
		}
		cuSel(params);		
	var params = {
			changedEl: ".firstLine select"
		}
		cuSel(params);

		
	
});