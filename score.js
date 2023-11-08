
let currentScore = 100;


<<<<<<< HEAD
function addSpinClickEvent(button) {
    button.addEventListener('click', function(){
        document.getElementById("buttonClickSound").play();
        randomNumber();
        setBetAmount();
        winnerCheck();
    });
};
=======
function addEventListener(button, callback){
    button.addEventListener('click', function(){
        randomNumber();
        winnerCheck();
        //checkAvailableCredit();
        callback();
    });
}

addEventListener(spin1, function(){
    setBetAmount("btn1");
    randomNumber();
    winnerCheck();
    updateCreditScreen();
    //checkAvailableCredit();

>>>>>>> 2370ec70eb4fdf12a2d215911068964f39a2f0a1

addSpinClickEvent(spin1);
addSpinClickEvent(spin2);
addSpinClickEvent(spin3);

<<<<<<< HEAD


let betAmount = 0;

function setBetAmount(buttonId){
    if(buttonId === "btn1"){
        betAmount = 1;
    } else if (buttonId === "btn2"){
        betAmount = 5;
    } else if (buttonId === "btn3"){
        betAmount = 10;
    }
}

=======
addEventListener(spin2, function(){
    setBetAmount("btn2");
    randomNumber();
    winnerCheck();
    updateCreditScreen();
    //checkAvailableCredit();


});
addEventListener(spin3, function(){
    setBetAmount("btn3");
    randomNumber();
    winnerCheck();
    updateCreditScreen();
    //checkAvailableCredit();


});
>>>>>>> 2370ec70eb4fdf12a2d215911068964f39a2f0a1

const buttons = document.querySelectorAll(".button-class");

buttons.forEach(button => {
button.addEventListener("click", function() {
    if(button.id === "btn1" && currentScore >= 2) {
        currentScore -= 1; 
<<<<<<< HEAD
        setBetAmount("btn1");

    }else if (button.id === "btn2" && currentScore >= 6) {
        currentScore -= 5
        setBetAmount("btn2");

    }else if (button.id === "btn3" && currentScore >= 11) {
        currentScore -= 10;
        setBetAmount("btn3");
=======

    }else if (button.id === "btn2" && currentScore >= 6) {
        currentScore -= 5

    }else if (button.id === "btn3" && currentScore >= 11) {
        currentScore -= 10;
>>>>>>> 2370ec70eb4fdf12a2d215911068964f39a2f0a1

    }else{
        const playAgainURL = "playAgain.html";
        const newWindow =  window.open(playAgainURL, '_blank')
        document.getElementById("You-lose-sound").play();

        setTimeout (function() {
        newWindow.close();
        location.reload();
         }, 3000);
         
    }
    
    updateCreditScreen();
    });
});



function updateCreditScreen() {
    document.getElementById("score-card").textContent = "Credit: " + "$" + currentScore;
}

<<<<<<< HEAD
updateCreditScreen();
=======
updateCreditScreen();
>>>>>>> 2370ec70eb4fdf12a2d215911068964f39a2f0a1
