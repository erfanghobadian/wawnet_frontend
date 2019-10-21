$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$('.dropdown-toggle').dropdown();
$(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        content: function () {
            return $('.list-group').html()
        },
        title: function () {
            return $('.popover-titleHTML').html()
        }
    });
});

$(document).ready(function () {
    $('#kianbtn').click(function () {
        $('#rest1').toggleClass('showC');
        if ($('#kianbtn').attr("src") === "/static/img/remove.png")
            $('#kianbtn').attr("src", "/static/img/plus.png");
        else
            $('#kianbtn').attr("src", "/static/img/remove.png");
    });
});
$(document).ready(function () {
    $('#kianbtn1').click(function () {
        $('#rest2').toggleClass('showC');
        if ($('#kianbtn1').attr("src") === "/static/img/remove.png")
            $('#kianbtn1').attr("src", "/static/img/plus.png");
        else
            $('#kianbtn1').attr("src", "/static/img/remove.png");
    });
});
$(document).ready(function () {
    $('#kianbtn2').click(function () {
        $('#rest3').toggleClass('showC');
        if ($('#kianbtn2').attr("src") === "/static/img/remove.png")
            $('#kianbtn2').attr("src", "/static/img/plus.png");
        else
            $('#kianbtn2').attr("src", "/static/img/remove.png");
    });
});