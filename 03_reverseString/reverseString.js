const reverseString = function(string) {
    myString='';
    let stringArray=string.split("");
    let arrayLength=stringArray.length;

    for(let i=0;i<arrayLength;i++){
        let chars=stringArray[stringArray.length-1];
        myString+=chars;
        stringArray.pop();
    }
return myString;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
