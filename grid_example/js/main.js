$(function(){
    var baseurl = "https://cat-fact.herokuapp.com/facts/random";

    $.ajax({
        method: 'GET',
        url : baseurl,
        xhrFields: {
            withCredentials: true
         },
        data : {'animal' :'cat','amount' : 2},
        contentType : "text/plain",
        success : function(data){
            console.log(data);
        }
    })
})