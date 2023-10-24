
let currentScore = 100;


spin.addEventListener("click", function(){
    winnerCheck();
    checkAvailableCredit();

});

function checkAvailableCredit(){
    if(currentScore > 0) {
        currentScore -= 1; 
        updateCreditScreen();
 
    }else {
        const playAgainURL = "playAgain.html";
        const newWindow =  window.open(playAgainURL, '_blank')

        setTimeout (function() {
        newWindow.close();
        location.reload();
         }, 6000);
         
    }
    
    return currentScore;
}

function updateCreditScreen() {
    document.getElementById("score-card").textContent = "Credit: " + "$" + currentScore;
}

updateCreditScreen(); 