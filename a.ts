const arr:string[]=["rock", "paper", "scissor"];
let winnerDict:{
    [user:string]:string
}={};

winnerDict={
    ["rock"]:"paper", 
    ["paper"]:"scissor", 
    ["scissor"]:"rock"
}

function play(a:string):string{
    
    resDiv.innerText=calculateWinner(a, compChoice()) as string;
    return "";

}
function calculateWinner(user:string, comp:string){
    showData(user, comp);
    if(user===comp){
        return `Tie`;
    }
    else if(winnerDict[comp]===user){

        return "You win"
    }
    else {
        return "You lost"
    }
}

function showData(user:string, comp:string){
    const user1=document.getElementById("userChoice") as HTMLDivElement;
    user1.innerText="User Chose"
}

function compChoice():string{
    const computer=arr[Math.floor(Math.random()*3)];
    const compDiv=document.getElementById("computer") as HTMLDivElement;
    compDiv.innerText=computer;
    return computer

}
const resDiv=document.getElementById("result") as HTMLDivElement;
resDiv.innerText="hello";

