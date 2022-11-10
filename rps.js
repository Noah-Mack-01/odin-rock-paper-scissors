
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


let decideWinner = (player, computer) => {

    let player1 = player.toLowerCase();
    let computer1 = computer.toLowerCase();

    if (player1 == computer1) return 0;
    if (res.get(player1) == computer1) return -1;
    return 1;
}

let game = () => {
    let score = 0, opp=0;
    for (i=0; i<5; i++){
        let ans = prompt("Rock, Paper or Scissors?");
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
                break;
            case 0:
                break;
            default:
                opp++;
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
}