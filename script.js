
function playGame(select){
let playerSelect=select.id;
let randomNumber = Math.floor(Math.random()*3);
let computerSelect =["rock","paper","scissors"][randomNumber]
let playScore={
    "rock":{"scissors":1,"rock":0.5,"paper":0},
    "paper":{"scissors":0,"rock":1,"paper":0.5},
    "scissors":{"scissors":0.5,"rock":0,"paper":1}
};
let playerScore = playScore[playerSelect][computerSelect];
let selectedButtons = {
    "rock":document.getElementById("rock"),
    "paper":document.getElementById("paper"),
    "scissors":document.getElementById("scissors")
};
document.getElementById("rock").remove();
document.getElementById("paper").remove();
document.getElementById("scissors").remove();

let playersButton= document.createElement("button");
let computersButton= document.createElement("button");
let resultMsg=document.createElement("div")

playersButton=selectedButtons[playerSelect];
computersButton=selectedButtons[computerSelect];

document.getElementById("container").appendChild(playersButton);
document.getElementById("container").appendChild(resultMsg);
document.getElementById("container").appendChild(computersButton);

resultMsg.classList.remove("lost","tie","win");

if(playerScore === 0) {
    resultMsg.innerHTML="You lost!";
    resultMsg.classList.add("lost");
}else if(playerScore===0.5){
    resultMsg.innerHTML="Tie game!"
    resultMsg.classList.add("tie");

}else{
    resultMsg.innerHTML="You won!"
    resultMsg.classList.add("win");

}


}