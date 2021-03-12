// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

var isNumeric = function (str) {
    if(!str) {
        return false;
    }
    const arrayOfNumbers = ["0","1","2","3","4","5","6","7","8","9"];
    let dotCounter= 0;
    let stringWithoutSymbols = ""
    if(str.charAt(0)=== "+" || str.charAt(0)=== "-") {
        stringWithoutSymbols = str.slice(1,str.length);
    } else {
        stringWithoutSymbols = str;
    }
    
    if(arrayOfNumbers.indexOf(stringWithoutSymbols.charAt(0)) === -1 && stringWithoutSymbols.length ===1) {
        return false;
    }

    for(let i = 0; i < stringWithoutSymbols.length; i++) {
        console.log(stringWithoutSymbols.charAt(i));
        console.log(arrayOfNumbers.indexOf(stringWithoutSymbols.charAt(i)));
        if(stringWithoutSymbols.charAt(i) === ".") {
            dotCounter++;
            if(dotCounter >1) {
                return false;
            }
        } else if (arrayOfNumbers.indexOf(stringWithoutSymbols.charAt(i)) === -1) {
            return false;
        }
    }
    
    console.log("here");
    return true;

 };

 isNumeric("1234");