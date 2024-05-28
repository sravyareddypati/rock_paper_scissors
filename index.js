

let userChoice=-1;
let cWon=0;
let uWon=0;



function generateRandom() {
    return Math.floor((Math.random() * 3));
  }

  function displayResult(cWon, uWon) {
    let result=document.querySelector("#result");
    result.innerText=`userScore ${uWon} computerChoice ${cWon}`;
 
  }
  function presentResult(text){
    let presentResult=document.querySelector("h2");
    presentResult.innerHTML=`You ${text}`
    if(text==="win"){
        presentResult.style.color="green";
    }else if(text==="loss"){
        presentResult.style.color="red";
    }else{
        presentResult.style.color="black";
    }
  }
let rock=document.querySelector("#rock");
rock.addEventListener("click",()=>{
    console.log("rock selected");
    userChoice=0;
    cChoice=generateRandom();
    if(userChoice===cChoice){
        console.log("draw");
        presentResult("draw");
    }else if(cChoice===1){
        console.log("loss");
        presentResult("loss");
        cWon++;
    }else if(cChoice===2){
        console.log("win");
        presentResult("win")
        uWon++
    }
    displayResult(cWon,uWon);

});
let paper=document.querySelector("#paper");
paper.addEventListener("click",()=>{
    console.log("paper selected");
    userChoice=1;
    cChoice=generateRandom();
    if(userChoice===cChoice){
        console.log("draw");
        presentResult("draw")
    }else if(cChoice===2){
        console.log("loss");
        presentResult("loss")
        cWon++;
    }else if(cChoice===0){
        console.log("win");
        presentResult("win")
        uWon++
    }
    displayResult(cWon,uWon);
    

});
let siccors=document.querySelector("#siccors");
siccors.addEventListener("click",()=>{
    console.log("siccors selected");
    userChoice=2;
    cChoice=generateRandom();
    if(userChoice===cChoice){
        console.log("draw");
        presentResult("draw")
    }else if(cChoice===0){
        console.log("loss");
        presentResult("loss")
        cWon++;
    }else if(cChoice===1){
        console.log("win");
        presentResult("win")
        uWon++;
    }
    displayResult(cWon,uWon);

});

