$(document).ready(function ()
{
    $(".navLogo").click(function (){
        $('html, body').animate({
            scrollTop: $("#pageTop").offset().top
        }, 1000);
    });

    $("#navExperience").click(function (){
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, 1000);
    });

    $("#navSkills").click(function (){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });

    $("#navProject").click(function (){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000);
    });

    $("#navContact").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

});