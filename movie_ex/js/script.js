$(function () {
    if (movies == null || movies == 'undifined') {
        getNowPlaying();
    }

    if (genres == null || genres == 'undifined') {
        getGenres();
    }

    $(this).on("click", ".dropdown-item", function (event) {
        getByGenre($(this).attr("id"));
        $("#navbarDropdownMenuLink").html($(this).text());
    })

});


let token = "15bcc5f6d929d4cd0d023c93f3950d7d";
let baseUrl = "https://api.themoviedb.org/3/movie/";
let genreUrl = "https://api.themoviedb.org/3/genre/movie/list";
let nowPlaying = "now_playing";
var movies;
var genres;
let lang = "nl-BE";

//retrieve the genres for the dropdown menu
function getGenres() {
    $.ajax({
        type: 'GET',
        url: genreUrl,
        data: {
            api_key: token,
            language: lang
        },
        success: function (data) {
            genres = data.genres;
            setGenres();
        }
    })
}

//set the genres as dropdown items
function setGenres() {
    if (genres == null || genres == 'undifined') {
        getGenres();
    } else {
        var dropdown = $("#genres");
        $.each(genres, function () {
            dropdown.append('<a class="dropdown-item" id="' + this.id + '" href="#">' + this.name + '</a>')
        })
    }
}

//Get the movies now playing in theaters
function getNowPlaying() {
    $.ajax({
        type: 'GET',
        url: baseUrl + nowPlaying,
        data: {
            api_key: token,
            language: lang
        },
        success: function (data) {
            movies = data.results;
            setMovies(movies);
        }
    });
}


//filter out the movies with the given genre
function getByGenre(genre_id) {
    if (movies == null || movies == 'undifined') {
        getNowPlaying();
    } else {
        var moviesByGenre = [];
        $.each(movies, function () {
            var movie = this;
            $.each(movie.genre_ids, function () {
                if (this == genre_id) {
                    moviesByGenre.push(movie);
                }
            })
        });
        setMovies(moviesByGenre);
    }

}

//set the movies in the movie container
function setMovies(data) {
    $("#movies").empty();
    $.each(data, function () {
        $("#movies").append(card(this));
    });
}

//create a bootstrap card 
var card = function (movie) {
    var div = $("<div></div>")
        .addClass("card")
        .addClass("bg-light")
        .addClass("flex-column")
        .css({
            "width": "18rem",
            "margin": "2%"
        })
        .append(img(movie.poster_path))
        .append(cardBody(movie.original_title, movie.overview))
    return div;
};

//create an image for the bootstrap card
var img = function (imageUrl) {
    var url = "https://image.tmdb.org/t/p/w500"
    var im = $('<img class="card-img-top" src="' + url + imageUrl + '" alt="Card image cap">');
    return im;
};

//create the card body
var cardBody = function (title, text) {
    var div = $("<div></div>");
    div.addClass("card-body");
    var title = $("<h5></h5>").addClass("card-title").append(title);
    var p = $("<p></p>").addClass("card-text").append(text);
    div.append(title);
    div.append(p);
    div.append('<a href="#" class="btn btn-outline-success align-self-baseline" data-toggle="modal" data-target=".bd-example-modal-lg">More info</a>')
    return div;
}