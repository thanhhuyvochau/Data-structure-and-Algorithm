let merge = (left, right) => {

    debugger;
    let mergeResult = [];
    let resultSize = left.length + right.length;
    let leftIndex = 0;
    let rightIndex = 0;
    for (let i = 0; i <= resultSize; i++) {
        let minLeft = left[leftIndex];
        let minRight = right[rightIndex];
        if (minLeft <= minRight) {
            mergeResult.push(minLeft);
            leftIndex++;
            if (leftIndex >= left.length) {
                mergeResult = mergeResult.concat(right.slice(rightIndex));
                break;
            }
        } else {
            mergeResult.push(minRight);
            rightIndex++;
            if (rightIndex >= right.length) {
                mergeResult = mergeResult.concat(left.slice(leftIndex));
                break;
            }
        }
    }
    return mergeResult;
}

let mergeSort = (arr, n, low, high) => {
    debugger;
    let mid = Math.ceil(n / 2 + low) - 1;
    if (n <= 1 || high == low) {
        let baseArr = [arr[low]];
        return baseArr;
    } else {
        let left = mergeSort(arr, n / 2, low, mid);
        let right = mergeSort(arr, n / 2, mid + 1, high);
        return merge(left, right);
    }
}

let arr = [5, 6, 8, 4, 2, 3, 6, 25, 1117, 58, 632, 111];
console.log(mergeSort(arr, arr.length, 0, arr.length - 1));