var total = (n) => {

    if (n == 1) {
        return 1;
    } else {
        let i = n;
        return i += total(n - 1);
    }
}

console.log(total(4))