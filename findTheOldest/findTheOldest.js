let findTheOldest = function(people) {
    console.table(people)
    let oldest = people.reduce( (acc, person) => {
        function age(obj) {
            if (obj.yearOfDeath === undefined) {
                return (new Date()).getFullYear() - obj.yearOfBirth;
            } else {
                return obj.yearOfDeath - obj.yearOfBirth
            }
        }
        if (acc === null || age(acc) < age(person)) {
            console.log(`${acc.name} ${age(acc)}`)
            console.log(`${person.name} ${age(person)}`)
            return person}
        else {
            console.log(`${acc.name} ${age(acc)}`)
            console.log(`${person.name} ${age(person)}`)            
            return acc}
    })
    console.log(oldest)
    return oldest
}

module.exports = findTheOldest

