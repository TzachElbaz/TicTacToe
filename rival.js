var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rival = /** @class */ (function (_super) {
    __extends(Rival, _super);
    function Rival() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._idString = "td";
        return _this;
    }
    Object.defineProperty(Rival.prototype, "idString", {
        get: function () {
            return this._idString;
        },
        set: function (value) {
            this._idString = value;
        },
        enumerable: false,
        configurable: true
    });
    Rival.prototype.WinOrBlock = function (m) {
        // if m="O" serch for wining spot, if m="X" serch for blocking spot.
        for (var i = 0; i < 8; i++) { //using Board's 'rowsAndColumns' array
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
    };
    Rival.prototype.MakeChoice = function () {
        //Generates a random number between 1-9 and Marks "O" on this empty spot.
        do {
            this.playersChoice = Math.round(Math.random() * 8) + 1;
        } while (this.gameBoard.square[this.playersChoice] != Mark.Empty);
        this.gameBoard.square[this.playersChoice] = Mark.O;
        this.markBoard();
    };
    Rival.prototype.markBoard = function () {
        this.idString += (this.playersChoice + 1);
        document.getElementById(this.idString).innerHTML = "<img src='oicon.png' />";
        this.idString = "td"; // initialize the id string to default "td"
    };
    return Rival;
}(Player));
//# sourceMappingURL=rival.js.map