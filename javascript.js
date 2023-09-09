

const NewSet = ()=>{
    const GameBoard = ["A1","A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
    const parent = document.querySelector("#GameBoard");
    counter ="Odd";
    playerScore = "";
    aiScore = "";
    gameBlocker = false;
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
    for(let i = 0; i < GameBoard.length; i++){
        let newContainer = document.createElement("div");
        newContainer.classList.add(`${GameBoard[i]}`);
        newContainer.classList.add(`GameCell`);

        parent.appendChild(newContainer);
    };
};

const ClearSet = ()=>{
    const GameBoard = ["A1","A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
    const parent = document.querySelector("#GameBoard");
    counter ="Odd";
    playerScore = "";
    aiScore = "";
    gameBlocker = false;
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
}

const Score =(e, counter) => {
    if(e){counter === "Odd" ? playerScore += e.target.className.match(/[A-C][1-3]/)?.[0] : aiScore += e.target.className.match(/[A-C][1-3]/)?.[0];}
    console.log(playerScore, aiScore);
    return{playerScore, aiScore};
    
};

const result = (playerScore, aiScore) => {
    if(gameBlocker)return;
    const rows = /^(?=.*A1)(?=.*A2)(?=.*A3)|^(?=.*B1)(?=.*B2)(?=.*B3)|^(?=.*C1)(?=.*C2)(?=.*C3)/;
    const columns = /^(?=.*A1)(?=.*B1)(?=.*C1)|^(?=.*A2)(?=.*B2)(?=.*C2)|^(?=.*A3)(?=.*B3)(?=.*C3)/;
    const diags = /^(?=.*A1)(?=.*B2)(?=.*C3)|^(?=.*A3)(?=.*B2)(?=.*C1)/;

    if (rows.test(playerScore) || columns.test(playerScore) || diags.test(playerScore)) {
        console.log("Congratulation, Player Wins!"); gameBlocker=true;
    }

    if (rows.test(aiScore) || columns.test(aiScore) || diags.test(aiScore)) {
        console.log("Congratulation, AI Wins!"); gameBlocker=true;
    }
};


    //Because some global variable can't hurt heh ? The way I see my code it's way simpler this way...well, cleaner at least.
let playerToken ="Heart";
let counter ="Odd";
let playerScore = "";
let aiScore = "";
let gameBlocker = false;



document.addEventListener("click", (e)=>{

    console.log(e.target.className);

    switch(e.target.className) {

            //BoardSetting

        case "BoardControl NewGame":
            console.log("create clicked");
            NewSet();
            break;
    
        case "BoardControl ResetBoard":
            console.log("reset clicked");
            ClearSet();
            break;

            //TokenPicking

        case "PlayerPick":
            console.log("token clicked");
            const heartPick = document.querySelector(".HeartPick");
            const crossPick = document.querySelector(".CrossPick");
            const heartComputer = document.querySelector(".HeartComputer");
            const crossComputer = document.querySelector(".CrossComputer");

            heartPick.classList.toggle("Activated");
            crossComputer.classList.toggle("Activated");
            crossPick.classList.toggle("Activated");
            heartComputer.classList.toggle("Activated");
            console.log(heartPick);
            heartPick.className === "HeartPick Activated" ? playerToken = "Heart" : playerToken = "Cross";
            console.log(playerToken);
            break;
    
    
            //RulesOfPlay

        case "A1 GameCell":
        case "A2 GameCell":
        case "A3 GameCell":
        case "B1 GameCell":
        case "B2 GameCell":
        case "B3 GameCell":
        case "C1 GameCell":
        case "C2 GameCell":
        case "C3 GameCell":
            if(gameBlocker)break;
            if(playerToken === "Heart") {
                if(counter === "Odd"){
                    e.target.style.backgroundImage = "url('./images/ticHeart.png')";
                    Score(e, counter);
                    counter = "Even";
                } 
                else{
                    e.target.style.backgroundImage = "url('./images/TicCross.png')";
                    Score(e, counter);
                    counter = "Odd";
                };
            }
            else if(playerToken === "Cross") {
                if(counter === "Odd"){
                    e.target.style.backgroundImage = "url('./images/TicCross.png')";
                    Score(e, counter);
                    counter = "Even";
                } 
                else{
                    e.target.style.backgroundImage = "url('./images/ticHeart.png')";
                    Score(e, counter);
                    counter = "Odd";
                };
            };


            
                


            break;

            


    }
        //Score calculation (no score keeping for this project (for now at least) : while it would be fairly easy, I rather advance in my learning.)

    result(playerScore, aiScore);

});
