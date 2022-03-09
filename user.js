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
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(User.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.MakeChoice = function (tdId) {
        this.playersChoice = +tdId.split("d")[1]; // split and convert the id string to a single number
        if (this.gameBoard.square[this.playersChoice - 1] != Mark.Empty) {
            throw new Error("This spot is already taken");
        }
        document.getElementById(tdId).innerHTML = "<img src='xicon.png' />"; //replace the "placeholder" pic with an X
        this.gameBoard.square[this.playersChoice - 1] = Mark.X;
    };
    return User;
}(Player));
//# sourceMappingURL=user.js.map