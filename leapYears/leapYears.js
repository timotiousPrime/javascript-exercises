const leapYears = function(year) {
    if (year % 4 === 0 && year % 400 === 0) {
        return true;
        } else if (year % 4 === 0 && year % 100 === 0) {
        return false;
        } else if (year % 4 === 0) {
            return true;
        } else {
            return false;
        }
    }

module.exports = leapYears



/// if year is divisible by 4 return true
// if year is divisible by 4 || 400 return true
// else return false