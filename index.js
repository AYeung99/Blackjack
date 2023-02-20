let player = {
    name: "Player",
    chips: 145
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if(randomCard > 10){
        return 10;
    }
    else if(randomCard === 1){
        return 11;
    }
    else{
        return randomCard;
    }
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    if(sum<21){
        message = "Another card?";
    }
    
    else if(sum===21){
        message = "Blackjack";
        hasBlackJack = true;
    }
    
    else{
        message = "Too many";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
    }
}
