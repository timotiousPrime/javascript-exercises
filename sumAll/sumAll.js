const sumAll = function(start, end) {
    let total = 0;

    if (Number.isInteger(start) != true || Number.isInteger(end) != true) {
        return "ERROR"
    }

    if (start < 0 || end < 0) {
        return "ERROR"
    }

    if (start > end) {
        [start, end] = [end, start];
    }

    for (let i = start; i <= end; i++){
        total += i
    }
    return total
}

/// Update to accept new paramaters

module.exports = sumAll
