let userpaddle = document.getElementById('userpaddle');
//console.log(userpaddle);
let aipaddle = document.getElementById('aipaddle');
let ball = document.getElementById('ball');
let gamebox = document.getElementById('gamebox');
//console.log(gamebox);



let userscore = document.getElementById('userscore');
let aiscore = document.getElementById('aiscore');


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
let Vx = -6;
let Vy = -7;

let V = Math.sqrt((Vx * Vx) + (Vy * Vy));



function reset() {
    ball.style.left = '50%';
    ball.style.top = '50%';
    Vx = -1;

    Vy = -5;
    Math.sqrt((Vx * Vx) + (Vy * Vy));
}

function checkCollision(activepaddle) {
    let balltop = ball.offsetTop;
    let ballbottom = ball.offsetTop + ball.offsetHeight;
    let ballleft = ball.offsetLeft;
    let ballright = ball.offsetLeft + ball.offsetWidth;


    let paddletop = activepaddle.offsetTop;
    let paddlebottom = activepaddle.offsetTop + activepaddle.offsetHeight;
    let paddleleft = activepaddle.offsetLeft;
    let paddleright = activepaddle.offsetLeft + activepaddle.offsetWidth


    //console.log(paddleright,paddlebottom,paddleleft,paddletop);
    //console.log(ballbottom,balltop,ballleft,ballright);


    if (ballbottom > paddletop && balltop < paddlebottom && ballright > paddleleft && ballleft < paddleright) {
        console.log("Collision Detected")
        return true;
    }





}



function gameloop() {

    //if the ball hits the paddle change the direction
    if (ball.offsetLeft < 0) {
        aiscore.innerHTML=parseInt(aiscore.innerHTML)+1;
         reset()//hit the wall call reset function
        //Vx = -Vx;
    }
    if (ball.offsetLeft > gamebox.offsetWidth - ball.offsetWidth) {
        userscore.innerHTML=parseInt(userscore.innerHTML)+1;
        reset()
        

    }
    if (ball.offsetTop < 0) {
        Vy = -Vy;
    }
    if (ball.offsetTop > gamebox.offsetHeight - ball.offsetHeight) {
        Vy = -Vy
    }
    ///////active paddle
    let paddle = ball.offsetLeft < gamebox.offsetWidth / 2 ? userpaddle : aipaddle
    //console.log(paddle);
    let ballcenterY = ball.offsetTop + ball.offsetHeight / 2;
    let paddlecenterY = paddle.offsetTop + paddle.offsetHeight / 2;


    let angle = 0;

    if (checkCollision(paddle)) {
        if (paddle === userpaddle) {
            if (ballcenterY < paddlecenterY) {
                angle = -Math.PI / 4;
            }
            else if (ballcenterY > paddlecenterY) {
                angle = Math.PI / 4;
            }
            else {
                angle = 0;
            }
        } else if (paddle == aipaddle) {
            if (ballcenterY < paddlecenterY) {
                angle = 3 * (-Math.PI / 4);
            }
            else if (ballcenterY > paddlecenterY) {
                angle = 3 * (Math.PI / 4);
            }
            else {
                angle = 0;
            }
        }
        V = V + 0.2;
        Vx = V * Math.cos(angle);
        Vy = V * Math.sin(angle);
    }

 let  aidelay=0.3

 aipaddle.style.top=aipaddle.offsetTop+(ball.offsetTop-aipaddle.offsetTop-aipaddle.offsetHeight/2)*aidelay+'px';




    ball.style.left = ball.offsetLeft + Vx + 'px';

    ball.style.top = ball.offsetTop + Vy + 'px';

    if (zpressed && userpaddle.offsetTop > 55) {

        userpaddle.style.top = userpaddle.offsetTop - 5 + 'px'; //check
    }

    if (xpressed && userpaddle.offsetTop < gamebox.offsetHeight - userpaddle.offsetHeight + 45) {//+'px' why not

        userpaddle.style.top = userpaddle.offsetTop + 5 + 'px';//parsing
    }
    requestAnimationFrame(gameloop) // update your animation onscreen because
}
gameloop()

//ball movement in 2d it will have some velocity in x and y direction
//update the position of velocity     velocity of ball is vx2+vy2=v2
//off set is better it will work with every screen better than margin55202








