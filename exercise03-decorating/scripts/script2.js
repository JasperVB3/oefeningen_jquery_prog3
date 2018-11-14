$(document).ready(function () {
    var current;
    $('tr:nth-child(odd)').addClass("alt");
    $('td:contains(Fiction)').addClass("red").parent().addClass("highlight");
    $('td').click(function () {
        var value = $(this).text();
        $('td:contains(' + value + ')').parent().toggleClass('yellow');
    })

});