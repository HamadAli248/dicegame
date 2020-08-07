document.onreadystatechange = function(){
    if(document.readyState=='loaded' || document.readyState=='complete')
        alert('Game Instructions: First player to get a score past 30 wins');
    }
    

const button = document.getElementById("roll");
const button2 = document.getElementById("restart");
const buttonplayer2 = document.getElementById("roll2");
const image = document.getElementById("diceimage");
const img = document.getElementById('diceimage2')
let score = 0;
let score2 = 0;

button2.style.display = "none";
buttonplayer2.style.display="none"

button.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    document.getElementById("randomNumber").innerHTML = randomNumber;
    image.src = `img/dice${randomNumber}.png`;
    button.style.display="none";
    buttonplayer2.style.display = "inline"

    function myScore() {
        score += randomNumber;
        document.getElementById("score").innerHTML = score;
    }
    myScore()

    function checkScore() {
        if (score > 30)(
            document.getElementById("score").innerHTML = "YOU WIN!!!"
        )
        if (score > 30) {
            document.getElementById("score2").innerHTML = " Betterluck next time!"
        }
        if (score > 30) {
            document.getElementById("roll2").disabled = true;
        }
        if (score > 30) {
            document.getElementById("roll").disabled = true;
        }
        if (score > 30 ) {
            button2.style.display = "inline";
            buttonplayer2.style.display = "none";
            button.style.display="none";
        }

    }
    checkScore()

})

button2.addEventListener("click", () => {
    document.location.reload()
})

buttonplayer2.addEventListener("click", () => {
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("randomNumber2").innerHTML = randomNumber2;
    img.src = `img/dice${randomNumber2}.png`;
    buttonplayer2.style.display = "none";
    button.style.display="inline";
    

    function myScore2() {
        score2 += randomNumber2;
        document.getElementById("score2").innerHTML = score2;
    }
    myScore2()

    function checkScore2() {
        if (score2 > 30)(
            document.getElementById("score2").innerHTML = "YOU WIN!!!"
        )
        if (score2 > 30) {
            document.getElementById("score").innerHTML = "Betterluck next time!"
        }
        if (score2 > 30) {
            document.getElementById("roll").disabled = true;
        }
        if (score2 > 30) {
            document.getElementById("roll2").disabled = true;
        }
        if (score2 > 30 ) {
            button2.style.display = "inline";
            buttonplayer2.style.display = "none";
            button.style.display="none";
        }
    }
    checkScore2()

})

        



