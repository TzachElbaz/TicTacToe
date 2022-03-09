abstract class Player {
    private _playersChoice: number;
    public get playersChoice(): number {
        return this._playersChoice;
    }
    public set playersChoice(value: number) {
            this._playersChoice = value;
    }
    private _gameBoard: Board = new Board();
    public get gameBoard(): Board {
        return this._gameBoard;
    }
    public set gameBoard(value: Board) {
        this._gameBoard = value;
    }
    abstract MakeChoice(tdId?: string): void;
}