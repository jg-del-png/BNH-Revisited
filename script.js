const choices = ["Bear", "Ninja", "Hunter"];
let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById("results").innerHTML = `
        <div class="resultBox">
            <p><strong>${result}</strong></p>
            <p>You chose: ${playerChoice}</p>
            <p>Computer chose: ${computerChoice}</p>
            <button onclick="resetGame()">Play Again</button>
        </div>
    `;

    updateWinCounter();
}


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
    if (player === computer) return "It's a tie!";

    if (
        (player === "Bear" && computer === "Ninja") ||
        (player === "Ninja" && computer === "Hunter") ||
        (player === "Hunter" && computer === "Bear")
    ) {
        playerWins++;
        return "You win!";
    } else {
        computerWins++;
        return "Computer wins!";
    }
}

function updateWinCounter() {
    document.getElementById("playerWins").textContent = playerWins;
    document.getElementById("computerWins").textContent = computerWins;
}

function resetGame() {
    document.getElementById("results").innerHTML = "";
}
