var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    radius = 20,
    x = canvas.width / 2,
    y = canvas.height - 30,
    dy = 2,
    dx = -2,
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

function ball(){
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillstyle = "#ff66ff";
    context.fill();
}

function draw(){
   context.clearRect(0, 0, canvas.width, canvas.height);
    ball();

    if(x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }else if(y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);

