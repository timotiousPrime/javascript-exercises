const reverseString = function(string) {
    let listOfChar = string.split('');
    let reversedList = []
    let reversedString = '';

    for (let i = listOfChar.length; i >= 0 ; i--) {
        reversedList.push(listOfChar[i])
    }
    
    reversedString = reversedList.join('');

    return reversedString
}

module.exports = reverseString
