const cardOneContainer = document.getElementById("card-1");
const cardTwoContainer = document.getElementById("card-2");
const cardThreeContainer = document.getElementById("card-3");
const spin = document.getElementById("btn");

function randomNumber(){
    const ranNum1 = Math.floor(Math.random() * 10) +1;
    const ranNum2 = Math.floor(Math.random() * 10) +1;
    const ranNum3 = Math.floor(Math.random() * 10) +1;

    cardOneContainer.textContent = ranNum1;
    cardTwoContainer.textContent = ranNum2;
    cardThreeContainer.textContent = ranNum3;

    cardOneContainer.style.fontSize= "150px";
    cardTwoContainer.style.fontSize= "150px";
    cardThreeContainer.style.fontSize= "150px";

}

spin.addEventListener("click", randomNumber);

randomNumber();

const resultContainer = document.getElementById("result-card");

if(cardOneContainer.textContent == cardTwoContainer.textContent && cardTwoContainer.textContent == cardThreeContainer.textContent){
    resultContainer.textContent = ("You won the jackpot")
} else{
    resultContainer.textContent = ("Try again!")
}

console.log(resultContainer.textContent);