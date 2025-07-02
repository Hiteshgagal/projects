const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelector(".controls i")

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setIntervalId;
let score = 0;

//getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const changeFoodPosition = () => {
    //passing a random 0 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    //clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert("Game Over :Press OK to replay...");
    location.reload();

}

const changeDirection = (e) => {

    // changing valetary value based on key press
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }

}
//   controls.forEach(Key => {
//       key.addEventListener("click", () => changeDirection({ key: key.dataset.key }));
//      //callling changedirection on each key click and passing  key dataset value as an object
//   });

function initGame() {
    if (gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    // cheking if  thesnake hit the food
    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]); // pushing food position to snake body array
        score++; //increment score by 1

        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        //shpting forward  the values of the elements in the snake body by one
        snakeBody[i] = snakeBody[i - 1];

    }
    snakeBody[0] = [snakeX, snakeY]; // setting first elements of snake body to current snake position


    //Upadeting the snake's head positionbased on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    //cheking if the snake's head is out of wall, if so settting gameOver to true
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        //adding div for each part of the snake's body
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        //cheking if the snake's head is out of wall, if so settting gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;

        }
    }

    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
setIntervalId = setInterval(initGame, 125);
document.addEventListener("keydown", changeDirection);

// const playBoard=document.querySelector(".play-board");const scoreElement=document.querySelector(".score");const highScoreElement=document.querySelector(".high-score");const controls=document.querySelectorAll(".controls i");let gameOver=false;let foodX,foodY;let snakeX=5,snakeY=5;let velocityX=0,velocityY=0;let snakeBody=[];let setIntervalId;let score=0;let highScore=localStorage.getItem("high-score")||0;highScoreElement.innerText=`High Score: ${highScore}`;const updateFoodPosition=()=>{foodX=Math.floor(Math.random()*30)+1;foodY=Math.floor(Math.random()*30)+1;}
// const handleGameOver=()=>{clearInterval(setIntervalId);alert("Game Over! Press OK to replay...");location.reload();}
// const changeDirection=e=>{if(e.key==="ArrowUp"&&velocityY!=1){velocityX=0;velocityY=-1;}else if(e.key==="ArrowDown"&&velocityY!=-1){velocityX=0;velocityY=1;}else if(e.key==="ArrowLeft"&&velocityX!=1){velocityX=-1;velocityY=0;}else if(e.key==="ArrowRight"&&velocityX!=-1){velocityX=1;velocityY=0;}}
// controls.forEach(button=>button.addEventListener("click",()=>changeDirection({key:button.dataset.key})));const initGame=()=>{if(gameOver)return handleGameOver();let html=`<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;if(snakeX===foodX&&snakeY===foodY){updateFoodPosition();snakeBody.push([foodY,foodX]);score++;highScore=score>=highScore?score:highScore;localStorage.setItem("high-score",highScore);scoreElement.innerText=`Score: ${score}`;highScoreElement.innerText=`High Score: ${highScore}`;}
// snakeX+=velocityX;snakeY+=velocityY;for(let i=snakeBody.length-1;i>0;i--){snakeBody[i]=snakeBody[i-1];}
// snakeBody[0]=[snakeX,snakeY];if(snakeX<=0||snakeX>30||snakeY<=0||snakeY>30){return gameOver=true;}
// for(let i=0;i<snakeBody.length;i++){html+=`<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;if(i!==0&&snakeBody[0][1]===snakeBody[i][1]&&snakeBody[0][0]===snakeBody[i][0]){gameOver=true;}}
// playBoard.innerHTML=html;}
// updateFoodPosition();setIntervalId=setInterval(initGame,window.innerWidth>=800?100:160);document.addEventListener("keyup",changeDirection);