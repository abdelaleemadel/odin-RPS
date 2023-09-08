/* Creates random choice for the computer */
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor((Math.random()*3));
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

/* compares the user's choice with the computers' to determine who wins */
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

/* repeat the game 5 times and keeps score */
let scores = {computer:0, you:0, ties:0};
function game(playerSelection, computerSelection){

        let point = playRound(playerSelection, computerSelection);
        if(point.includes('Win')){
            scores['you']++
        } else if (point.includes('Lose')) {
            scores['computer']++
        }else if (point.includes('tie')) {
            scores['ties']++
        }

}
/* Update the current results on the screen */
function updateResults(){
    $('#computerScore').text(scores['computer']);
    $('#userScore').text(scores['you']);
    $('#tie').text(scores['ties']);
}
/* Announce the winner */ 
function announceWinner(){
    let winner = ``
    if(scores['computer']==5){
        winner += `Good Luck next time, the computer has won :(`;
        $('button').eq(i).addClass('disabled');
    } else if(scores['you']==5) {
        winner += `Congratulations, You have won :)`;
        $('button').addClass('disabled');

    }
    return winner;
}
/* --------------------- */
/* Events  */
$('button').click(function(event){
    if(!((scores['computer']>=5) || scores['you'] >= 5))
{const playerSelection = $(event.target).attr('data-value');
const computerSelection = getComputerChoice();
game(playerSelection, computerSelection);
$('#computerChoice').text(computerSelection);
updateResults()
}
if(announceWinner()) {
$('#finalResult').text(' '+announceWinner())
}
})