// initializing some values-----------------
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;



// selection Element--------------------
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guseeingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

const lostWonMessage = document.createElement("p");


form.addEventListener("submit",function(e){
    e.preventDefault();
    attempts++;
    if(attempts === 5){
        guseeingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempts < 6){
        let guessNumber = Number(guseeingNumber.value)
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts : ${totalAttempts-attempts}`;
    }
})

function checkResult(guseeingNumber){
const randomNumber = getRandomNumber(5);
if(guseeingNumber === randomNumber){
    resultText.innerHTML = `You Have Won`;
    totalWons++;
}
else{
    resultText.innerHTML = `You Have Lost, Random Number Was : ${randomNumber}`;
    totalLosts++;
}

lostWonMessage.innerHTML = `Won : ${totalWons} , Lost : ${totalLosts}`;
lostWonMessage.classList.add("large-text");
cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}








