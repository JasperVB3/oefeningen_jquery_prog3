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
    });

    $(this).on("click", ".info-button", function () {
        getMoreInfo($(this).attr("id"));
    })

    $("#search").submit(function (event) {
        var search = $("#searchInput").val();
        $("#searchInput").val("");
        if (search != "undefined" || search != null) {
            searchMovies(search);
        }
        event.preventDefault();
    });

    $("#home").click(function () {
        if (movies != null || movies != "undefined") {
            setMovies(movies);
        } else {
            getNowPlaying();
        }
    });

});


let token = "15bcc5f6d929d4cd0d023c93f3950d7d";
let baseUrl = "https://api.themoviedb.org/3/movie/";
let genreUrl = "https://api.themoviedb.org/3/genre/movie/list";
let urlImg = "https://image.tmdb.org/t/p/w500"
let searchUrl = "https://api.themoviedb.org/3/search/movie";
let nowPlaying = "now_playing";
let region = "ISO_3166_1";
let year = 2018;
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
            language: lang,
            include_adult: false

        },
        success: function (data) {
            genres = data.genres;
            setGenres();
        }
    })
}

function searchMovies(word) {
    $.ajax({
        type: "GET",
        url: searchUrl,
        data: {
            api_key: token,
            language: lang,
            query: word,
            page: 1,
            include_adult: false,
            year: year,
            region: region
        },
        success: function (data) {
            if (data.results.length != 0) {
                console.log(data.results);
                setMovies(data.results);
            } else {
                alert("no results");
            }
        },
        fail: function () {
            alert("no results");
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
        .append(cardBody(movie.original_title, movie.overview, movie.id))
    return div;
};

//create an image for the bootstrap card
var img = function (imageUrl) {

    var im = $('<img class="card-img-top" src="' + urlImg + imageUrl + '" alt="Card image cap">');
    return im;
};

//create the card body
var cardBody = function (title, text, id) {
    var div = $("<div></div>");
    div.addClass("card-body");
    var title = $("<h5></h5>").addClass("card-title").append(title);
    var p = $("<p></p>").addClass("card-text").append(text);
    div.append(title);
    div.append(p);
    div.append('<a href="#" id="' + id + '" class="btn btn-outline-success align-self-baseline info-button" data-toggle="modal" data-target=".bd-example-modal-lg">More info</a>')
    return div;
}

function getMoreInfo(id) {
    $.ajax({
        type: 'GET',
        url: baseUrl + id,
        data: {
            api_key: token,
            language: lang
        },
        success: function (data) {
            createMoreInfoModal(data);
        }
    });
}

function createMoreInfoModal(movie) {
    $("#modal-genres").empty();
    var li = $("<li></li>").addClass("list-group-item");
    $.each(movie.genres, function () {
        li.append('<span class="badge badge-pill badge-secondary">' + this.name + "</span>");
    });
    $("#modal-genres")
        .append(li)
        .append('<li class="list-group-item">Website : <a href="' + movie.homepage + '">' + movie.homepage + "</a></li>")
        .append('<li class="list-group-item">Language : ' + movie.language + '</li>')
        .append('<li class="list-group-item">Release : ' + movie.release_date + '</li>');

    $("#movieTitleModal").html(movie.original_title);
    $("#large_description").html(movie.overview);
    $("#productions").empty();
    $.each(movie.production_companies, function () {
        $("#productions").append('<img src="' + urlImg + this.logo_path + '" alt="' + this.name + '"/>');
    });
}


/*

homepage: "http://www.venom.movie/site/"
id: 335983
imdb_id: "tt1270797"
original_language: "en"
original_title: "Venom"
overview: "Wanneer Eddie Brock de krachten van een symbiote verwerft, zal hij zijn alter ego "Venom" moeten vrijmaken om zijn leven te redden."
popularity: 228.224
poster_path: "/bURIWlkMbzT8RdpemzCmQECo2Uh.jpg"
production_companies: (4) [{…}, {…}, {…}, {…}]
production_countries: [{…}]
release_date: "2018-10-03"
revenue: 508400000
runtime: 112
spoken_languages: [{…}]
status: "Released"
tagline: ""
title: "Venom"
video: false
vote_average: 6.6
vote_count: 2195
*/