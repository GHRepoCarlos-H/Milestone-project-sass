
const cardOneDiv = document.getElementById("card-1");
const cardTwoDiv = document.getElementById("card-2");
const cardThreeDiv = document.getElementById("card-3");
const spin = document.getElementById("btn");

function randomNumber(){ //Math.random explained by YouTube video "Frontend Web Development Bootcamp course" by freedCodeCamp.org, time stamp 8:19.05. 
    const ranNum1 = Math.floor(Math.random() * 10) +1;
    const ranNum2 = Math.floor(Math.random() * 10) +1;
    const ranNum3 = Math.floor(Math.random() * 10) +1;

    cardOneDiv.textContent = ranNum1;
    cardTwoDiv.textContent = ranNum2;
    cardThreeDiv.textContent = ranNum3;

    cardOneDiv.style.fontSize= "150px";
    cardTwoDiv.style.fontSize= "150px";
    cardThreeDiv.style.fontSize= "150px";

}

spin.addEventListener("click", randomNumber);

randomNumber();

