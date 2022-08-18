const repeatString = function(str, n) {
    let word = '';
    for (let i = 0; i < n; i++) {
        word += str;
    } if (n < 0) {
        word = 'ERROR';
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
