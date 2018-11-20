$(function() {
  
  $('#no-script').remove();
  
  gallery.trigger = $('#covers .trigger');
  gallery.content = $('#covers_inner');
  gallery.scroll = false;
  gallery.width = 268;
  gallery.innerWidth = gallery.content.width();
  gallery.timer = false;
  
  gallery.init();
 
});

var gallery = {};

gallery.offset = function() {
  var left = gallery.content.position().left;
  if (gallery.scroll == '>') {
    if (left < 0) {
      left += gallery.width;
    }
  }
  else {
    if (left <= 0 && left >= ((gallery.innerWidth * -1) + (gallery.width * 2))) {
      left -= gallery.width;
    }
  }
  return left + "px";
}

gallery.slide = function() {
  if (gallery.timer) {
    clearTimeout(gallery.timer);
  }
  if (gallery.scroll) {
    $(gallery.content).stop(true,true).animate({left: gallery.offset()}, 500);
    gallery.timer = setTimeout(gallery.slide, 1500)
  }
}

gallery.direction = function(e,which) {
  var x = e.pageX - which.offset().left;
  gallery.scroll = (x >= gallery.width / 2) ? ">" : "<";
}

gallery.init = function() {
  $(gallery.trigger)
    .mouseout(function() {gallery.scroll = false;})
    .mousemove(function(e) {gallery.direction(e,gallery.trigger);})
    .mouseover(function(e) {
      gallery.direction(e,gallery.trigger);
      gallery.slide();
    });
}