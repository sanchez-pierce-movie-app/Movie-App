"use strict"

let glitchMovieData = $.ajax("https://psychedelic-aromatic-boysenberry.glitch.me/movies").done(function(data){

    $(document).ready(function () {
        setTimeout(function () {
            let html = "";

            for (let i = 0; i < data.length; i++) {
                html += "<li>" + data[i].title + "</li>";
            }
            $("#movies").html(html);
        }, 2000)
    })
    // console.log(data);
});

console.log(glitchMovieData);


