//problem-01 

function seerToMon(value) {
    if (value == 0) {
        return 'Error ';
    }
    else if (value < 0) {
        return 'Error';
    }
    else {
        const result = value / 40;
        return result;
    }
}


const resultInMon = seerToMon(4);
console.log(resultInMon);






//problem-02 

function totalSales(shirts, pants, shoes) {

    const ShirtCost = 100;
    const PantCost = 200;
    const ShoeCost = 500;

    if (shirts >= 0 && pants >= 0 && shoes >= 0) {
        const totalCost = shirts * ShirtCost + pants * PantCost + shoes * ShoeCost;
        return totalCost;
    }
    else {
        return 'Error';
    }

}

const totalCost = totalSales(10, 20, 30);
console.log(totalCost);




//problem-03

function deliveryCost(shirts) {
    const cost = [100, 80, 50];
    let totalCost = 0;
    if (shirts <= 0) {
        return 'Error';
    }
    else if (shirts <= 100) {
        return totalCost += cost[0] * shirts;
    }
    else if (shirts <= 200) {
        return totalCost += (cost[0] * 100) + (cost[1] * (shirts - 100));
    }
    else {
        return totalCost += (cost[0] * 100) + (cost[1] * 100) + (cost[2] * (shirts - 200));
    }
}

const totalCosting = deliveryCost(50);
console.log(totalCosting);



//problem-04

function perfectFriend(friends) {
    let perfect = '';
    if (friends.length <= 0) {
        return 'Error message';
    }
    else {
        for (const friend of friends) {
            if (friend.length == 5) {
                perfect = friend;
                return perfect;
            }
        }
    }
}

const perfect = perfectFriend(['abc', 'abcde', 'abcdf']);
console.log(perfect);