$(function() {
  
  $('#no-script').remove();
  
  $('.spoiler').hide();
  $('<span class="revealer">Let me read...</span>').insertBefore('.spoiler');
  $('.revealer').hover(
    function(){
         $(this).addClass('hover');
    },
    function() {
         $(this).removeClass('hover');
    }  
  );
  
  $('.revealer').click(function() {
    $(this).fadeOut('normal', function(){
       $(this).next().fadeIn('slow');
    });
  });
 
});