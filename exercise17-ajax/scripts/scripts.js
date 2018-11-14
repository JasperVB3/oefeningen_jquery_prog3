$(function() {
  
  $('#no-script').remove();
  $.getJSON("https://mysafeinfo.com/api/data?list=englishmonarchs&format=json",function(data){
    $.each(data,function(){
      var art = $('<article></article>');
      art.append("<h1>"+this.nm+"</h1>");
      art.append("<p>"+this.hse+"</p>");
      art.append("<span>"+this.yrs+"</span>");
      $("#main").append(art);
    })
  })
});
