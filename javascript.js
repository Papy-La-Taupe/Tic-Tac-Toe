

const NewSet = ()=>{
    const GameBoard = ["A1","A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
    const parent = document.querySelector("#GameBoard");
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
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
}

    //Because some global variable can't hurt heh ? The way I see my code it's way simpler this way...well, cleaner at least.
let playerToken ="Heart";
let counter ="Odd";



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
            if(playerToken === "Heart") {
                if(counter === "Odd"){
                    e.target.style.backgroundImage = "url('./images/ticHeart.png')";
                    counter = "Even";
                } 
                else{
                    e.target.style.backgroundImage = "url('./images/TicCross.png')";
                    counter = "Odd";
                };
            }
            else if(playerToken === "Cross") {
                if(counter === "Odd"){
                    e.target.style.backgroundImage = "url('./images/TicCross.png')";
                    counter = "Even";
                } 
                else{
                    e.target.style.backgroundImage = "url('./images/ticHeart.png')";
                    counter = "Odd";
                };
            };
            break;

    }
});
