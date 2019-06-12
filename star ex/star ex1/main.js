class Shoes {
    constructor(name, avilable_size) {
        this.name = name;
        this.avilable_size = avilable_size;
    }
    checkSizeAvilable(size) {
        for (let i = 0; i < this.avilable_size.length; i++) {
            if (size === this.avilable_size[i]) {
                return true;
            }
        }
        return false;
    }
}
const shoes1 = new Shoes('adidas', [ 44, 42, 33, 40 ]);
shoes1.checkSizeAvilable(11);
shoes1.checkSizeAvilable(44);
