$(function(){ //스크립트 실행 준비해
	$('.appBarBtn').on({  // 햄버거버튼 클릭했을때...click 이벤트 실행해
		click:	function(){ 
			$('.bar').toggleClass('addAppbar');  //style.css에 있는거 연결, 닫힘 열리게, 열림 닫히게 toggle 실행
		}
	})
});