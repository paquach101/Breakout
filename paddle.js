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

document.addEventListener('keydown', function (hello) {
     if (hello.keyCode == 39 || hello.which == 39) { // W key
      positionOfPaddle1 -= 10;
      document.getElementById("paddle1").style.top =
                                          (positionOfPaddle1) + "px"
     }
     if (hello.keyCode == 83 || hello.which == 83) { // S Key
      positionOfPaddle1 += 10;
      document.getElementById("paddle1").style.top =
                                         (positionOfPaddle1) + "px";
     }
     if (hello.keyCode == 38 || hello.which == 38) { // up arrow
      positionOfPaddle2 -= 10;
      document.getElementById("paddle2").style.top =
                                         (positionOfPaddle2) + "px";
     }
     if (hello.keyCode == 40 || hello.which == 40) { // down arrow
      positionOfPaddle2 += 10;
      document.getElementById("paddle2").style.top =
                                         (positionOfPaddle2) + "px";
     }
}, false);
