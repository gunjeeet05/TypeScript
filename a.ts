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
    const img=document.getElementById("img") as HTMLImageElement;
    const img2=document.getElementById("img2") as HTMLImageElement;
    img.src=`./images/${user}.png`
    img2.src=`./images/${comp}.png`
    const user1=document.getElementById("userChoice") as HTMLDivElement;
    user1.innerText="User Chose "+ user;
    const comp1=document.getElementById("compChoice") as HTMLDivElement;
    comp1.innerText=`Computer Chose ${comp}`;
}

function compChoice():string{
    const computer=arr[Math.floor(Math.random()*3)];
    
  
    return computer

}
const resDiv=document.getElementById("result") as HTMLDivElement;
resDiv.innerText="hello";

