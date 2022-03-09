class Rival extends Player {
    private _idString: string = "td";
    public get idString(): string {
        return this._idString;
    }
    public set idString(value: string) {
        this._idString = value;
    }
    public WinOrBlock(m: Mark): boolean {
        // if m="O" serch for wining spot, if m="X" serch for blocking spot.

        for (let i = 0; i < 8; i++) { //using Board's 'rowsAndColumns' array
            if (this.gameBoard.square[this.gameBoard.rowsAndColumns[i][0]] == m &&
                this.gameBoard.square[this.gameBoard.rowsAndColumns[i][1]] == m &&
                this.gameBoard.square[this.gameBoard.rowsAndColumns[i][2]] == Mark.Empty) {
                this.gameBoard.square[this.gameBoard.rowsAndColumns[i][2]] = Mark.O;
                this.playersChoice = this.gameBoard.rowsAndColumns[i][2];
                this.markBoard();
                return true;
            }
            else if (this.gameBoard.square[this.gameBoard.rowsAndColumns[i][1]] == m &&
                this.gameBoard.square[this.gameBoard.rowsAndColumns[i][2]] == m &&
                this.gameBoard.square[this.gameBoard.rowsAndColumns[i][0]] == Mark.Empty) {
                this.gameBoard.square[this.gameBoard.rowsAndColumns[i][0]] = Mark.O;
                this.playersChoice = this.gameBoard.rowsAndColumns[i][0];
                this.markBoard();
                return true;
            }
            else if (this.gameBoard.square[this.gameBoard.rowsAndColumns[i][0]] == m &&
                this.gameBoard.square[this.gameBoard.rowsAndColumns[i][2]] == m &&
                this.gameBoard.square[this.gameBoard.rowsAndColumns[i][1]] == Mark.Empty) {
                this.gameBoard.square[this.gameBoard.rowsAndColumns[i][1]] = Mark.O;
                this.playersChoice = this.gameBoard.rowsAndColumns[i][1];
                this.markBoard();
                return true;
            }
        }

        return false; //if can't find win or block, return false.
    }
    public MakeChoice(): void {
        //Generates a random number between 1-9 and Marks "O" on this empty spot.

        do {
            this.playersChoice = Math.round(Math.random() * 8) + 1;
        } while (this.gameBoard.square[this.playersChoice] != Mark.Empty)
        this.gameBoard.square[this.playersChoice] = Mark.O;
        this.markBoard();
    }
    protected markBoard() { 
        this.idString += (this.playersChoice + 1);
        document.getElementById(this.idString).innerHTML = "<img src='oicon.png' />";
        this.idString = "td"; // initialize the id string to default "td"
    }
}