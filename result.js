
const resultContainer = document.getElementById("result-card");


/*resultContainer.textContent = (cardOneDiv.textContent === cardTwoDiv.textContent && cardTwoDiv.textContent === cardThreeDiv.textContent) ? "You're a Jackpot Winner!!" : "Try Again!!";*/
function winnerCheck(){
if(cardOneDiv.textContent == cardTwoDiv.textContent && cardTwoDiv.textContent == cardThreeDiv.textContent){
    resultContainer.textContent = ("Jackpot");
    const winnerPageURL = "winnerPage.html";
    window.open(winnerPageURL, '_blank');
    spin.disabled = true;
} 
else{
    resultContainer.textContent = ("Try again!")
}

return resultContainer.textContent; 

}

//Close winning screen and reset the page. W3Schools for reference (Window close();)

const gameReset = document.getElementById("reset-button");
var winnerPageWindow;

function resetScreen(){
    if (winnerPageWindow) {
        winnerPageWindow.close();
        
    }
    window.location.reload();
}

gameReset.addEventListener("click", resetScreen);

