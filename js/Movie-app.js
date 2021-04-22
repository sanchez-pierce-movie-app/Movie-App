"use strict"

 $.ajax("https://psychedelic-aromatic-boysenberry.glitch.me/movies").done(function(data){

    $(document).ready(function () {
        setTimeout(function () {
            let html = "";

            for (let i = 0; i < data.length; i++) {
                html += "<li>" + "Title: " + data[i].title + "</li>";
                // html += "<li>" + "Ratings: " + data[i].rating + "</li>";
                // html += "<li>" + "Year Released: " + data[i].year + "</li>";
                // html += "<li>" + "Directed By: " + data[i].director + "</li>";
                // html += "<li>" + "Staring: " + data[i].actors + "</li>";
                // html += "<li>" + "Genre: " + data[i].genre + "</li>";
            }
            $("#movies").html(html);
        }, )
    })

         // //*********************** edit for loop ****************
         let html = "";

             for (let i = 0; i < data.length; i++) {
             html += "<option>" + "Title: " + data[i].title + "</option>";
             }

         $("#edit-movies").html(html);

     //************************* delete for loop ***********************
     let deleteHtml = "";

     for (let i = 0; i < data.length; i++) {
         deleteHtml += "<option>" + "Title: " + data[i].title + "</option>";
     }

     $("#delete-movies").html(html);


});
//********************* post patch delete **********************************

//********************** post **********************
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
});


//******************************** PATCH *************************************
$("#edit-movie").click(function (e){
    e.preventDefault();

    let movieInput = $("#movie-input").val();
    let movieRating = $("#rating-input").val();

    let patchMovie = {
        title: movieInput,
        rating: movieRating
    };
    const url = "https://psychedelic-aromatic-boysenberry.glitch.me/movies";

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

//**************************** delete **********************************
$.ajax("https://psychedelic-aromatic-boysenberry.glitch.me/movies").done(function(data) {

    $("#delete-movie").click(function (e) {
        e.preventDefault();

        let deleteInput = $("#delete-movie").val();

        const url = "https://psychedelic-aromatic-boysenberry.glitch.me/movies";

        let idLoop = function(){
            for(let id of idLoop){
                if(id === deleteInput.id){

                }
            }
        }

        let deleteMethod = {
            method: "DELETE"
        }

        fetch(url, deleteMethod).then(function (response) {
            console.log(response);
        })

    })
});





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