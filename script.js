
const button = document.getElementById("roll");
const button2 = document.getElementById("restart");
const image = document.getElementById("diceimage");
var score = 0;
button2.style.display="none"

button.addEventListener("click", () =>{
    var randomNumber = Math.floor(Math.random() * 6)+1; 
    document.getElementById("randomNumber").innerHTML = randomNumber;
    image.src = `img/dice${randomNumber}.png`;
    function myScore(){
    if(randomNumber!=1){
    score += randomNumber;
    document.getElementById("score").innerHTML = score;
    }
    if(randomNumber==1){
        document.getElementById("roll").disabled = true;
        button2.style.display = "inline";
        button.style.display="none";
    }
    if(randomNumber==1){
    document.getElementById("score").innerHTML = "YOU LOSE!! BETTERLUCK NEXT TIME!";
    
    }
    }
    
    myScore()

    function checkScore(){
    if(score>20)(
    document.getElementById("score").innerHTML="YOU WIN!!! Restart the game!"
    )
    if(score>20){
        button2.style.display = "inline";
        button.style.display="none";
    }
    }
    checkScore()
   
})

button2.addEventListener("click", ()=>{
    document.location.reload() 
})

