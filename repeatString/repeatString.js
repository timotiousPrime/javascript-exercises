const repeatString = function(word, times) {
    let newString = '';
    if (times<0){
        return "ERROR"
    }
    for (let i=0; i < times; i++){
        newString += word
    }
    return newString
}
repeatString('hey', 6)
module.exports = repeatString
