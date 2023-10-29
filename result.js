
const resultContainer = document.getElementById("result-card");
resultContainer.textContent = ("PLACE YOUR BET ");


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

        addCredits();

    } 
    else{
        resultContainer.textContent = ("Try again!")
    }

}

function addCredits(){
    currentScore *=2;
    updateCreditScreen();
}