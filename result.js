
const resultContainer = document.getElementById("result-card");
resultContainer.textContent = ("Press SPIN button!!");


/*resultContainer.textContent = (cardOneDiv.textContent === cardTwoDiv.textContent && cardTwoDiv.textContent === cardThreeDiv.textContent) ? "You're a Jackpot Winner!!" : "Try Again!!";*/
function winnerCheck(){
if(cardOneDiv.textContent == cardTwoDiv.textContent && cardTwoDiv.textContent == cardThreeDiv.textContent){
    resultContainer.textContent = ("Jackpot");
    const winnerPageURL = "winnerPage.html";
    const winWindow = window.open(winnerPageURL, '_blank');
    spin.disabled = true;

    setTimeout(function() {
        winWindow.close();
        spin.disabled = false;
    }, 6000);

} 
else{
    resultContainer.textContent = ("Try again!")
}

}

function addCredits(){
    currentScore *=2;
    updateCreditScreen();
}