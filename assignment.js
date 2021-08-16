//problem-01 seer to mon

//function consist one input parameter.

function seerToMon(seer) {

    //if the value of the parameter is not a number then the function will return a message.
    if (typeof (seer) != 'number') {
        return 'Please enter a number as input';
    }

    //if the value of the parameter is zero then the function will return an error message.
    else if (seer == 0) {
        return 'Error : Please input some value';
    }

    //if the value of the parameter is negative then the function will return an error message.
    else if (seer < 0) {
        return 'Error : Please input some positive value';
    }

    //if the value of the parameter is positive then function will return the result as mon.
    else {
        const mon = seer / 40;
        return mon;
    }
}


const resultInMon = seerToMon(2);
console.log(resultInMon);






//problem-02 total sales

//function consist 3 parameters, i.e, shirts, pants and shoes.

function totalSales(shirts, pants, shoes) {

    const perShirtCost = 100;
    const perPantCost = 200;
    const perShoeCost = 500;

    //if the input values are not number then function will return a message.
    if (typeof (shirts) != 'number' || typeof (pants) != 'number' || typeof (shoes) != 'number') {
        return 'Please enter numbers as input.';
    }

    //if all the parameters are contains positive value then the function will return the total cost.
    else if (shirts >= 0 && pants >= 0 && shoes >= 0) {
        const totalCost = shirts * perShirtCost + pants * perPantCost + shoes * perShoeCost;
        return totalCost;
    }

    //if all or any parameter contain negative value then the function will return an error message.
    else {
        if (shirts < 0 && pants < 0 && shoes < 0) {
            return 'Error : Please input the positive amount of shirts, pants and shoes';
        }
        else if (shirts < 0 && pants < 0) {
            return 'Error : Please input the positive amount of shirts and pants';
        }
        else if (shirts < 0 && shoes < 0) {
            return 'Error : Please input the positive amount of shirts and shoes';
        }
        else if (pants < 0 && shoes < 0) {
            return 'Error : Please input the positive amount of pants and shoes';
        }
        else if (shirts < 0) {
            return 'Error : Please input the positive amount of shirts';
        }
        else if (pants < 0) {
            return 'Error : Please input the positive amount of pants';
        }
        else {
            return 'Error : Please input the positive amount of shoes';
        }
    }

}

const totalCost = totalSales(10, 0, 0);
console.log(totalCost);





//problem-03 delivery cost

//function consist one input parameter.

function deliveryCost(shirts) {

    //(1-100) per shirt cost 100tk, (101-200) per shirt cost 80tk, (more than 201) per shirt cost 50tk.
    const cost = [100, 80, 50];

    let totalDeliveryCost = 0;

    if (typeof (shirts) != 'number') {
        return 'Please enter a number as input';
    }
    else if (shirts <= 0) {
        return 'Error : Please input a positive value more than zero';
    }
    else if (shirts <= 100) {
        return totalDeliveryCost += cost[0] * shirts;
    }
    else if (shirts <= 200) {
        return totalDeliveryCost += (cost[0] * 100) + (cost[1] * (shirts - 100));
    }
    else {
        return totalDeliveryCost += (cost[0] * 100) + (cost[1] * 100) + (cost[2] * (shirts - 200));
    }
}

const totalDeliveryCost = deliveryCost(501);
console.log(totalDeliveryCost);





//problem-04 perfect friend

//function consist one parameter which accept an array of names.

function perfectFriend(friends) {

    let perfectName = '';

    //if the input strings are not string then the function will return a message.
    for (const friend of friends) {
        if (typeof (friend) != 'string') {
            return 'Invalid input!';
        }
    }

    //if the input array is empty function will return an error message.
    if (friends.length == 0) {
        return 'Error : Please input some names in your array.';
    }

    for (const friend of friends) {

        //if a name which length is 5 found it assigned into perfectName and break the loop.
        if (friend.length == 5) {
            perfectName = friend;
            return perfectName;
        }
    }

}

const perfectName = perfectFriend(['sanji', 'priya', '12345']);
console.log(perfectName);