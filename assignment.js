
function kilometerToMeter(km) {
    // this function converts kilometer to meter for input km
    if (km < 0) {
        // handling bad input from user
        return "Distance can not be negative";
    }
    var meter = km * 1000;
    return meter;
}

function budgetCalculator(watchAmount, phoneAmount, laptopAmount) {
    // watch price 50, phone price 100, laptop price 500 per piece
    if (watchAmount < 0 || phoneAmount < 0 || laptopAmount < 0) {
        return "You can't buy negative amount products";
    }
    var budget = 0;
    budget += watchAmount * 50;
    budget += phoneAmount * 100;
    budget += laptopAmount * 500;
    return budget;
}

function hotelCost(days) {
    if (days < 0) {
        return "Negative days not allowed";
    }
    if (days == 0) {
        return 0;
    }
    var totalCost = 0;
    for (var i = 1; i <= days; i++) {
        if (i <= 10) {
            totalCost += 100;
        } else if (i <= 20) {
            totalCost += 80;
        } else {
            totalCost += 50;
        }
    }
    return totalCost;
}

function megaFriend(friendsName) {
    if (friendsName.length < 1) {
        return "Empty array";
    }
    var longestName = friendsName[0];
    // first index of array already taken in longestName
    // so we start our loop from index 1
    for (var i = 1; i < friendsName.length; i++) {
        if (friendsName[i].length > longestName.length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}
