function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor((Math.random()*3));
    let computerChoice = choices[randomIndex];
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let message;
    if(playerSelection == computerSelection) {
message = `This is a tie, you both choose ${playerSelection}`
    } else if ((playerSelection == 'paper' && computerSelection == 'rock') ||  (playerSelection == 'rock' && computerSelection == 'scissors') ||  (playerSelection == 'scissors' && computerSelection == 'paper')) {
        message = `You Win! ${playerSelection} beats ${computerSelection}`
    }  else if ((playerSelection == 'paper' && computerSelection == 'scissors') ||  (playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'rock')) {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
return message;
};
console.log();
function game(){
    
    let scores = {computer: 0, you: 0, ties:0};
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Write you choice(rock, paper, scissors) correctly');
        const computerSelection = getComputerChoice();
        let point = playRound(playerSelection, computerSelection);
        if(point.includes('Win')){
            scores['computer']++
        } else if (point.includes('Lose')) {
            scores['you']++
        }else if (point.includes('tie')) {
            scores['ties']++
        }

    }
console.log(scores);

}
game();