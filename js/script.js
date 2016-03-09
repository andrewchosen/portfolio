/**
 * ON PAGE LOAD
 **/

$('document').ready(function(){

	if($('#main').width() >= 768){
		$('li').find('div').hide();
		// Portfolio item information sliding effect
		$('li').hover(function(){
			$(this).find('div').stop(true, true).slideToggle(300);
		});
	}

});