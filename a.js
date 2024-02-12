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
    showData(user, comp);
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
function showData(user, comp) {
    var img = document.getElementById("img");
    var img2 = document.getElementById("img2");
    img.src = "./images/".concat(user, ".png");
    img2.src = "./images/".concat(comp, ".png");
    var user1 = document.getElementById("userChoice");
    user1.innerText = "User Chose " + user;
    var comp1 = document.getElementById("compChoice");
    comp1.innerText = "Computer Chose ".concat(comp);
}
function compChoice() {
    var computer = arr[Math.floor(Math.random() * 3)];
    return computer;
}
var resDiv = document.getElementById("result");
resDiv.innerText = "hello";
