
//let totalPrice = till(3,15);

let totalPrice2 = ((x,y) => x*y); // ARROW FUNCTION
console.log(totalPrice2(2,6));

let calA = ((x,y) => x**y);
    console.log(calA(3,5));

//PART 1: Ask user for number of people attending the party
//[14:33] Timothy Jones
//Create a button that reads "BOOK VENUE" which will trigger the process of booking.



function ask() {
    alert("Hi welcome to our site! if you wish to book please click the 'BOOK VENUE' button")
};
 
let book = setTimeout(ask, 30000) // 30 sec

function booking(id){
    if(id === "venue"){
        let popup = prompt ('How many people will be attending the party? (numerical value)'); //34
        console.log(popup);
        //tableFive(popup); // this will return the value the user inputted. 
        //.value
        let price = ("£" + tableFive(popup));
        alert(price);
        //.value
        //create <input> give an id name , <p> £ <label> (cost) for:id/name. using DOM we link these
    } else {
        book;
    }
};

// PART 2: Calculate and log how many people will not be at a

// full table of 5 (%?) 5 people per table
/* may take the value received from part1  and use it to figure out table sizes? */

function tableFive(x){ // x = 34 6, 1-4 people 4 people left over
    if (Number(x) % 5 === 0){  // x coming from prompt is string we need to convert to nmber
            
    let tables = Math.ceil(x / 5);  // divide user input by 5 a rond up to whole number // math ceil not relevant when it is divisible to 5 completely probably we will later need it. 
    //console.log(tables);
    return costPerTable(tables); // will give us cost per table price 
    }
    else {
    return costPerHead(x); // using modulus as it tells me how many will be left over from the number
    };
};

//PART 3 
//User Input Math.ceil() - figure out maximum number of tables.


function CostPerHead(y){ // y = 34 (34*7) + 500 // OUTPUT= 738-500 = 238
    let perHead = Number(y) * 7;
    let venueCost = 500;
    perHead + venueCost;
};

function costPerTable(table){
    perTableCost = tables * 10;
    let venueCost = 300;
    return perTableCost + venueCost;

}


