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

function factorSum(n) {
    let total = 0;
    let primes = [2, 3, 5, 7, 9, 11];
    let coe = 1;
    for (let i = 0; true; i++) {
        console.log("N%prime[i]" + n % primes[i] + "   OF N:" + n + "   PRIME:" + primes[i]);
        let prime = primes[i];
        if (isPrime(n)) {
            console.log("IS PRIME");
            prime = n;
        }
        if (n % prime == 0) {
            n = n / prime;
            console.log("N/primes:" + n);

            total += prime;
            console.log("total:" + total);
            i = -1;
        }

        if (n == 1) {
            if (isPrime(total) || total <= 4) {
                return total;
            } else {
                i = -1;
                n = total;
                total = 0;
            }

        }
    }
}

function factorSum2(n) {
    let aboveBound = Math.floor(n / 2);
    let prime;
    let total = 0;
    if (isPrime(n)) {
        return n;
    }
    for (let i = aboveBound; i >= 2; i--) {

        if (isPrime(i)) {
            prime = i;

            if (n % prime == 0) {


                n = n / prime;
                total += prime;
                i = aboveBound + 1;

            }
        }
        if (n == 1) {
            if (isPrime(total) || total <= 4) {

                return total;
            } else {
                n = total;
                aboveBound = Math.floor(n / 2);
                total = 0;
                prime = 0;
                i = aboveBound;
            }
        }


    }
}




function factorSum3(n) {
    let k = 2;
    let s = 0;
    let a = n;
    debugger;
    while (n > 1) {
        console.log("K(out):" + k);
        if (n % k == 0) {
            n = n / k;
            s = s + k;
            console.log("K:" + k);
        } else { k++; }
    }
    if (s == a)
        return s;

    return factorSum3(s);
}

console.log("   SUM:" + factorSum3(35));
// for (let j = 2; j <= 200; j++) {
//     if (isPrime(j)) {
//         console.log("At Recursive j=" + j + "   SUM:" + factorSum3(j));
//     }

// }