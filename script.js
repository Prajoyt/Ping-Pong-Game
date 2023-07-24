let userpaddle = document.getElementById('userpaddle');
//console.log(userpaddle);
let aipaddle = document.getElementById('aipaddle');
let ball = document.getElementById('ball');
let gamebox = document.getElementById('gamebox');
//console.log(gamebox);


let zpressed = false;
let xpressed = false;

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);


function keyDownHandler(e) {
    // console.log(e);
    if (e.key === 'z') {
        zpressed = true;
        //  console.log("Zpressed triggred")
    }
    else if (e.key === 'x') {
        xpressed = true;
        //  console.log("X prressed trigged")
    }
}
function keyUpHandler(e) {
    // console.log(e);
    if (e.key === 'z') {
        zpressed = false;
        //console.log("Zpressed released")
    }
    else if (e.key === 'x') {
        xpressed = false;
        //console.log("X prressed released")
    }
}
let Vx = -1;
let Vy = -5;

let V = Math.sqrt((Vx * Vx) + (Vy * Vy));



function gameloop() {

    //if the ball hits the paddle change the direction
    if (ball.offsetLeft < 0) {
        Vx = -Vx;
    }
    if (ball.offsetLeft > gamebox.offsetWidth - ball.offsetWidth) {
        Vx = -Vx;
    }
    if (ball.offsetTop < 0) {
        Vy = -Vy;
    }
    if (ball.offsetTop > gamebox.offsetHeight - ball.offsetHeight) {
        Vy = -Vy
    }
    ball.style.left=ball.offsetLeft+Vx+'px';
    ball.style.top=ball.offsetTop+Vy+'px';

    if (zpressed && userpaddle.offsetTop > 55) {

        userpaddle.style.top = userpaddle.offsetTop - 5 + 'px'; //check
    }

    if (xpressed && userpaddle.offsetTop < gamebox.offsetHeight - userpaddle.offsetHeight + 45) {//+'px' why not

        userpaddle.style.top = userpaddle.offsetTop + 5 + 'px';//parsing
    }
    requestAnimationFrame(gameloop) // it will continous running
}
gameloop()

//ball movement in 2d it will have some velocity in x and y direction
//update the position of velocity     velocity of ball is vx2+vy2=v2








