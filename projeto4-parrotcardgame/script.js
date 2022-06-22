const cardsNames = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
let numberOfCards = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14");
let stepsCounter = 0;
let selected1, selected2;





verifyNumberCards(numberOfCards);


function verifyNumberCards(){
    
    if (numberOfCards < 4){
        alert ("Deve ser um número maior do que 4");
        verifyNumberCards();
    } else if (numberOfCards > 14){
        alert ("Deve ser um número menor do que 14");
        verifyNumberCards();
    } else if (numberOfCards %2 != 0){
        alert ("Deve ser um número par!");
        verifyNumberCards();
    }
}

function shuffleCardsArray(){
    return Math.random() - 0.5;
}

function sortingCards(numberOfCards){
    let sortingArray = [];
    for (let i = 0; i < numberOfCards/2; i++){
        sortingArray.push(cardsNames[i]);
        sortingArray.push(cardsNames[i]);
    }
    
    sortingArray.sort(shuffleCardsArray);
    for(let sortingAmount = 0; sortingAmount < numberOfCards; sortingAmount++){
        jsCard = `
        <li class="template-card" onclick="flipping(this)">
            <img class="card-front" src="./uteis/front.png">
            <img class="card-back" src="./uteis/${sortingArray[sortingAmount]}parrot.gif">
        </li>
        `

        document.querySelector('ul').innerHTML += jsCard
    }
}
sortingCards(numberOfCards);


function flipping(card){
    selected1 = document.querySelector('.temp-turn');
    card.classList.toggle('temp-turn');
    if (selected1 !== null && selected1 !== card){
        selected2 = card
        compareTest();
    }
    stepsCounter ++;
}

function compareTest(){
    if (selected1.innerHTML !== selected2.innerHTML){
        setTimeout(wrongMatch, 1000);
    } else {
        selected1.classList.remove('temp-turn');
        selected2.classList.remove('temp-turn');
        selected1.classList.add('card-back');
        selected2.classList.add('card-back');
        reset();
    }
    setTimeout(whenTheGameEnds, 2000)
}

function wrongMatch(){
    selected1.classList.remove('temp-turn');
    selected2.classList.remove('temp-turn');
    reset();
}

function reset() {
    selected1, selected2 = null;
}

function whenTheGameEnds(){
    let condition = document.querySelectorAll('li:not(.card-back)');
    if (condition.length === 0){
        alert(`"Você venceu o jogo em um total de ${stepsCounter/2} jogadas"`)
    }
}