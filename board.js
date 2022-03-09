var Board = /** @class */ (function () {
    function Board() {
        this.rowsAndColumns = new Array(8);
        this.gameStatus = Status.next;
        this.turns = 0;
        for (var i = 0; i < this.square.length; i++) {
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
    Object.defineProperty(Board.prototype, "square", {
        get: function () {
            return Board._square;
        },
        set: function (value) {
            Board._square = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "gameStatus", {
        get: function () {
            return Board._gameStatus;
        },
        set: function (value) {
            Board._gameStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "turns", {
        get: function () {
            return Board._turns;
        },
        set: function (value) {
            Board._turns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Board.prototype, "message", {
        get: function () {
            return Board._message;
        },
        set: function (value) {
            Board._message = value;
        },
        enumerable: false,
        configurable: true
    });
    Board.prototype.updateStatus = function () {
        // Checks if the last move led to a win
        for (var i = 0; i < this.rowsAndColumns.length; i++) { //using 'rowsAndColumns' array
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
            this.gameStatus = Status.tie;
            this.message = "the game ended in a tie.";
        }
    };
    Board._square = new Array(9);
    return Board;
}());
//# sourceMappingURL=board.js.map