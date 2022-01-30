function calculator() {
    let result;
  
    function add(x, y) {
      result = x + y;
      return result;
    }
  
    function subtract(x, y) {
      result = x - y;
      return result;
    }
  
    function divide(x, y) {
      result = x / y;
      return result;
    }
  
    function multiply(x, y) {
      result = x * y;
      return result;
    }
  
    return { add, subtract, divide, multiply };
  
  }

  export { calculator }