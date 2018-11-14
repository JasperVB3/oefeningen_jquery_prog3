$(document).ready(function () {
    var current;
    $('tr:nth-child(odd)').addClass('alt');
    $('td:contains(Fiction)').addClass('red').parent().addClass('highlight');
    $('td').click(function () {
        var x = $(this).text();
        $('tr.yellow').removeClass("yellow");
        console.log(x + " " + current);
        if (x != current) {
            $('td:contains(' + x + ')').parent().toggleClass('yellow');
        } else {
            console.log(x + " " + current);
            x = 'undefined';
        }
        current = x;
    });
});