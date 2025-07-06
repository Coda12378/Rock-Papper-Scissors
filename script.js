// Imam za sada dva nacina da pristupim ovom zadatku. 
// 1) Buducu da mi math.random vraca
// brojeve izmedju 0 i 9, prva ideja mi je bila da napravim da ona ide o 0 do 9,
// tako da prva 4 broja budu kamen, pa sledeca 3 papir, i zadnja 3 makaze, medjutim
// tu kao potencijalni problem vidim sto ce kamen imati prednost jer ima 4 broja.
// 2) Trazi sam na internet da vidim da li postoji nacin da se ovoj funkciji dodaju
// neke granice, medjutim to moze da se uradi samo kroz pravljenje namjenske funkcije
// tako da cu vjerovatno uraditi tu ideju, nakon cega cu pitati chat-gpt da mi da
// jos neku ideju bez da pise kod. 
// Vidio sam jos jednu foru, a to je da koristim Math.random takav kakav je i da za 
// okvire uzmem od 0 do 0.33, 0.66 i 0.99

// function randomBroj(minimum, maksimum){
//     let min = minimum;
//     let max = maksimum;
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
// }

// function getComputerChoice(){
//     let opcija = randomBroj(1,3);
//     if (opcija === 1){
//         return "rock";
//     }
//     else if( opcija ===2){
//         return "papper";
//     }
//     else{
//         return "scissor";
//     }
// }

const ispis_rezultata = document.querySelector("div");

function getComputerChoice(){
    let broj = Math.random();
    if(broj >= 0 && broj<=0.33){
        return "rock";
    }
    else if(broj >0.33 && broj<=0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

// function getHumanChoice(){
//     return prompt("What do you want rock, paper or scissors?");
// }

function playRound(humanChoice){
    const computerSelection = getComputerChoice();
    if(humanChoice.toLowerCase()==="rock" && computerSelection.toLowerCase()==="scissors"){
        ispis_rezultata.textContent="You won. Rock beats Scissors";
        return "human";
    }
    else if(humanChoice.toLowerCase()==="rock" && computerSelection.toLowerCase()==="paper"){
        ispis_rezultata.textContent="You lose. Paper beats Rock";
        return "computer";
    }
    else if(humanChoice.toLowerCase()==="rock" && computerSelection.toLowerCase()==="rock"){
        ispis_rezultata.textContent="Draw.";
    }
    else if(humanChoice.toLowerCase()==="paper" && computerSelection.toLowerCase()==="rock"){
        ispis_rezultata.textContent="You won. Paper beats Rock";
        return "human";
    }
    else if(humanChoice.toLowerCase()==="paper" && computerSelection.toLowerCase()==="scissors"){
        ispis_rezultata.textContent="You lose. Scissors beats Paper";
        return "computer";
    }
    else if(humanChoice.toLowerCase()==="paper" && computerSelection.toLowerCase()==="paper"){
        ispis_rezultata.textContent="Draw.";
    }
    else if(humanChoice.toLowerCase()==="scissors" && computerSelection.toLowerCase()==="paper"){
        ispis_rezultata.textContent="You won. Scissors beats Paper";
        return "human";
    }
    else if(humanChoice.toLowerCase()==="scissors" && computerSelection.toLowerCase()==="rock"){
        ispis_rezultata.textContent="You lose. Rock beats Scissors";
        return "computer";
    }
    else{
        ispis_rezultata.textContent="Draw.";
    } 
}


function playGame(){
    let gameOver = false;
    let humanScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button)=>{
        button.addEventListener("click",()=>{
            if (gameOver) return;
            rezultat = playRound(button.getAttribute("class"));
            if(rezultat === "human"){
                humanScore+=1;
            }else if(rezultat === "computer"){
                computerScore+=1;
            }

            if(humanScore===5){
                ispis_rezultata.textContent = `YOU WON. ${humanScore}:${computerScore}`;
                gameOver = true;
            }else if(computerScore===5){
                ispis_rezultata.textContent=`YOU LOST. ${humanScore}:${computerScore}`;
                gameOver = true;
            }
        });
    });
}

playGame();