window.onload = function() {
  var BtnUnicorn = document.getElementById("DivUnicorn");

  BtnUnicorn.onmouseover = function MusicPlay() {
    var audio = document.getElementById("v1");
    if (audio.paused === true) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  BtnUnicorn.onmouseout = function MusicPause() {
    var audio = document.getElementById("v1");
    audio.pause();
  };
};
