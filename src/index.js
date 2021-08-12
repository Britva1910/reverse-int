module.exports = function reverse(n) {
    let z = Math.abs(n);
    let x = z.toString();
    let res = x.split('').reverse().join('')
    return res;
}
