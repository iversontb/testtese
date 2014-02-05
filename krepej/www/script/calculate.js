$(document).ready(function(){
    /**Калькулятор. Без перезагрузки страницы.*/
    
    function calculate(parentRel,change_weight){
	//var parentRel = $(this).parent().attr('rel');
       //console.log(parentRel);         
	var count= parseInt($('tr[rel=' + parentRel + '] td.calc_count input').val());
        if (!count || count<0 || change_weight) count=0;
	//console.log(count);
	var big_weight= parseInt($('tr[rel=' + parentRel + ']  td.calc_result input').val());
	if (!big_weight || big_weight<0 || !change_weight) big_weight=0;
	//console.log(big_weight);
        //console.log(count);
	var size= $('tr[rel=' + parentRel + '] td.calc_size select').val();
       //console.log(size);       
	$.getJSON("/_ajax_calculate.php",{'action':'get_weight','item_id':parentRel,'size':size},
		  function(data){
				if(data) {
				var weight=parseFloat(data.item.weight);
				if (!weight) weight=0;
				$('tr[rel=' + parentRel + '] td.calc_weight').text(weight.toFixed(2));				
				if(count>0){
				   
				    var result = count*weight;
				    if (!result) result=0;
				    $('tr[rel=' + parentRel + '] td.calc_result input').val(result.toFixed(0));
				}else{
				    
				    var result = parseInt(big_weight/weight);
				    if((big_weight%weight)) {
			
					result++;
					 $('tr[rel=' + parentRel + '] td.calc_count input').val(result);
					 calculate(parentRel,false);							
				    }
				    if (!result) result=0;
				    $('tr[rel=' + parentRel + '] td.calc_count input').val(result);
				}				
			    }
			})	
    };
    /*первичная загрузка данных*/
    $('tr').each(function(event){
	var parentRel = $(this).attr('rel');
        //console.log(parentRel);         
	var size= $('tr[rel=' + parentRel + '] td.calc_size select').val();
        $.getJSON("/_ajax_calculate.php",{'action':'get_weight','item_id':parentRel,'size':size},
		function(data){
			if(data) {
			var weight=parseFloat(data.item.weight);
			if (!weight) weight=0;
			$('tr[rel=' + parentRel + '] td.calc_weight').text(weight.toFixed(2));
                        $('tr[rel=' + parentRel + '] td.calc_result input').val(0);
		        $('tr[rel=' + parentRel + '] td.calc_count input').val(0);
			}
		})
	})
/*изменение размера*/ 
	$(".calc_size").bind('change',function(event){
	    var parentRel = $(this).parent().attr('rel');
	    calculate(parentRel,false);}
	    );
 /*изменение количества*/ 	
	$('.calc_count').bind('change',function(event){
	    var parentRel = $(this).parent().attr('rel');
	    calculate(parentRel,false);}
	    );
/*изменение массы*/ 	
	$('.calc_result').bind('change',function(event){
	    $('tr[rel=' + parentRel + '] td.calc_count input').val(0);
	    var parentRel = $(this).parent().attr('rel');
	    calculate(parentRel,true);}
	    );
/*при нажатии на картинку*/
	$('.calc_math').bind('click',function(event){
	var parentRel = $(this).parent().attr('rel');
	calculate(parentRel,false);}
	);        
	
    /*изменение размера*/    
	/*$(".calc_size").bind('change',function(event){
	var parentRel = $(this).parent().attr('rel');
       // console.log(parentRel);         
	var count= parseInt($('tr[rel=' + parentRel + '] input').val());
        if (!count) count=0;
        //console.log(count);
	var size= $('tr[rel=' + parentRel + '] td.calc_size select').val();
       //console.log(size);
	$.getJSON("/_ajax_calculate.php",{'action':'get_weight','item_id':parentRel,'size':size},
		  function(data){
				if(data) {
				var weight=parseFloat(data.item.weight);
				var result = count*weight;
				$('tr[rel=' + parentRel + '] td.calc_weight').text(weight.toFixed(2));
				$('tr[rel=' + parentRel + '] td.calc_result').text(result.toFixed(2));}
				})
		});*/
	
	
	
    /*изменение количества*/ 
        /*$('.calc_count').bind('change',function(event){
	var parentRel = $(this).parent().attr('rel');
        var count= parseInt($('tr[rel=' + parentRel + '] input').val());
        if (!count) count=0;
        var size= $('tr[rel=' + parentRel + '] td.calc_size select').val();
        weight=$('tr[rel=' + parentRel + '] td.calc_weight').text();
        if (weight){
        var result = count*weight;
        $('tr[rel=' + parentRel + '] td.calc_result').text(result.toFixed(2));
        }else{
	$.getJSON("/_ajax_calculate.php",{'action':'get_weight','item_id':parentRel,'size':size},
		  function(data){
				if(data) {
				var weight=parseFloat(data.item.weight);
				var result = count*weight;
				$('tr[rel=' + parentRel + '] td.calc_weight').text(weight.toFixed(2));
				$('tr[rel=' + parentRel + '] td.calc_result').text(result.toFixed(2));}
				})
        }
		});*/
	/*при нажатии на картинку*/
	/* $('.calc_math').bind('click',function(event){
	var parentRel = $(this).parent().attr('rel');
        var count= parseInt($('tr[rel=' + parentRel + '] input').val());
        if (!count) count=0;
        var size= $('tr[rel=' + parentRel + '] td.calc_size select').val();
        weight=$('tr[rel=' + parentRel + '] td.calc_weight').text();
        if (weight){
        var result = count*weight;
        $('tr[rel=' + parentRel + '] td.calc_result').text(result.toFixed(2));
        }else{
	$.getJSON("/_ajax_calculate.php",{'action':'get_weight','item_id':parentRel,'size':size},
		  function(data){
				if(data) {
				var weight=parseFloat(data.item.weight);
				var result = count*weight;
				$('tr[rel=' + parentRel + '] td.calc_weight').text(weight.toFixed(2));
				$('tr[rel=' + parentRel + '] td.calc_result').text(result.toFixed(2));}
				})
        }
		});*/
	
    
   });


