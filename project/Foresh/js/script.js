jQuery(document).ready(function(){
	//인트로
	$('#intro').delay(2500).fadeOut(500);
	
	//메인 슬라이드
	var visual=$('#slide_img_wrap1 ul li');
	var button=$('.slide_num>ul>li');
	var leftBtn=$('#btnImg .prev');
	var rightBtn=$('#btnImg .next');
	var current=0;
	var setIntervalId;

	function move(tg, start, end){  //매개 변수 tg, start, end를 만든다.
		tg.css('left',start).stop().animate({left: end},500);
	}
	function timer(){ //사용자 정의함수
		setIntervalId=setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev, 0, '-100%'); //target은 prev
			pn.removeClass('on');
			current++; //1씩 증가
			if(current==visual.size()){current=0;}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next, '100%', 0)
			pnn.addClass('on');
		},3000);
	}
	timer();
	$('#slide_img_wrap1').on({mouseover:function(){
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer();
	}
	});
	button.click(function(){
		var tg=$(this);
		var i=tg.index();

		button.removeClass('on');
		tg.addClass('on');
		move1(i);

	});
	function move1(i){
		if(current==i){return}
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'},500);
		nextEl.css({left:'100%'}).stop().animate({left:0},500);

		current=i;
	}

	rightBtn.click(function(){
		var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('on');
			current++; //1씩 증가
			if(current==visual.size()){current=0;}
			var next=visual.eq(current);  // 최근 순번일때
			var pnn=button.eq(current);
			move(next, '100%', 0)
			pnn.addClass('on');

	});

	leftBtn.click(function(){
		var prev=visual.eq(current)
			var pn=button.eq(current);
			move(prev, 0, '100%');
			pn.removeClass('on');
			current--; //1씩 감소
			if(current==-visual.size()){current=0;}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next, '-100%', 0)
			pnn.addClass('on');
	});
	//탭메뉴 이전 다음 버튼
	var visual1=$('#one .cont li');
	var leftBtn1=$('.btn .prev');
	var rightBtn1=$('.btn .next');
	var current1=0;
	function move2(tg, start, end){  //매개 변수 tg, start, end를 만든다.
		tg.css('left',start).stop().animate({left: end},500);
	}
	rightBtn1.click(function(){
		var prev=visual1.eq(current1);
			move2(prev, 0, '-100%');
			current1++; //1씩 증가
			if(current1==visual1.size()){current1=0;}
			var next=visual1.eq(current1);
			move2(next, '100%', 0)

	});

	leftBtn1.click(function(){
		var prev=visual1.eq(current1)
			move2(prev, 0, '100%');
			current1--; //1씩 감소
			if(current1==-visual1.size()){current1=0;}
			var next=visual1.eq(current1);
			move2(next, '-100%', 0)
	});
	
	var visual2=$('#two .cont li');
	var leftBtn2=$('.btn .prev');
	var rightBtn2=$('.btn .next');
	var current2=0;
	function move3(tg, start, end){  //매개 변수 tg, start, end를 만든다.
		tg.css('left',start).stop().animate({left: end},500);
	}
	rightBtn2.click(function(){
		var prev=visual2.eq(current2);
			move3(prev, 0, '-100%');
			current2++; //1씩 증가
			if(current2==visual2.size()){current2=0;}
			var next=visual2.eq(current2);
			move3(next, '100%', 0)

	});

	leftBtn2.click(function(){
		var prev=visual2.eq(current2)
			move3(prev, 0, '100%');
			current2--; //1씩 감소
			if(current2==-visual2.size()){current2=0;}
			var next=visual2.eq(current2);
			move3(next, '-100%', 0)
	});
	
	var visual3=$('#three .cont li');
	var leftBtn3=$('.btn .prev');
	var rightBtn3=$('.btn .next');
	var current3=0;
	function move4(tg, start, end){  //매개 변수 tg, start, end를 만든다.
		tg.css('left',start).stop().animate({left: end},500);
	}
	rightBtn3.click(function(){
		var prev=visual3.eq(current3);
			move4(prev, 0, '-100%');
			current3++; //1씩 증가
			if(current3==visual3.size()){current3=0;}
			var next=visual3.eq(current3);
			move4(next, '100%', 0)

	});

	leftBtn3.click(function(){
		var prev=visual3.eq(current3)
			move4(prev, 0, '100%');
			current3--; //1씩 감소
			if(current3==-visual3.size()){current3=0;}
			var next=visual3.eq(current3);
			move4(next, '-100%', 0)
	});
	//컬렉션 슬라이드
	var visual4=$('#cont2_img ul li');
	var current4=0;
	var setIntervalIdd;

	function move5(tg, start, end){  //매개 변수 tg, start, end를 만든다.
		tg.css('left',start).stop().animate({left: end},700);
	}
	function timer1(){ //사용자 정의함수
		setIntervalIdd=setInterval(function(){
			var prev=visual4.eq(current4);
			move5(prev, 0, '-100%');
			current4++; //1씩 증가
			if(current4==visual4.size()){current4=0;}
			var next=visual4.eq(current4);
			move5(next, '100%', 0)
		},3500);
	}
	timer1();
	// 스와이퍼
	var swiper=0;
    $(window).on("load",function(){
	        swiper = new Swiper('.swiper-container',{
			slidesPerView: 2.5,
			spaceBetween: 40,
			freeMode: false,
	    });
    });
});
