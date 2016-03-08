// Start
$('document').ready(function(){

	// Portfolio item information sliding effect
	$('li').hover(function(){
		$(this).find('div').stop(true, true).slideToggle(300);
	});


});