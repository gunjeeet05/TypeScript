var _a;
var arr = ["rock", "paper", "scissor"];
var winnerDict = {};
winnerDict = (_a = {},
    _a["rock"] = "paper",
    _a["paper"] = "scissor",
    _a["scissor"] = "rock",
    _a);
function play(a) {
    resDiv.innerText = calculateWinner(a, compChoice());
    return "";
}
function calculateWinner(user, comp) {
    if (user === comp) {
        return "Tie";
    }
    else if (winnerDict[comp] === user) {
        return "You win";
    }
    else {
        return "You lost";
    }
}
function compChoice() {
    var computer = arr[Math.floor(Math.random() * 3)];
    var compDiv = document.getElementById("computer");
    compDiv.innerText = computer;
    return computer;
}
var resDiv = document.getElementById("result");
resDiv.innerText = "hello";
