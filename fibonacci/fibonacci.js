const fibonacci = function(x) {
    x = Number(x);

    if (x < 1) return 'OOPS';

    let sequence = [1, 1];

    for (let i = 1; i <= x-2; i++) {
        let y = sequence[i-1] + sequence[i]
        sequence.push(y);
    };
    console.log(sequence[x-1]);
    return sequence[x-1];
}
module.exports = fibonacci
