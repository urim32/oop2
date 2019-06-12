class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
    didWin() {
        if (this.score > 30) {
            return true;
        } else {
            return false;
        }
    }
    checkIfPlayerWon() {
        if (this.didWin()) {
            console.log(`player ${this.name} won!`);
        }
    }
}
const player1 = new Player('uri');
player1.score = 32;
player1.checkIfPlayerWon();
