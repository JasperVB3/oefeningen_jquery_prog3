$(function () {
    var token = "15bcc5f6d929d4cd0d023c93f3950d7d";
    var baseUrl = "https://api.themoviedb.org/3/movie/550?api_key=15bcc5f6d929d4cd0d023c93f3950d7d";

    $.ajax({
        type: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=15bcc5f6d929d4cd0d023c93f3950d7d',
        success: function (data) {
            $.each(data.results,function(){
                $("#movies").append(card(this));
            });
        }
    });

    var card = function (movie){
        var div = $("<div></div>")
        .addClass("card")
        .css({"width":"18rem","margin":"2%"})
        .append(img(movie.poster_path))
        .append(cardBody(movie.original_title,movie.overview))
        return div;
    };
    var img = function(imageUrl){
        var url = "https://image.tmdb.org/t/p/w500"
        var im = $('<img class="card-img-top" src="'+url+imageUrl+'" alt="Card image cap">');
        return im;
    };
    var cardBody = function(title,text){
        var div= $("<div></div>");
        div.addClass("card-body");
        var title = $("<h5></h5>").addClass("card-title").append(title);
        var p = $("<p></p>").addClass("card-text").append(text);
        div.append(title);
        div.append(p);
        return div;
    }
});


/*
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg",
      "genre_ids": [
        28,
        12,
        16,
        10751
      ],
      "id": 260513,
      "original_language": "en",
      "original_title": "Incredibles 2",
      "overview": "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
      "poster_path": "/x1txcDXkcM65gl7w20PwYSxAYah.jpg",
      "release_date": "2018-06-14",
      "title": "Incredibles 2",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 3599,
      "popularity": 112.582
    },
*/