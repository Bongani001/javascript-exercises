const reverseString = function(str) {
    let splitStr = str.split('');
    let revStr = splitStr.reverse();
    let reversedStr = revStr.join('');
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
