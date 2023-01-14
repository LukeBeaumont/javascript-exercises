const reverseString = function(string) { 
    let newArray = string.split("");

    let reverseArray = newArray.reverse();

    let joinArray = reverseArray.join("");

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
