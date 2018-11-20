$(function() {
  
  $('#no-script').remove();

  $('.cover').hover(
    function(){
         $(this).addClass('hover');
    },
    function() {
         $(this).removeClass('hover');
    }  
  );


  $('.cover a').click(function(e) {
        var url = $(this).attr('href');
        var summary = $('#summary');
        summary.parent().show();
        $('#summary').hide().load(url).fadeIn("slow");
        e.preventDefault();
});

$('#text').on('mouseover', function(){
  $(this).css('background-color', '#35797B');
});
 
});