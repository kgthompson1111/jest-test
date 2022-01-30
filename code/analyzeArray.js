function analyzeArray(array) {
    if(array.length === 0) {
        return null;
    }

    function compareFunction(a, b) {
        return a - b;
    }

    let newArray = array.sort(compareFunction)
    let arrayLength = newArray.length;

    function findAverage(arr) {
        let total = 0;
        for(var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        let average = total/arrayLength;
        return average;
    }

    return {
        min: newArray[0],
        max: newArray[newArray.length-1],
        length: arrayLength,
        average: findAverage(newArray)
    }

}

  
export { analyzeArray }