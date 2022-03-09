class Board {
    private static _square: Mark[] = new Array(9);
    get square(): Mark[] {
        return Board._square;
    }
    set square(value: Mark[]) {
        Board._square = value;
    }
    private static _gameStatus: Status;
    get gameStatus(): Status {
        return Board._gameStatus;
    }
    set gameStatus(value: Status) {
        Board._gameStatus = value;
    }
    private static _turns: number; //Counts the number of turns performed
    get turns(): number {
        return Board._turns;
    }
    set turns(value: number) {
        Board._turns = value;
    }
    readonly rowsAndColumns: Array<Array<number>> = new Array(8);
    // A two-dimensional array that contains all the options of columns and rows.
    //it used to check win or block options.

    private static _message: string; //A message that shows whether the user has won or lost (or tie).
    public get message(): string {
        return Board._message;
    }
    public set message(value: string) {
        Board._message = value;
    }
    constructor() {
        this.gameStatus = Status.next;
        this.turns = 0;
        for (let i = 0; i < this.square.length; i++) {
            this.square[i] = Mark.Empty;
        }
        this.rowsAndColumns[0] = new Array(0, 1, 2); // top row
        this.rowsAndColumns[1] = new Array(3, 4, 5); // middle row
        this.rowsAndColumns[2] = new Array(6, 7, 8); // bottom row
        this.rowsAndColumns[3] = new Array(0, 3, 6); // left column
        this.rowsAndColumns[4] = new Array(1, 4, 7); // middle column
        this.rowsAndColumns[5] = new Array(2, 5, 8); // right column
        this.rowsAndColumns[6] = new Array(0, 4, 8); // 1st diagonal
        this.rowsAndColumns[7] = new Array(2, 4, 6); // 2nd diagonal
    }
    public updateStatus(): void {
        // Checks if the last move led to a win
        for (let i = 0; i < this.rowsAndColumns.length; i++) { //using 'rowsAndColumns' array
            if (this.square[this.rowsAndColumns[i][0]] == this.square[this.rowsAndColumns[i][1]] &&
                this.square[this.rowsAndColumns[i][1]] == this.square[this.rowsAndColumns[i][2]] &&
                this.square[this.rowsAndColumns[i][0]] != Mark.Empty) {
                this.gameStatus = Status.win;
                if (this.square[this.rowsAndColumns[i][0]] == Mark.X) { // sets the game ending message
                    this.message = "you won!";
                }
                else {
                    this.message = "you lost...";
                }
                return;
            }
        }
        this.turns++;
        if (this.turns == 9) { // the board is full and no player has won
            this.gameStatus = Status.tie
            this.message = "the game ended in a tie."
        }
    }
}