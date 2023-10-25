//score.js file
let currentScore = 100;


spin.addEventListener("click", function(){
    winnerCheck();
    checkAvailableCredit();

});

function checkAvailableCredit(){
    if(currentScore > 1) {
        currentScore -= 1; 
        updateCreditScreen();
 
    }else {
        const playAgainURL = "playAgain.html";
        const newWindow =  window.open(playAgainURL, '_blank')

        setTimeout (function() {
        newWindow.close();
        location.reload();
         }, 2000);
         
    }
    
    return currentScore;
}

function updateCreditScreen() {
    document.getElementById("score-card").textContent = "Credit: " + "$" + currentScore;
}

updateCreditScreen(); 

//end of score.js file 