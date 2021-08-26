var divideBall = (n) => {
        let numOfBoxes = 4; // O(1)
        let initial = 0; // O(1)
        let boxes = []; // O(1)
        while (numOfBoxes > 0 && n > 0) { //O(n)
            if (numOfBoxes == 1) {
                boxes.push(n);
            } else {
                boxes.push(initial);
            }
            n -= initial;
            initial++;
            numOfBoxes--;
            if (n < initial && numOfBoxes > 0) {
                return "Cannot fill all the boxes";
            }
        }
        return boxes;

    }
    // This algorithm is O(n).
console.log(divideBall(2));