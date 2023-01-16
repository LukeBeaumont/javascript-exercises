const removeFromArray = function(...args) {
    var array = args [0];
    var newArray = [];

    array.forEach((item) => { 
        if (!args.includes(item)) {
            newArray.push(item);
        }})
        return newArray;
    };
// Do not edit below this line
module.exports = removeFromArray;