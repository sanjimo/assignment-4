//problem-1
//Seer to Mon conversion

function seerToMon(seer) {
    const mon = seer / 40;
    //for string inputs
    if (typeof seer != "number") {
        return 'Invalid input';
    }
    //for negative or 0 inputs
    else if (mon <= 0) {
        return "Please enter a number greater than 0.";
    }
    //valid input calculation
    else {

        return mon;
    }
}

//function result
console.log(seerToMon());
//problem-1 ends here

//Problem-2
function totalSales(quantityOfShirts, quantityOfpants, quantityOfShoes) {
    const shirt = { productName: "Shirt", price: 100 }
    const pant = {
        productName: "Pant", price: 200
    }
    const shoe = {
        productName: "Shoe", price: 500
    }
    //for string inputs
    if ((typeof quantityOfShirts != 'number') || (typeof quantityOfpants != 'number') || (typeof quantityOfShoes != 'number')) {
        return 'Invalid input';
    }
    else if ((quantityOfShirts < 0) || (quantityOfpants < 0) || (quantityOfShoes < 0)) {
        return "Quantities can't be negative!";
    }
    else if ((quantityOfShirts == 0) && (quantityOfpants == 0) && (quantityOfShoes == 0)) {
        return "you haven't selected anything yet!";
    }
    else if (
        (quantityOfShirts % 1 != 0) ||
        (quantityOfpants % 1 != 0) ||
        (quantityOfShoes % 1 != 0)
    ) {
        return "Please enter round numbers";
    }
    else {
        const totalShirtPrice = quantityOfShirts * shirt.price;
        const totalPantPrice = quantityOfpants * pant.price;
        const totalShoePrice = quantityOfShoes * shoe.price;
        const totalExpense = totalShirtPrice + totalPantPrice + totalShoePrice;

        return totalExpense;
    }
}
//function result
console.log(totalSales(a,b,9));
//problem-2 ends here

//problem-3
//Prices of products
const deliveryfor100 = 100;
const deliveryfor200 = 80;
const deliveryforMoeThan200 = 50;

//function to calculate total deivery cost
function deliveryCost(tShirtQuantity) {
    //for invalid inputs
    if ((typeof tShirtQuantity != 'number') || tShirtQuantity < 0) {
        return 'Enter valid input';
    }
    else if (tShirtQuantity == 0) {
        return "Your cart is empty";
    }

    else if (tShirtQuantity % 1 != 0) {
        return 'Please Enter round numbers';
    }
    //for valid inputs
    else if (tShirtQuantity <= 100) {
        const tshirtUpto100cost = tShirtQuantity * deliveryfor100;
        return tshirtUpto100cost;

    }
    else if (tShirtQuantity >= 100 && tShirtQuantity <= 200) {

        const restTshirtUpto200 = tShirtQuantity - 100;
        const restTshirtCost = restTshirtUpto200 * deliveryfor200;
        const tshirtUpto200cost = 10000 + restTshirtCost;
        return tshirtUpto200cost;

    }
    else {

        const restTshirtUpto300 = tShirtQuantity - 200;
        const restTshirtCost = restTshirtUpto300 * deliveryforMoeThan200;
        const restTshirtCostupto300 = 18000 + restTshirtCost; return restTshirtCostupto300;

    }

}
//function result
console.log(deliveryCost(0));
//problem-3 ends here

//Problem-4
//array of names of friends
const friends = ["12345", "Piu", "Tiya", "Faria", "Nurul", "Rania", "Lu"];

//function to find name of 5 letters from the array
function perfectFriend(friends) {
    //for invalid inputs
    if (typeof friends != 'object') {
        return "Please give an array of strings";
    }
    //for valid inputs
    for (const friend of friends) {

        if (friend.length == 5 && (typeof friend == 'string')) {
            return friend;
        }

    }
    return "no name found conaining 5 letters"
}
//Function Result
console.log(perfectFriend(friends));
//problem-4 ends here