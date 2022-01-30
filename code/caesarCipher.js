function caesarCipher(input, shiftNumber) {

    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let shiftAlphabet = "";
    let outputString = "";  
    
  
    function shift(n) {
      var displaced = alphabet.slice(0, n);
      shiftAlphabet = alphabet.substr(n) + displaced;
      return shiftAlphabet;
    }
  
    function isCharacterALetter(char) {
      return (/[a-zA-Z]/).test(char)
    }
  
    function decode(caesarInput) {
      let letter = "";
      let letterIndex;
      let letterIndexer = "";
      for(var i = 0; i < caesarInput.length; i++) {
        letter = caesarInput.substr(i, 1);
        letterIndexer = letter.toLowerCase();
        letterIndex = alphabet.indexOf(letterIndexer);
        if(!isCharacterALetter(letter)) {
          outputString += letter;
        } else if(letter === letter.toUpperCase()) {
          outputString += shiftAlphabet.substr(letterIndex, 1).toUpperCase();
        } else {
          outputString += shiftAlphabet.substr(letterIndex, 1);
        }
      }
    }
  
    shift(shiftNumber);
    decode(input);
  
    return outputString; 
    
  }

export { caesarCipher }