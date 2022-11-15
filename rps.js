
let getComputerChoice = () => {
    let pick = Math.floor(Math.random() * 3)
    switch(pick){
        case 0:
            return "paper"
            break;
        case 1:
            return "rock"
            break;
        default:
            return "scissors"
            break;
    }
}

const res = new Map();
res.set("paper", "scissors");
res.set("scissors", "rock");
res.set("rock","paper");

let numRounds = 5;
let curChoice ="rock", score = 0, opp = 0, rounds = numRounds;
document.getElementById("rock-button").classList.add("selected");

let refresh = () => {
    document.getElementById("pscr").innerHTML = score;
    document.getElementById("ct").innerHTML = rounds;
    document.getElementById("cscr").innerHTML = opp;

    if (rounds <= 0 || opp > numRounds/2 || score > numRounds / 2) {
        document.getElementById("play-button").classList.add("game-over");
        document.getElementById("rock-button").classList.add("game-over");
        document.getElementById("paper-button").classList.add("game-over");
        document.getElementById("scissors-button").classList.add("game-over");
    }

}

let update = (log) => document.getElementById("log").innerHTML = log;

document.getElementById("rock-button").onclick = () => { 
    document.getElementById(`${curChoice}-button`).classList.remove("selected"); 
    curChoice="rock"; document.getElementById("rock-button").classList.add("selected");
    update("Selected Rock!")
}


document.getElementById("paper-button").onclick = () => { 
    document.getElementById(`${curChoice}-button`).classList.remove("selected");
    curChoice="paper"; document.getElementById("paper-button").classList.add("selected");
    update("Selected Paper!");
}


document.getElementById("scissors-button").onclick = () => {
    document.getElementById(`${curChoice}-button`).classList.remove("selected");
    curChoice="scissors"; document.getElementById("scissors-button").classList.add("selected");
    update("Selected Scissors!"); 
}

document.getElementById("play-button").onclick = () => {
    if (rounds == 0 || opp > numRounds / 2 || score > numRounds / 2) return;
    game();
    refresh();
}

let decideWinner = (computer) => {

    let player1 = curChoice;
    let computer1 = computer.toLowerCase();

    if (player1 == computer1) return 0;
    if (res.get(player1) == computer1) return -1;
    return 1;
}

let game = () => {
    let res = decideWinner(getComputerChoice());
    switch (res) {
        case 1:
            ++score;
            --rounds;
            update("You won the round.");
            break;
        case 0:
            --rounds;
            update("Tie round!");
            break;
        default:
            update("Computer wins the round.");
            --rounds;
            ++opp;
            break;
    }


}

/**
let game = () => {
    let score = 0, opp=0;
    for (i=0; i<5; i++){

        if (opp > 2 || score > 2) break;

        let ans = curChoice;
        console.log(ans.toLowerCase());
        if (res.get(ans.toLowerCase()) == undefined) {
            console.log("Illegal Input! Try Again");
            --i;
            continue;0
        }

        let singleGame = decideWinner(ans.toLowerCase(), getComputerChoice())
        switch(singleGame){
            case 1:
                score++;
                document.querySelector("#player-score.span").innerHTML = `${score}`;
                document.querySelector("#counter.span").innerHTML = `${5-i}`
                break;
            case 0:
                break;
            default:
                opp++;
                document.querySelector("#comp-score.span").innerHTML = `${opp}`;
                break;
        }
    }

    switch(score) {
        case 3:
        case 4:
        case 5:
            console.log("Player wins!");
            break;
        case 2:
        case 1:
        case 0:
            if (opp <  score) { console.log("Player wins!")}
            else if (opp == score) { console.log("Tie Game!")}
            else console.log("Computer wins!");
            break;
    }
}*/


refresh();
console.log(document.getElementById("scissors-button").innerHTML);