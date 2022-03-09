var player1 = new User();
var player2 = new Rival();
player1.firstName = prompt("welcome \n Please enter your name", "Tsah");
function showUserName() {
    document.getElementById("userName").innerHTML = "Hello " + player1.firstName;
}
//this function called every time the player(user) makes a move by clicking one of the squares of the table.
function play(tdId) {
    if (player2.gameBoard.gameStatus != Status.next) { // if the game has ended, the user can't do more actions. 
        return;
    }
    try {
        player1.MakeChoice(tdId); //marks the selected spot with an 'X' 
        //(also changes the 'Mark' on the square[] Array).
    }
    catch (e) { //if the selected spot is occupied
        alert(e.message);
        return;
    }
    player1.gameBoard.updateStatus(); //cheks if the last move led to win/tie 
    if (player1.gameBoard.gameStatus != Status.next) {
        setTimeout(gameOver, 200);
        return;
    }
    if (player2.WinOrBlock(Mark.O) == false && player2.WinOrBlock(Mark.X) == false) {
        //First: try to win (Mark.O); if rival can't win: try to block (Mark.X);
        // Only if rival can't win and can't block: Make a choise (random empty spot).
        player2.MakeChoice();
    }
    player2.gameBoard.updateStatus();
    if (player2.gameBoard.gameStatus != Status.next) {
        setTimeout(gameOver, 200);
        return;
    }
}
function gameOver() {
    alert("GAME OVER!\n" + player1.gameBoard.message);
}
function startOver() {
    window.location.reload();
}
//# sourceMappingURL=app.js.map