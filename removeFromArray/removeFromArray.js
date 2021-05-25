const removeFromArray = function(...args) {
    ///Defines the array of numbers
    let numsArray = args[0];

    ///Make an empty array to add the numbers not to be removed
    let finalArray = [];

    ///Iterate through each value in the array, we'll call each value 'item'
    numsArray.forEach((item) => {
        ///if the value of any of the arguments is not the same as the item (listed above)
        if (!args.includes(item)) {
            /// then push the item into the final array 
            finalArray.push(item)
        }
    });
    return finalArray
}

module.exports = removeFromArray
