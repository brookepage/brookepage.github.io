$(document).ready(function() {


// Add jQuery here
    
$('.nav_all').click(function(event) {
  $('.navbox').removeClass('selected');
  $('.navbox').addClass('unselected');
    
  $('.nav_all').removeClass('unselected');
  $('.nav_all').addClass('selected');
    
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});

$('.nav_leak').click(function(event) {
  $('.navbox').removeClass('selected');
  $('.navbox').addClass('unselected');
    
  $('.nav_leak').removeClass('unselected');
  $('.nav_leak').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.leak').removeClass('hide');
  $('.item.leak').addClass('show');
});

$('.nav_blur').click(function(event) {
  $('.navbox').removeClass('selected');
  $('.navbox').addClass('unselected');
    
  $('.nav_blur').removeClass('unselected');
  $('.nav_blur').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.blur').removeClass('hide');
  $('.item.blur').addClass('show');
});

$('.nav_polaroid').click(function(event) {
  $('.navbox').removeClass('selected');
  $('.navbox').addClass('unselected');
    
  $('.nav_polaroid').removeClass('unselected');
  $('.nav_polaroid').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.polaroid').removeClass('hide');
  $('.item.polaroid').addClass('show');
});
    
$('.nav_dbex').click(function(event) {
  $('.navbox').removeClass('selected');
  $('.navbox').addClass('unselected');
    
  $('.nav_dbex').removeClass('unselected');
  $('.nav_dbex').addClass('selected');    
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.dbex').removeClass('hide');
  $('.item.dbex').addClass('show');
});
    
$('.nav_finger').click(function(event) {
  $('.navbox').removeClass('selected');
  $('.navbox').addClass('unselected');
    
  $('.nav_finger').removeClass('unselected');
  $('.nav_finger').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.finger').removeClass('hide');
  $('.item.finger').addClass('show');
});
    
$('.nav_shadow').click(function(event) {
  $('.navbox').removeClass('selected');
  $('.navbox').addClass('unselected');
    
  $('.nav_shadow').removeClass('unselected');
  $('.nav_shadow').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.shadow').removeClass('hide');
  $('.item.shadow').addClass('show');
});
    
$('.nav_water').click(function(event) {
  $('.navbox').removeClass('selected');
  $('.navbox').addClass('unselected');
    
  $('.nav_water').removeClass('unselected');
  $('.nav_water').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.water').removeClass('hide');
  $('.item.water').addClass('show');
});
        
$('.nav_focus').click(function(event) {
  $('.navbox').removeClass('selected');
  $('.navbox').addClass('unselected');
    
  $('.nav_focus').removeClass('unselected');
  $('.nav_focus').addClass('selected');
    
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.focus').removeClass('hide');
  $('.item.focus').addClass('show');
});
    
//    Sizing
    
$('.nav_thumbnail').click(function(event){
  $('.item').removeClass('full');  
  $('.item').addClass('thumbnail');
});
    
$('.nav_full').click(function(event){
  $('.item').removeClass('thumbnail');  
  $('.item').addClass('full');
});

$('.nav_middle').click(function(event){
  $('.item').removeClass('thumbnail full');
});

















  });
