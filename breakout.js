var canvas = document.getElementById("Canvas"),
    context = canvas.getContext("2d"),
    radius = 10,
    x = canvas.width / 2,
    y = canvas.height - 30,
    dy = 2,
    dx = -2,
    paddleHeight = 15,
    paddleWidth = 100,
    paddleXpos = (canvas.width - paddleWidth) / 2,
    paddleYpos = canvas.height - paddleHeight,
    rightPressed = false,
    leftPressed = false,
    speedx,
    speedy;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(k) {
    if (k.keycode == 30) {
        leftPressed = true;
    } else if (k.keycode == 32) {
        rightPressed = true;
    }
    console.log("hit")
}

function keyUpHandler(k) {
    if (k.keycode == 30) {
        leftpressed = false;
    } else if (k.keycode == 32) {
        rightPressed = false;
    }
}

function createBlocks() {
    var numblocks = 20;
    for (i = 0; i < numblocks; i++) {
        var elem = document.getElementById('row1');
        elem.className = "blocks";
        elem.id = "blocks" + 1;
    }
}

function paddle() {
    context.beginPath();
    context.rect(paddleXpos, paddleYpos, paddleWidth, paddleHeight);
    context.fillstyle = "blue";
    context.fill();
    context.closePath();
}

function Ball() {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    Ball();
    paddle();

    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    if (rightPressed && paddleXpos < canvas.width - paddleWidth) {
        paddleXpos += 10;
    } else if (leftPressed && paddleXpos > 0) {
        paddleXpos -= 10;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);
