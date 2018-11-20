$(function(){
  $('<div id="navigation_blob"></div>').css({
		width: $('#navigation li:first a').width() + 10,
		height: $('#navigation li:first a').height() + 10
	}).appendTo('#navigation');

  $('#navigation a').hover(function(){ 
    // Mouse over function
	  $('#navigation_blob').show().animate(
      {width: $(this).width() + 10, left: $(this).position().left},
	    {duration: 'slow', easing: 'easeOutElastic', queue: false}
    );
  }, function() { 
	  // Mouse out function
	  var leftPosition = $('#navigation li:first a').position().left;
	  $('#navigation_blob').stop(true).animate(
      {width:0},
			{duration:'slow', easing: 'easeOutCirc', queue: false}
		).animate({left: leftPosition}, 'fast' );
  });
  
  $(window).scroll(function() {
	 $('#navigation')
	 .stop(true)
	 .animate({top: $(document).scrollTop()},'slow','easeOutBack');
  });
});
