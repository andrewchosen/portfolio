// ›
$('document').ready(function(){
	$('li').hover(function(){
		$(this).find('div').slideToggle(300);
	});
});