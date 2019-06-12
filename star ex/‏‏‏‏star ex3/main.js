class Account {
    constructor(sum) {
        this.sum = sum;
    }
    deosite(value) {
        this.sum += value;
    }
    withdraw(value) {
        this.sum -= value;
    }
    canWithdraw(value) {
        if (value >= this.sum) {
            return true;
        } else {
            return false;
        }
    }
}
let account1 = new Account(100);
function lottery(account) {
    if (!account.canWithdraw(account.sum)) {
        console.log('you cant withdrow');
        // break;
    } else {
        let rnd = Math.floor(Math.random() * 100) + 1;
        console.log('lottery random number is: ' + rnd);
        if (rnd >= 50) {
            account.deosite(30);
        } else {
            account.withdraw(30);
        }
    }
}
lottery(account1);
lottery(account1);
lottery(account1);
lottery(account1);
lottery(account1);
console.log('your sum is' + account1.sum);
