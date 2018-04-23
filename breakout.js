var canvas = document.getElementById("Canvas"),
    context = canvas.getContext("2d"),
    radius = 20,
    x = canvas.width / 2,
    y = canvas.height - 30,
    dy = 2,
    dx = -2,
    paddleHeight = 15,
    paddleWidth = 100,
    paddleXpos = (canvas.width - paddleWidth) / 2,
    speedx,
    speedy;

function createBlocks() {
    var numblocks = 20;
    for (i = 0; i < numblocks; i++) {
        var elem = document.getElementById('row1');
        elem.className = "blocks";
        elem.id = "blocks" + 1;
    }
}

function paddle() {
    context.beginpath();
    context.rect(paddleXpos, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    context.fillstyle = "blue";
    context.fill();
    context.closePath();
}

function Ball() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
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

    x += dx;
    y += dy;
}

setInterval(draw, 10);
