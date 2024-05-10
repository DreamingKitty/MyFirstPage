window.addEventListener('load', function() {
    var elementos = document.getElementsByClassName("fade-in");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.add("fade-in-visible");
    }

    var playButton = document.getElementById("play-music");
    playButton.addEventListener('click', function() {
        var audio = document.getElementById("music");
        audio.play();
    });
})



