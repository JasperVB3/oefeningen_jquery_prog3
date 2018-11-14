$(function () {
    
    $(".cover").click(function(){
        $(".cover").find('p').remove();
        var promotion = Math.round(Math.random()*5+5);
        var message = "<p>Promotion : "+promotion+"%</p>";

        $(this).append(message);
    });

});