function bubbleSort(arr) {
    if (!arr.length) return arr;

    var test = false;
    for (let i = 0; i < arr.length - 1; i++) {
        var a = arr[i], b = arr[i + 1];
        if (a > b) {
            var swapedArr = swap([a, b]);
            test = true;
            arr[i] = swapedArr[0];
            arr[i + 1] = swapedArr[1];
        }
    }

    if (test) bubbleSort(arr);
    return arr;
}

function swap([a, b]) {
    return [b, a];
}
