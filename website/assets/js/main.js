$(document).ready(function() {

 
//    Image nav  
    
$('.nav_all').click(function(event) {
  $('.nav-block').removeClass('selected');
  $('.nav-block').addClass('unselected');
    
  $('.nav_all').removeClass('unselected');
  $('.nav_all').addClass('selected');
    
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});

$('.nav_ux').click(function(event) {
  $('.nav-block').removeClass('selected');
  $('.nav-block').addClass('unselected');
    
  $('.nav_ux').removeClass('unselected');
  $('.nav_ux').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ux').removeClass('hide');
  $('.item.ux').addClass('show');
});

$('.nav_digital').click(function(event) {
  $('.nav-block').removeClass('selected');
  $('.nav-block').addClass('unselected');
    
  $('.nav_digital').removeClass('unselected');
  $('.nav_digital').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.digital').removeClass('hide');
  $('.item.digital').addClass('show');
});

$('.nav_print').click(function(event) {
  $('.nav-block').removeClass('selected');
  $('.nav-block').addClass('unselected');
    
  $('.nav_print').removeClass('unselected');
  $('.nav_print').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.print').removeClass('hide');
  $('.item.print').addClass('show');
});


//    Image hover

$(".pic").hover(
  function(){
  		$(".info", this).css("display", "block");
	}, function(){
  		$(".info", this).css("display", "none");
});


//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});









  });
