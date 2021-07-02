const transpose = require('../../d2/matrix_transposition');

const wordSearch = (letters, word) => {
    // Check if matrix is empty
    if(!letters.length) {
        return false;
    }
    // Horizontal Check
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) { return true }
    }
    // Vertical Check
    const transposedLetters = transpose(letters);
    const verticalJoin = transposedLetters.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) { return true }
    }
    // console.log(tranposedLetters);
    return false;
}

module.exports = wordSearch;