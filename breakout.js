var canvas = document.getElementById("Canvas"),
    context = canvas.getContext("2d"),
    radius = 10,
    x = canvas.width / 2,
    y = canvas.height - 30,
    dy = 2,
    dx = -2,
    blockwidth = 30,
    blockheight = 15,
    blockspacing = 5,
    blockxpos = 0,
    blockypos = 0,
    blocknumbx = 27,
    blocknumby = 6,
    paddleHeight = 15,
    paddleWidth = 100,
    paddleXpos = (canvas.width - paddleWidth) / 2,
    paddleYpos = canvas.height - paddleHeight,
    rightPressed = false,
    leftPressed = false,
    speedx,
    speedy;

var blocks = [];
for (i = 0; i < blocknumbx; i++) {
    blocks[i] = [];
    for (j = 0; j < blocknumby; j++) {
        blocks[i][j] = {
            x: 0,
            y: 0
        };
    }
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(k) {
    if (k.keyCode == 37) {
        leftPressed = true;
    } else if (k.keyCode == 39) {
        rightPressed = true;
    }
}

function keyUpHandler(k) {
    if (k.keyCode == 37) {
        leftPressed = false;
    } else if (k.keyCode == 39) {
        rightPressed = false;
    }
}

function collision() {
    for (i = 0; i < blocknumbx; i++) {
        for (j = 0; j < blocknumby; j++) {
            var block = blocks[i][j];
            if (x > block.x && x < block.x + blockwidth && y > block.y && y < block.y + blockheight) {
                dy = -dy;
            }
        }
    }
}

function drawBlocks() {
    for (i = 0; i < blocknumbx; i++) {
        for (j = 0; j < blocknumby; j++) {
            var blockx = (i * (blockwidth + blockspacing)) + blockxpos;
            var blocky = (j * (blockheight + blockspacing)) + blockypos;
            blocks[i][j].x = blockx;
            blocks[i][j].y = blocky;
            context.beginPath();
            context.rect(blockx, blocky, blockwidth, blockheight);
            context.fillStyle = "pink";
            context.fill();
            context.closePath();
        }
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
    collision();
    Ball();
    paddle();
    drawBlocks();
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    if (rightPressed && paddleXpos < canvas.width - paddleWidth) {
        paddleXpos += 5;
    } else if (leftPressed && paddleXpos > 0) {
        paddleXpos -= 5;
    }
    x += dx;
    y += dy;
}

setInterval(draw, 15);
