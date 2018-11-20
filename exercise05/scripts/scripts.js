$(function() {
  var cheapMode = false;
  
  $("button#cheap").click(function() {
     if (cheapMode == false) {
      cheapMode = true;
      $expensive = $(".expensive").parent().parent().detach();
      $("h3").replaceWith("<h3>Your Cheap Selection</h3>");
      $(".sold-out").after("<li class='red'>SOLD OUT!</li>");
      $sold = $(".sold-out").detach();
      $(".cheap").addClass("green");
      $(".cheap").parent().parent().addClass("bargain");
      $(".cheap").siblings().addClass("no-image");
     }
     
  });
  
  $("button#restore").click(function() {
     if (cheapMode == true) {
      cheapMode = false;
      $(".fantasy li").first().before($expensive);
      $("h3").replaceWith("<h3>Our Selection</h3>");
      $("li.red").each(function(index){
        $(this).replaceWith($sold[index]);
      });   
      $(".green").removeClass("green");
      $(".bargain").removeClass("bargain");
      $(".no-image").removeClass("no-image");
     }
  });
});