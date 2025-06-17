let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");

const drawgame=()=>{
    console.log("game was draw");
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
}
const gencompchoice=()=>{
    const options=["rock", "paper", "scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
 
const showwinner=(userchoice,  compchoice)=>{
    if(userwin){
        // console.log(` won , your ${userchoice} beats ${compchoice} `); 
        console.log("you won");
        userscore++; 
        user_score.innerText=userscore;
        msg.innerText=` won , your ${userchoice} beats ${compchoice} ` 
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }else{
        // console.log(` lose , the  ${compchoice} beats ${userchoice} `);
        console.log("you lose");
        compscore++;
        comp_score.innerText=compscore;
        msg.innerText=`you lose , the  ${compchoice} beats ${userchoice} `
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
    
}


const playgame=(userchoice)=>{
    console.log(`the userchoice is   ${userchoice}`);
    const compchoice=gencompchoice();
    console.log(`the computer choice is  ${compchoice}`);



    if(userchoice===compchoice)
    {  msg.innerText="the game was draw,play again";
       
       drawgame();
    }else{
        let userWin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userchoice,compchoice);
    }
}



choices.forEach((choice)=>{
     choice.addEventListener("click", ()=>{
        const userchoice= choice.getAttribute("id");
      playgame(userchoice);

     })
})
