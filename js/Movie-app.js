"use strict"

const movieList = document.getElementById("movies");
const movieForm = document.querySelector("form");

fetch("/movies")
    .then((response) =>{ return response.json()})
    .then((jsonData) =>{ return jsonData.results})
    .then((results)=>results.forEach(result=>console.log(result.movies)));
console.log(glitchUrl)

const glitchUrl = fetch("https://glitch.com/edit/#!/gelatinous-careful-technosaurus/movies")


$(document).ready(function (){
    setTimeout(function (){
        $("#movies").html("Welcome to our Movie App!")
    },2000)
})