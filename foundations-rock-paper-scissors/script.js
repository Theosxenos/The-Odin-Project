const rpsarray = ['Rock', 'Paper', 'Scissors'];
const gamebuttons = document.querySelectorAll("button");
const scorediv = document.querySelector(".results");

let playerscore = 0;
let pcscore = 0;
let winscore = 5; // The score amount for one party to win
let messagelimit = 5;

gamebuttons.forEach(b => {
    b.addEventListener("click", choiceButtonClick);
});


function choiceButtonClick(e)
{
    let roundresult = playRound(e.target.id, getComputerChoice());

    keepScore(roundresult);

}

// The function returns Rock, Paper or Scissors as a choice of the "computer"
function getComputerChoice()
{
    // Generate a random integer that's >= 0 and <= 2
    let randomnumber = Math.floor(Math.random() * 3);

    return randomnumber;
}

// Plays one round of 'Rock, Paper, Scissors'
// Return 1 if won, 0 if draw, -1 if lost
function playRound(playerSelection, computerSelection)
{ 
    
    let playerchoiceindex = rpsarray.indexOf(playerSelection);
    
    let roundresult = 0;
    let roundresultel = document.createElement("p");
    roundresultel.innerText = `Player: ${playerSelection}; PC: ${rpsarray[computerSelection]}.`;
    
    trimScoreDiv();

    if (playerchoiceindex == computerSelection)
    {
        roundresultel.innerText += " The round is a draw!" ;
        scorediv.appendChild(roundresultel);

        return 0;
    }

    let winner = "";
    switch(playerchoiceindex + computerSelection)
    {
        case 1:
            winner = rpsarray[1];
            break;
        case 2:
            winner = rpsarray[0];
            break;
        case 3:
            winner = rpsarray[2];
            break;
    }

    if(playerSelection == winner)
    {
        roundresultel.innerText += " The Player wins the round!";
        roundresult = 1;
    }
    else
    {
        roundresultel.innerText += " The PC wins the round!";
        roundresult = -1;
    }

    scorediv.appendChild(roundresultel);
    
    return roundresult;

}

function trimScoreDiv()
{
    if(scorediv.children.length >= messagelimit)
    {
        scorediv.removeChild(scorediv.firstChild);
    }
}

// 
function keepScore(roundscore)
{

    // Process round score
    if( roundscore == 0) return;

    if(roundscore > 0)
    {
        playerscore++;
    }
    else
    {
        pcscore++;
    }

    if(playerscore < winscore && pcscore < winscore)
    {
        return;
    }
    
    let winmessagel = document.createElement("p");
    winmessagel.className = "win";
    winmessagel.innerHTML = "<em>Game Over! </em>";

    let winner = "";

    // player won
    if (playerscore == winscore)
    {
        winner = "Player";
    }
    // Computer won
    else if (pcscore == winscore)
    {
        winner = "PC";
    }

    winmessagel.innerText += ` The ${winner} won!`;
    scorediv.innerHTML = '';
    scorediv.appendChild(winmessagel);

    pcscore = 0;
    playerscore = 0;

}