var audio = document.getElementById('mymusic');
var playbutton = document.getElementById('playbutton-music');
var video = document.querySelector('.background-video'); 
var videoSource = document.getElementById('bigcard'); 

var toptitle= document.querySelector('.top-text');
var bigtitle = document.querySelector('.bigtitle-card');
var minitext = document.querySelector('.minitext');

var minititle_footer = document.querySelector('.minititle_footer');
var minitext_footer = document.querySelector('.minitext_footer');
var cover = document.querySelector('.music-card');


playbutton.onclick = function() {
    if (audio.paused){
        audio.play();

        video.classList.add('fade-out');
        setTimeout(function() {
            videoSource.src = "assets/videoplayback.mp4";
            video.load();

      
            video.onloadeddata = function() {
                video.play();
                video.classList.remove('fade-out');
            };
        playbutton.src = "assets/pause-circle.png";
        videoSource.src = "assets/videoplayback.mp4";
        video.load(); 
        video.play(); 
        toptitle.textContent="CURRENT PLAYING"
        bigtitle.textContent="Die With A Smile"
        minitext.textContent="By Lady Gaga and Bruno Mars"

        // minititle_footer.textContent="Die With A Smile"
        // minitext_footer.textContent="By Lady Gaga and Bruno Mars"
    }, 500);
        // cover.style.backgroundImage = "url('assets/ladygaga.jpeg')";
    }
    else{
        audio.pause();
        playbutton.src = "assets/play-circle.png";
        video.pause();
    }
}
