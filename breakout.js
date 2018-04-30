var canvas = document.getElementById("Canvas"),
    context = canvas.getContext("2d"),
    radius = 10,
    x = canvas.width / 2,
    y = canvas.height - 30,
    dy = 2,
    dx = -2,
    blockwidth = 80, //30
    blockheight = 40, //15
    blockspacing = 5, //5
    blockxpos = 0,
    blockypos = 0,
    blocknumbx = 27,
    blocknumby = 6,
    paddleHeight = 15,
    paddleWidth = 100,
    paddleXpos = (canvas.width - paddleWidth) / 2,
    paddleYpos = canvas.height - paddleHeight,
    dIsPressed = false,
    aIsPressed = false,
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
    if (k.keyCode == 65) {
        aIsPressed = true;
    } else if (k.keyCode == 68) {
        dIsPressed = true;
    }
}

function keyUpHandler(k) {
    if (k.keyCode == 65) {
        aIsPressed = false;
    } else if (k.keyCode == 68) {
       dIsPressed = false;
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
            context.fillStyle = "red";
            context.fill();
            context.closePath();
        }
    }
}

function paddle() {
    context.beginPath();
    context.rect(paddleXpos, paddleYpos, paddleWidth, paddleHeight);
    context.fillStyle = "red";
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

    if (dIsPressed && paddleXpos < canvas.width - paddleWidth) {
        paddleXpos += 5;
    } else if (aIsPressed && paddleXpos > 0) {
        paddleXpos -= 5;
    }

    if (paddleXpos < x + radius &&
   x + paddleWidth > x &&
   paddleYpos < y + radius &&
   paddleHeight + paddleYpos > y){
        dy = -dy;
        console.log("hit");
    }

    if (dx + x > canvas.width - radius || x + dx < radius){
        x = paddleWidth;
    }
    x += dx;
    y += dy;
}

setInterval(draw, 15);
