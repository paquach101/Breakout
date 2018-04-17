var paddleHeight = 150;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight / 2;
var positionOfPaddle1 = 460;
var speedOfPaddle2 = 0;
var positionOfPaddle2 = 460;
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var score1;
var score2;

document.addEventListener('keydown', function (e) {
     if (e.keyCode == 39 || e.which == 39) { // W key
      positionOfPaddle1 -= 10;
      document.getElementById("paddle1").style.top =
                                          (positionOfPaddle1) + "px"
     }
     if (e.keyCode == 83 || e.which == 83) { // S Key
      positionOfPaddle1 += 10;
      document.getElementById("paddle1").style.top =
                                         (positionOfPaddle1) + "px";
     }
     if (e.keyCode == 38 || e.which == 38) { // up arrow
      positionOfPaddle2 -= 10;
      document.getElementById("paddle2").style.top =
                                         (positionOfPaddle2) + "px";
     }
     if (e.keyCode == 40 || e.which == 40) { // down arrow
      positionOfPaddle2 += 10;
      document.getElementById("paddle2").style.top =
                                         (positionOfPaddle2) + "px";
     }
}, false);
