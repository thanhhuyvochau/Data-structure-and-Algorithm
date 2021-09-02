var multyply = (A, B, n, a, b) => {
    let result = [];
    // let initial array result
    for (let i = 0; i < (2 * n) - 1; i++) {
        result.push(0);
    }
    if (n == 1) {
        result[0] = A[a] + B[b];
    } else {
        let D1E1 = multyply(A, B, n / 2, a, b);
        let D0E0 = multyply(A, B, n / 2, a + (n / 2), b + (n / 2));
        let D1plusD0 = addPoly(A, n);
        let E1plusE0 = addPoly(B, n);
        let D3E3 = multyply(D1plusD0, E1plusE0, D1plusD0.length, 0, 0);
        D3E3 = subPoly(D3E3, D1E1, D0E0, D3E3.length);
        result = combineResult(D1E1, D0E0, D3E3);
    }
    return resultl;
}
var addPoly = (A, n) => {
    let sum = [];
    let bound = Math.ceil((n / 2));
    console.log("BOUND:" + bound);

    let i = 0;
    do {

        let a1 = A[i];
        console.log("a1:" + a1);
        console.log("I:" + i + bound);
        let a2 = A[i + bound] == undefined ? 0 : A[i + bound];
        sum.push(a1 + a2);
        i++;
    } while (i < bound)
    return sum;
}
var subPoly = (D3E3, D1E1, D0E0, n) => {
    // sub D1E1 first 
    for (let i = 0; i < D3E3.length; i++) {
        D3E3[i] -= D1E1[i];
    }

    // sub D0E0 second
    for (let j = 0; j < D3E3.length; j++) {
        D3E3[j] -= D0E0[j];
    }
    return D3E3;
}

//Test addPoly
let ar = [4, 3, 2, 1];
console.log(addPoly(ar, ar.length));



var combineResult = (D1E1, D0E0, D3E3) => {

}