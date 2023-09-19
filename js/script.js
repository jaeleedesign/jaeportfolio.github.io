// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


/* scroll computer img */
$(function(){
	//컴퓨터이미지 호버하면 자동 스크롤
	$('.css_img .main_page').hover(function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:ah-imgh},5000);

	},function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:0},5000);
	});
	
});

$(function(){
	//컴퓨터이미지 호버하면 자동 스크롤
	$('.css_img2 .tablet_page').hover(function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:ah-imgh},5000);

	},function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:0},5000);
	});
	
});

$(function(){
	//컴퓨터이미지 호버하면 자동 스크롤
	$('.css_img3 .mobile_page').hover(function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:ah-imgh},5000);

	},function(){
		var ah = $(this).find('a').innerHeight();
		var img = $(this).find('img');
		var imgh = $(this).find('img').innerHeight();

		img.stop().animate({top:0},5000);
	});
	
});

