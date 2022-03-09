var Player = /** @class */ (function () {
    function Player() {
        this._gameBoard = new Board();
    }
    Object.defineProperty(Player.prototype, "playersChoice", {
        get: function () {
            return this._playersChoice;
        },
        set: function (value) {
            this._playersChoice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "gameBoard", {
        get: function () {
            return this._gameBoard;
        },
        set: function (value) {
            this._gameBoard = value;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
//# sourceMappingURL=player.js.map