$(function() {
  
  $('#no-script').remove();
  
  $('#main').jScrollPane({
	 scrollbarWidth: 10,
	 scrollbarMargin: 10,
	 showArrows: false
  });
  
  $('article').resizable({
    handles: 'all',
    containment: 'parent'
  });

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