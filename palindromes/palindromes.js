const palindromes = function(string) {
    let newStr = '';
    let revStr = '';
    let letter = /[a-z]/i
    for (let i = 0; i < string.length; i++) {
        if (letter.test(string[i])) {
            newStr += string[i]
        }
    }
    for (let j = newStr.length; j > 0; j--) {
        revStr += newStr[j-1]
    }
    return newStr.toLowerCase() === revStr.toLowerCase()
}

module.exports = palindromes
