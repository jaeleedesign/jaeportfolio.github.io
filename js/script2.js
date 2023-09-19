/* hamburger */
$(function(){
	$(".menu-toggle").on('click', function() {
		$(this).toggleClass("on");
		$('.menu-section').toggleClass("on");
		$(".toggle_nav ul").toggleClass('hidden');
	  });
});