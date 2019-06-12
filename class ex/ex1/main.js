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
}
const player1 = new Player('uri');
player1.score = 22;
player1.didWin();
