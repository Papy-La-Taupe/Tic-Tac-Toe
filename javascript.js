

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
NewSet();


// broken, to fix

addEventListener("click", (e)=>{
    console.log(e.target.className);
    switch(e.target.className){
        case "NewGame" :
            NewSet();
            break;

        case "ResetBoard" :
            ClearSet();
            break;
    };
});
