var groupChidren = (arr) => {
        let R = [];
        i = 0;
        while (i <= arr.length - 1) {
            let covered = [arr[i], arr[i] + 1];
            i += 1;
            // find any items more than the right of covered
            while (i <= arr.length - 1 && arr[i] <= covered[1]) {
                i++;
            }
            R.push(covered);
        }
        return R;
    }
    // condition is the array have to be sorted
let arr = [12, 18, 19, 22, 23, 40];
console.log(groupChidren(arr).length);