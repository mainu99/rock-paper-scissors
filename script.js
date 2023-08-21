
const buttons = document.querySelectorAll('button');

function getComputerChoice() {
    let option = ["rock", "paper", "scissor"];
    let choice = Math.floor(Math.random()*option.length);
    return option[choice];
}

let p, c, result
p = c = result = 0;

const winp = new Map([
    ["rock", "scissor"],
    ["paper", "rock"],
    ["scissor", "paper"]
  ]);

let round = 0;
function playRound(playerSelection, computerSelection) {
    if(computerSelection == playerSelection){
        //draw
        result = "IT's a DRAW"

    }
    else if(computerSelection == winp.get(playerSelection)) {
        //player wins round
        p++;
        console.log()
        console.log(winp.get(playerSelection));
    
        result = "Your " + playerSelection + " beats " + computerSelection;
    }
    else {
        //comp wins round
        c++
        result = "Your " + playerSelection + " Loses to  " + computerSelection;    }
    round++;

    document.getElementById("round").innerHTML = result;
    let winner = document.getElementById("result")
    if(round == 5) {
        round = 0;
        if(p > c) {
            winner.innerHTML = "Player Wins!!!"; 
        }
        else if(c > p) {
            winner.innerHTML = "Computer Wins *_*";
        }
        else {
            //draw
            winner.innerHTML = "DRAW :|";
        }
        p = c = 0;
    }

}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        // console.log(button.value);
        playRound(button.value, getComputerChoice())
    })
})
