// variables
var xv = yv = 0;
var px = py = 10;
var gs = tc = 25;
var ax = ay = 15;
var canvas;
var ctx;
var trail = []
var tail = 5;

window.onload = () => {

    canvas = document.querySelector("#Game");
    ctx = canvas.getContext("2d");
    document.addEventListener("keydown", controllers);
    setInterval(game, 1000/15);

}

var game = () => {
    px += xv;
    py += yv;

    if(px < 0) {
        px = tc-1;
    }
    if(px > tc-1) {
        px = 0;
    }
    if(py < 0) {
        py = tc-1;
    }
    if(py > tc-1) {
        py = 0;
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "green";
    for (let i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2);
        if(trail[i].x === px && trail[i].y===py){
            tail = 5;
        }
    }

    trail.push({x:px, y:py});
    while(trail.length > tail){
        trail.shift();
    }

    if(ax === px && ay===py){
        tail++;
        ax = Math.floor(Math.random()*tc)
        ay = Math.floor(Math.random()*tc)
    }
   
    ctx.fillStyle = "red";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);

    


}


var controllers = (e) => {
    switch (e.keyCode) {
        case 38: case 87:
            xv = 0;
            yv = -1;
            break;
        case 40: case 83:
            xv = 0;
            yv = 1;
            break;
        case 37: case 65:
            xv = -1;
            yv = 0;
            break;
        case 39: case 68:
            xv = 1;
            yv = 0;
            break;
    }

}





