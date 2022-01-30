function reverseString(input) {
    let trimString = input.trim();
    let stringLength = trimString.length;
    let newString = "";
    for(let i = stringLength-1; i >= 0; i--) {
      newString += trimString.substr(i, 1);
    }
    return newString;
  }

  export { reverseString }