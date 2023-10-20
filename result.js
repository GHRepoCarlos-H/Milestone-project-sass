
const resultContainer = document.getElementById("result-card");

/*resultContainer.textContent = (cardOneDiv.textContent === cardTwoDiv.textContent && cardTwoDiv.textContent === cardThreeDiv.textContent) ? "You're a Jackpot Winner!!" : "Try Again!!";*/
function winnerCheck(){
if(cardOneDiv.textContent == cardTwoDiv.textContent && cardTwoDiv.textContent == cardThreeDiv.textContent){
    resultContainer.textContent = ("Jackpot")
} 
else{
    resultContainer.textContent = ("Try again!")
}

console.log(resultContainer.textContent); 

}