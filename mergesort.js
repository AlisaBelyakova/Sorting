function split(wholeArray) {
    var midInd = Math.floor(wholeArray.length / 2);

    firstHalf = wholeArray.slice( 0,midInd)
    secondHalf = wholeArray.slice(midInd, wholeArray.length)
    return [firstHalf, secondHalf];
  } 

  function merge (arr) {
    var mergedArr=[], pointerZero = 0, pointerOne = 0;
       while (pointerZero < arr[0].length) {
           while(pointerOne < arr[1].length) {
            if (arr[0][pointerZero] < arr[1][pointerOne]) {
                mergedArr.push(arr[0][pointerZero]);
                pointerZero++;
                console.log(mergedArr)
            } else {
                mergedArr.push(arr[1][pointerOne]);
                pointerOne++;
                console.log(mergedArr)
            }
        }
       }
    return mergedArr;
  }


  function mergeSort(array) {
  //NEEDS TO BE CREATED
  }