$(document).ready(function(){
    console.log("making sure it works")

    $(".container").on("click", "#ccImage", function(){
        window.open("https://jjvs92.github.io/unit-4-game/");
    } )

    $(".container").on("click", "#psychicGameImage", function(){
        window.open("https://jjvs92.github.io/Word-Guess-Game/");
    })

    $(".container").on("click", "#triviaGame", function(){
        window.open("https://jjvs92.github.io/TriviaGame/");
    })    

})