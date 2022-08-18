const sumAll = function(num1, num2) {
    let sums = 0;
    finSum = 0;
    if (!Number.isInteger(num2)) {
        return 'ERROR';
    }
    if ((num1 || num2) < 0){
        return 'ERROR';
    } else if (num1 < num2) {
    while (num1 < num2) {
        sums = num1 + num2;
        finSum += sums;
        num1++;
        num2--;
        if (num1 == num2) {
            finSum += num1;
        }
    }
    return finSum;
    } else if (num2 < num1) {
    while (num1 > num2) {
        sums = num2 + num1;
        finSum += sums;
        num1--;
        num2++;
        if (num1 == num2) {
            finSum += num1;
        }
    }
    return finSum;
    } else if ((typeof(num1) || typeof(num2)) != Number) {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
