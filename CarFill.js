let minRefills = (x, n, L) => {

    let currentRefill = 0;
    let numRefill = 0;
    while (currentRefill <= n) {
        let lastRefill = currentRefill;
        while (currentRefill <= n && (x[currentRefill + 1] - x[lastRefill] <= L)) {
            currentRefill += 1;
        }
        if (currentRefill == lastRefill) {
            console.log("No way to go to destination!!");
            console.log(currentRefill);
            break;
        } else if (currentRefill <= n) {
            numRefill += 1;
        }
    }
    return numRefill;
}

let arr = [0, 100, 200, 300, 400];
let long = 400;

console.log(minRefills(arr, arr.length - 2, long));