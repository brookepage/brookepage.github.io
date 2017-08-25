$(document).ready(function() {


// Add jQuery here

$('.no1').click(function() {
  $('.one').toggleClass('showme');
  $('.two, .three, .four, .five').removeClass('showme');    
});
 
$('.no2').click(function() {
  $('.two').toggleClass('showme');
  $('.one, .three, .four, .five').removeClass('showme');    
});
    
$('.no3').click(function() {
  $('.three').toggleClass('showme');
  $('.one, .two, .four, .five').removeClass('showme');    
});

$('.no4').click(function() {
  $('.four').toggleClass('showme');
  $('.one, .three, .two, .five').removeClass('showme');    
});
    
$('.no5').click(function() {
  $('.five').toggleClass('showme');
  $('.one, .three, .four, .two').removeClass('showme');    
});
    

//rotate numbers
    
$('.no1').click(function() {
  $('.no1').toggleClass('showme');  
 $('.no2, .no3, .no4, .no5').removeClass('showme');
});
    
$('.no2').click(function() {
  $('.no2').toggleClass('showme');  
  $('.no1, .no3, .no4, .no5').removeClass('showme');
});
    
$('.no3').click(function() {
  $('.no3').toggleClass('showme');  
  $('.no2, .no1, .no4, .no5').removeClass('showme');
});
    
$('.no4').click(function() {
  $('.no4').toggleClass('showme');  
  $('.no2, .no3, .no1, .no5').removeClass('showme');
});
    
$('.no5').click(function() {
  $('.no5').toggleClass('showme');   
  $('.no2, .no3, .no4, .no1').removeClass('showme');
});






  });
