"use strict"

 $.ajax("https://psychedelic-aromatic-boysenberry.glitch.me/movies").done(function(data){

    $(document).ready(function () {
        setTimeout(function () {
            let html = "";

            for (let i = 0; i < data.length; i++) {
                html += "<li>" + "Title: " + data[i].title + "</li>";
                html += "<li>" + "Ratings: " + data[i].rating + "</li>";
                // html += "<li>" + "Year Released: " + data[i].year + "</li>";
                // html += "<li>" + "Directed By: " + data[i].director + "</li>";
                // html += "<li>" + "Staring: " + data[i].actors + "</li>";
                // html += "<li>" + "Genre: " + data[i].genre + "</li>";
            }
            $("#movies").html(html);
        }, 2000)
    })
    // console.log(data);

});

$("#submit-movie").click(function (e){
    e.preventDefault();



    let movieInput = $("#movie-input").val();
    let movieRating = $("#rating-input").val();


    const newMovie = {
        title: movieInput,
        rating: movieRating
    };
    const url = "https://psychedelic-aromatic-boysenberry.glitch.me/movies";

    const options = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(newMovie, movieRating),
    };

    fetch(url,options)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    console.log(url);
})


$("#edit-movie").click(function (e){
    e.preventDefault();

    let movieInput = $("#movie-input").val();
    let movieRating = $("#rating-input").val();

    let patchMovie = {
        id: 11,
        title: movieInput,
        rating: movieRating
    };
    const url = "https://psychedelic-aromatic-boysenberry.glitch.me/movies/11";

    let options = {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(patchMovie),
    };

    fetch(url,options)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    console.log(url);
})



// function setUsername(id, newUsername) {
//     for (var i = 0; i < jsonObj.length; i++) {
//         if (jsonObj[i].Id === id) {
//             jsonObj[i].Username = newUsername;
//             return;
//         }
//     }
// }
//
// // Call as
// setUsername(3, "Thomas");
//
//
// 5

// $(document).ready(function(){
//     var jsonObj = ;
//
//     $.each(jsonObj,function(i,v){
//         if (v.Id == 3) {
//             v.Username = "Thomas";
//             return false;
//         }
//     });
//
//     alert("New Username: " + jsonObj.Username);
//
// });