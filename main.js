const ball = document.querySelector(".ball");
const container = document.querySelector(".container");
const button = document.querySelector("button");
const ceiling = document.querySelector(".ceiling");
const wall = document.querySelector(".wall");

//audio to play on the background
const backgroundAudio1 = new Audio("14 - Haunted House Bgm.mp3");
const backgroundAudio2 = new Audio("15 - Sub Castle Bgm.mp3");

//count down to start the game
function countDown(){
  let count = 3;

  setInterval(() => { 
    if (count > 0){
      //append the count down in the page
      console.log(count)
      count -= 1;
    }
  }, 1000)
  
  setTimeout(()=>{
    //append start word in the page
    console.log("start")
  },4000)
}

//calling countdown function
countDown();


//when you open for the first time
backgroundAudio1.play();

document.addEventListener("keydown", move);
let pixels = 0

function move(event){

  //when you come back to the page and interact or reload and interact
  backgroundAudio1.pause()
  backgroundAudio2.play()

  //testing position function
  let rectBall = ball.getBoundingClientRect();
  let rectButton = button.getBoundingClientRect();
  let rectWall = wall.getBoundingClientRect();
  // console.log("WALL POSITION OBJ: ")
  // console.log("RECTWALL: ")
  // console.log(rectWall)
  // console.log("RECTBALL: ")
  // console.log(rectBall)
  // console.log(rectBall)
  let buttonX = Math.floor(rectButton.x)
  let buttonY = Math.floor(rectButton.y)
  let ballX = Math.floor(rectBall.x)
  let ballY = Math.floor(rectBall.y)
  // console.log(container.offsetWidth)


  if (event.key === "w"){
    if (ballX >= 0.40*container.offsetWidth && ballX <= 0.6*container.offsetWidth){
      ball.style.bottom = '33%';
    } else {
      ball.style.bottom = '108%';
    }
  } else if(event.key === "s"){ 
    ball.style.bottom = '-2%';
  } else if (event.key === "a"){
    ball.style.right = "44%"
  } else if (event.key === "d"){
    ball.style.right = "-44%"
  } else if (event.key === "b"){
    ball.style.transitionDuration = "1000ms";
    ball.style.right = "1%";
    ball.style.bottom = "-2%";
  } 
 
  //audio to play when mario hit the button 
  const marioSound = new Audio("22 - Course Clear Fanfare.mp3")

  if (ballY <= 60 && ballX > 1.5*buttonX && event.key === "a"){
    // console.log("Ball is hitting the button")
    ball.transitionDuration = "4000ms";
    button.classList.add("button-hover");
    setTimeout(()=>{button.classList.remove("button-hover")},100)
    //here we play a game sound
    setTimeout(()=>{marioSound.play()})
    //here we take the user to another page that shows my portilofio 
    setTimeout(()=>{window.location.href = "https://github.com/victorphreitas";},1000)
  } else if (ballY <= 60 && ballX < 100 && event.key === "d"){
    ball.transitionDuration = "4000ms";
    // console.log("Ball is hitting the button")
    button.classList.add("button-hover");
    //maybe remove the setTimeout from the sound instance
    setTimeout(()=>{marioSound.play()})
    setTimeout(()=>{button.classList.remove("button-hover")},100)
    //here we take the user to another page that shows my portilofio 
    setTimeout(()=>{window.location.href = "https://github.com/victorphreitas";},1000)
  } else {
    console.log("ball is NOT hitting the button")
  }
  
  // console.log("BALL COORDINATES:")
  // console.log(rectBall)
  // console.log("x: " + rectBall.x)
  // console.log("y: " + rectBall.y)
  // console.log("BUTTON COORDINATES:")
  // console.log(rectButton)
  // console.log("x: " + rectButton.x)
  // console.log("y: " + rectButton.y)

  // console.log(event)
  //w equals 87
  //s equals 83
  //a equals 65
  //d equals 68
  //b equals 66

}

