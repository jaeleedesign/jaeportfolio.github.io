$(function(){  //스크립트 실행 준비해~

	$('.appBarBtn').on({  // 햄버거버튼을 클릭했을때 ... click이벤트 실행해~
		click:	function(){ 
			$('.bar').toggleClass('addAppbar');  //style.css에 있는거 연결 닫혀있다면 열리도록...열려있다면 닫히도록하는toggle실행...
		}
	})

});