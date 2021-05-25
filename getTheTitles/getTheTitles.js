const getTheTitles = function(books) {
    return books.reduce( (acc, book) => [...acc, book.title], [])
}

module.exports = getTheTitles;
