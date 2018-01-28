$(document).ready(function() {

 
//    Image nav  
    
$('.nav_all').click(function(event) {
  $('.nav-block').removeClass('selected');
  $('.nav-block').addClass('unselected');
    
  $('.nav_all').removeClass('unselected');
  $('.nav_all').addClass('selected');
    
  $('.item').removeClass('hide');
  $('.item').addClass('show');
    
    $('.item').removeClass('full');  
  $('.item').addClass('thumbnail');
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
    
    $('.item').removeClass('thumbnail'); 
  $('.item').addClass('full');
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
    
    $('.item').removeClass('thumbnail'); 
  $('.item').addClass('full');
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
    
    $('.item').removeClass('thumbnail'); 
  $('.item').addClass('full');
});
    

    
//    Sizing
    
$('.nav_thumbnail').click(function(event){
  $('.item').removeClass('col1of2');  
  $('.item').addClass('col1of4');
});
    
$('.nav_full').click(function(event){
  $('.item').removeClass('thumbnail');  
  $('.item').addClass('full');
});

$('.nav_middle').click(function(event){
  $('.item').removeClass('thumbnail full');
});


//    Image hover

$(".pic").hover(
  function(){
  		$(".info", this).css("display", "block");
	}, function(){
  		$(".info", this).css("display", "none");
});












  });
