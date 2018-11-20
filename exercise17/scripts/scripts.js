$(function() {
  
  $('#no-script').remove();

  var searchTerm = "books";
var baseUrl = "https://mysafeinfo.com/api/data?list=englishmonarchs&format=json";
    $.getJSON(baseUrl, function(data) {
    $.each(data, function() {
    $('<article></article>')
    .hide()
    .append('<h2> Name: '+this.nm+'</h2>')
    .append('<p>Ruled: '+ this.yrs +'</p>')
    .append('<span> House: '+ this.hse+'</span>')
    .appendTo('#main')
    .fadeIn();
    });
 
});

});

// this used to be done with Delicious, but the site does not exist anymore, on mysafeinfo.com you can find all sorts of lists