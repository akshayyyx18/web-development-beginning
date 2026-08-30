let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".message-box");
const userScorePara= document.querySelector(".user-score");
const compScorePara= document.querySelector(".comp-score");

const genCompChoice = () =>{
    const options=["Rock", "paper", "Scissor"];
    const ranIndx=Math.floor(Math.random()*3);
    return options[ranIndx];
}

const winner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
       msg.innerText = `You win! . Your ${userChoice} beats ${compChoice}`;
       msg.style.backgroundColor = "green";
    }
    else{
         compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer win. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const draw = () =>{
    msg.innerText = "Game draw. Play again";
    msg.style.backgroundColor = "aqua";
}
const playGame=(userChoice) => { 
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
       draw();
    }
    else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin= compChoice==="Paper" ? false : true;
        }
        else if(userChoice==="Paper"){
            userWin= compChoice==="Scissor" ? false : true;
        }
        else{
            userWin= compChoice==="Rock" ? false : true;
        }
        winner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
})