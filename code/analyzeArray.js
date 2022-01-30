function analyzeArray(array) {
    
    let arrayLength;

    function checkValidity(arr) {
        for(var i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) != "number") {
                return false;
            } 
        }
        return true;
    }

    function compareFunction(a, b) {
        return a - b;
    }

    function findAverage(arr) {
        let total = 0;
        for(var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        let average = total/arrayLength;
        return average;
    }
    
    if(checkValidity(array)) {
        let newArray = array.sort(compareFunction)
        arrayLength = newArray.length;
        return {
            min: newArray[0],
            max: newArray[newArray.length-1],
            length: arrayLength,
            average: findAverage(newArray)
        }
    } else if(!checkValidity(array)) {
        return "error";
    }

}

  
export { analyzeArray }