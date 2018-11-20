$(function() {
  
  function hidePromotion() {
    var index = generateRandom(4);
    $(".cover").each(function(current, value){
       if (current == index) {
          $(this).append('<span id="hidden"></span>');
          return false;
       }
    });
  }
  
  hidePromotion();
  
  function checkPromotion() {
      var message;
      if ($.contains(this, document.getElementById("hidden"))) {
        var random = generateRandom(1000);
        message = "<p>Your promotion code is CODE" + random + "</p>";
      } else {
        message = "<p>Sorry! No promotion this time!</p>";
      }
      $(".cover").each(function(){
        if($.contains(this, document.getElementById("hidden"))) {
          $(this).addClass("found");  
        } else {
          $(this).addClass("not_found");
        }
        $(this).unbind('click');
      });
      $("#result").append(message).fadeIn(1000);
  }
  
  function generateRandom(number) {
    return Math.floor(Math.random() * number);
  }
  
  $(".cover").click(checkPromotion);
  $(".cover").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );
});