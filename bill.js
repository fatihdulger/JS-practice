'use strict';
// # CODING CHALLENGE #2:

let bill = 125;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(tip);
const finalBill = bill + tip;
console.log(finalBill);


function finalBill() {
    if(bill >= 50 && bill <= 300){
        return bill * 0.15;
    } else{
        return bill * 0.20;
    }
}
finalBill(125);
console.log(finalBill);

let calcTip = () => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

function calcTip1() {
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tip;
}