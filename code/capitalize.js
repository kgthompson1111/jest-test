function capitalize(input) {
    let stringLength = input.length;
    let trimString = input.trim();
    let firstLetter = trimString.slice(0,1);
    let restString = trimString.substr(1, stringLength);
    let newString = firstLetter.toUpperCase() + restString.toLowerCase();
    return newString;
    }

    export { capitalize }