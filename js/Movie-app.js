"use strict"

const url = "https://gelatinous-careful-technosaurus.glitch.me/movies";

$.ajax("https://gelatinous-careful-technosaurus.glitch.me/movies").done(function (data) {

    $(document).ready(function () {
        setTimeout(function () {
            let html = "";

            for (let i = 0; i < data.length; i++) {
                html += "  <div class=\"card\" style=\"width: 18rem;\">"
                html += "<img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">"
                html += "<div class=\"card-body\">"
                html += "<h5 class=\"card-title\">" + "Title: " + data[i].title + "</h5>";
                html += " <p class=\"card-text\">" + data[i].rating + "</p>";
                html += `<button class='delete-movie btn btn-primary' type='submit' data-id='${data[i].id}'>Delete</button>`;
                html += `<button class='edit-movie btn btn-primary' type='submit' data-id='${data[i].id}'>Edit</button>`;
                html += "</div>";
                html += "</div>"
            }
            $("#movies").html(html);
            // $("ul li").css("color", "white");
        }, 1000)
    })






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
$(document).on("click",'.edit-movie',function (e) {
    e.preventDefault();

    let movieInput = $("#movie-input").val();
    let movieId = $(this).attr("data-id");
    fetch("https://gelatinous-careful-technosaurus.glitch.me/movies/" + movieId).then(response => response.json().then(response => $("#movie-input").val(response.title)))




    // let patchMovie = {
    //     title: movieInput,
    //     rating: movieRating
    // };
    //
    //
    // let options = {
    //     method: "PUT",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(patchMovie, movieRating),
    // };

    // fetch(url, options)
    //     .then(response => console.log(response))
    //     .catch(error => console.log(error));

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

