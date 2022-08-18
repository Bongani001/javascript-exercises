const removeFromArray = function(arr, ...num) {
    for (let nbr of num) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === nbr){
                arr.splice(i, 1);
            } else {
            continue;
            }
        }
    }
    return arr;
};
let modArr = [];

// Do not edit below this line
module.exports = removeFromArray;
