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
  
  $('article > div').hide();
  $('article > div:first').show();
  
  $('article').animate({'backgroundColor':'#FFE4E1'}, 2000, 'swing');
  $('article').animate({'backgroundColor':'#C0D0D0'}, 2000, 'swing');
  
  $('article h2').click(function() {
    $(this).next().animate(
      {'height':'toggle'}, 1000, 'easeOutBounce'
    );
    $(this).parent().siblings().children('div').animate(
      {'height':'hide'}, 1000, 'easeOutBounce'
    );
  });
 
});