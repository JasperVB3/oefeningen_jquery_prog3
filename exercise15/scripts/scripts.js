$(function() {
  
  $('#no-script').remove();
  
  $('#menu li ul').css({
    display: "none",
    left: "auto"
  });
  $('#menu li').hoverIntent(function() {
      $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('fast');
    }, function() {
      $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
 
  $('#accordion').accordion();
  
  $('#tabs').tabs({
	event: 'mouseover',
	fx: {
		opacity: 'toggle',
		duration: 'fast'
	},
	spinner: 'Loading...',
	cache: true
});

$('.promo').hover(function(e) {
	var titleText = $(this).attr('title');
	$(this)
	.data('tipText', titleText)
	.removeAttr('title');
	$('<p class="tooltip"></p>')
	.text(titleText)
	.appendTo('body')
	.css('top', (e.pageY - 10) + 'px')
	.css('left', (e.pageX + 20) + 'px')
	.fadeIn('slow');
}, function() {
	$(this).attr('title', $(this).data('tipText'));
	$('.tooltip').remove();
}).mousemove(function(e) {
	$('.tooltip')
	.css('top', (e.pageY - 10) + 'px')
	.css('left', (e.pageX + 20) + 'px');
});
 
});