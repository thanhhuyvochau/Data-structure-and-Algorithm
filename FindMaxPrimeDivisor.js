function isPrime(n) {
    let divide = Math.ceil(n / 2);
    if (n == 0) {
        return true;
    }
    while (divide >= 2) {
        if ((n % divide) == 0) {
            return false;
        }
        divide--;
    }
    return true;
}

function greatestCommonPrimeDivisor(a, b) {
    let max = (a > b) ? a : b;
    console.log(max);
    let maxBound = Math.floor(max / 2);
    let i = maxBound;
    while (i >= 2) {
        if (isPrime(i) && ((a % i == 0) && (b % i == 0))) {
            return i;
        }
        i--;
    }
    return -1;
}
console.log(greatestCommonPrimeDivisor(18, 12));