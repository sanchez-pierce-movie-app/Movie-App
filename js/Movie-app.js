"use strict"

const url = "https://psychedelic-aromatic-boysenberry.glitch.me/movies";

$.ajax("https://psychedelic-aromatic-boysenberry.glitch.me/movies").done(function (data) {

    $(document).ready(function () {
        setTimeout(function () {
            let html = "";

            for (let i = 0; i < data.length; i++) {
                html += "<li>" + "Title: " + data[i].title + "</li>";
                html += "<li>" + data[i].id + "</li>";
                // html += `<form action='${url + "/" + data[i].id}'>`
                html += `<button class='delete-movie' type='submit' data-id='${data[i].id}'>Delete</button>`;
                // html += "</form>"
                // html += "<li>" + "Year Released: " + data[i].year + "</li>";
                // html += "<li>" + "Directed By: " + data[i].director + "</li>";
                // html += "<li>" + "Staring: " + data[i].actors + "</li>";
                // html += "<li>" + "Genre: " + data[i].genre + "</li>";
            }
            $("#movies").html(html);
        },)
    })


    fetch("https://psychedelic-aromatic-boysenberry.glitch.me/movies").then(response => console.log(response))


    // //*********************** edit for loop ****************
    // let html = "";
    //
    //     for (let i = 0; i < data.length; i++) {
    //     html += "<option>" + "Title: " + data[i].title + "</option>";
    //     }
    //
    // $("#edit-movies").html(html);

    //************************* delete for loop ***********************
    // let deleteHtml = "";
    //
    // for (let i = 0; i < data.length; i++) {
    //     deleteHtml += "<option>" + "Title: " + data[i].title + "</option>";
    // }
    //
    // $("#delete-movies").html(html);


});



//********************* post patch delete **********************************

//********************** post **********************
$("#submit-movie").click(function (e) {
    e.preventDefault();


    let movieInput = $("#movie-input").val();
    let movieRating = $("#rating-input").val();


    const newMovie = {
        title: movieInput,
        rating: movieRating
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newMovie, movieRating),
    };

    fetch(url, options)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    console.log(url);
});

//******************************** PATCH *************************************
$("#edit-movie").click(function (e) {
    e.preventDefault();

    let movieInput = $("#movie-input").val();
    let movieRating = $("#rating-input").val();

    let patchMovie = {
        title: movieInput,
        rating: movieRating
    };


    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(patchMovie),
    };

    fetch(url, options)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    console.log(url);
})

//**************************** delete **********************************


$(document).on("click",'.delete-movie',function (e) {
e.preventDefault();

    let deleteMethod = {
        method: "DELETE"
    }

    let movieId = $(this).attr("data-id");
    console.log(movieId);

    fetch(url + "/" + movieId, deleteMethod).then(function (response){
        console.log(response);
    })

})



//******************************************************************



// $(document).on("click",".delete-movie",function () {
// })

