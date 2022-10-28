


//top버튼
$(function(){
$(window).scroll(function(){ 
  if( $(this).scrollTop()>0){ 
      $(".top_btn").fadeIn(); 
  }else{
      $(".top_btn").fadeOut(); 
  }
});

$(".top_btn").click(function(){
    $('html,body').animate({'scrollTop':0},500,'easeInCubic');
});
});


/*메인메뉴 gnb*/
/*
$(function(){
	$("#gnb").mouseover(function(){
		$("#header").addClass("on");
	}).mouseleave(function(){
		$("#header").removeClass("on");
	});
	$('.bg').mouseover(function(){
		$('#header').addClass('on');
	});
	$('.bg').mouseout(function(){
		$('#header').removeClass('on');
	});
});
*/

//레이어팝업(사이트맵) 제이쿼리
function show_info(deptCd){
    $('body').css({'overflow':'hidden'});  
    $('.mask').css({'width':'100%','height':'100%'});
    $('.mask').fadeIn(100);      
    $('.mask').fadeTo("slow",0.85);
    $("#dept_"+deptCd).addClass(" view");
}
function hide_info(deptCd){
    $('body').css({'overflow':'auto'});  
    $(".mask").hide();  
    $("#dept_"+deptCd).removeClass(" view"); 
}

$(document).ready(function(){
//검은 막을 눌렀을 때
$('.mask').click(function () {  
    $(".mask").hide(); 
    $('body').css({'overflow':'auto'});  
    $(".deptTable").removeClass(" view"); 
});

$('.sitemap_con a').click(function () {  
    $(".mask").hide(); 
    $('body').css({'overflow':'auto'});  
    $(".deptTable").removeClass(" view"); 
});
});
//레이어팝업(사이트맵) 제이쿼리

