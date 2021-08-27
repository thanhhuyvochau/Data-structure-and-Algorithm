var binarySearch = (arr, low, high, key) => {

    let mid = Math.floor((high + low) / 2);
    console.log("LOW(" + arr[low] + ") : " + low);
    console.log("MID(" + arr[mid] + ") : " + mid);
    console.log("HIGH(" + arr[high] + ") : " + high);
    console.log("---***----");
    let index;
    if (high < low) {
        index = -1;
    } else if (arr[low] > key) {
        index = -1;
    } else if (arr[mid] == key) {
        index = mid;
    } else if (arr[mid] > key) {
        index = binarySearch(arr, low, mid - 1, key);
    } else if (arr[mid] < key) {
        index = binarySearch(arr, mid + 1, high, key);
    }
    return index;
}
let arr = ["a", "b", "c", "d", "e", "f"];
let key = "a";
console.log("INDEX FIND: " + binarySearch(arr, 0, arr.length - 1, key));