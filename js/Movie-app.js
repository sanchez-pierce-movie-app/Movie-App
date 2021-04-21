"use strict"

 $.ajax("https://psychedelic-aromatic-boysenberry.glitch.me/movies").done(function(data){

    $(document).ready(function () {
        setTimeout(function () {
            let html = "";

            for (let i = 0; i < data.length; i++) {
                html += "<li>" + "Title: " + data[i].title + "</li>";
                html += "<li>" + "Year Realesed: " + data[i].year + "</li>";
                html += "<li>" + "Directed By: " + data[i].director + "</li>";
                html += "<li>" + "Staring: " + data[i].actors + "</li>";
                html += "<li>" + "Genre: " + data[i].genre + "</li>";
                html += "<li>" + "Ratings: " + data[i].rating + "</li>";
            }
            $("#movies").html(html);
        }, 2000)
    })
    // console.log(data);

});

$("#submit-movie").click(function (e){
    e.preventDefault();



    let movieInput = $("#movie-input").val();

    const newMovie = {
        title: movieInput
    };
    const url = "https://psychedelic-aromatic-boysenberry.glitch.me/movies";

    const options = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(newMovie),
    };

    fetch(url,options)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    console.log(url);
})




