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
  
  $('.cover').hover(
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
  
  $('a.lightbox').click(function(e) {
	 $('body').css('overflow-y', 'hidden'); // hide scrollbars!
	 $('<div id="overlay"></div>') // add overlay
		.css('top', $(document).scrollTop())
		.css('opacity', '0')
		.animate({'opacity': '0.5'}, 'slow') // create shadow
		.appendTo('body');
	 $('<div id="container"></div>').hide().appendTo('body');
	 $('<img />').attr('src', $(this).attr('href'))
	   .load(function() { // when image is loaded
		    positionLightboxImage();
	 })
	 .click(function() { // remove the lightbox
  		removeLightbox();
	 }).css({cursor : 'pointer'})
	 .appendTo('#container');
	 return false;
  });
  
  function positionLightboxImage() {
    var top = ($(window).height() - $('#container').height()) / 2;
    var left = ($(window).width() - $('#container').width()) / 2;
    $('#container')
      .css({
        'top': top + $(document).scrollTop(),
        'left': left
    })
    .fadeIn();
  }
  
  function removeLightbox() {
    $('#overlay, #container')
    .fadeOut('slow', function() {
      $(this).remove();
      $('body').css('overflow-y', 'auto'); // show scrollbars!
    });
  }
 
});