class User extends Player {
    private _firstName: string;
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    MakeChoice(tdId: string): void {
        this.playersChoice = +tdId.split("d")[1]; // split and convert the id string to a single number
        if (this.gameBoard.square[this.playersChoice - 1] != Mark.Empty) {
            throw new Error("This spot is already taken");
        }
        document.getElementById(tdId).innerHTML = "<img src='xicon.png' />"; //replace the "placeholder" pic with an X
        this.gameBoard.square[this.playersChoice - 1] = Mark.X;
    }
}