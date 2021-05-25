let findTheOldest = function(people) {

    people.reduce( (acc, person) => {

        let age = () => {
            if (person.yearOfDeath !== undefined) {
                return person.yearOfDeath - person.yearOfBirth
            }else {
                return (new Date()).getFullYear() - person.yearOfBirth
            }};
        if (acc === null || acc < age) return person.name;
        return acc.name
    }, null)
}

module.exports = findTheOldest
