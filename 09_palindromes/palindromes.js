const palindromes = function (string) {
    let myString=string.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g,"").replace(/\s/g, "").toLowerCase();
    let myArray=myString.split("");
    let revArray=[];

    for(let i=1;i<myArray.length+1;i++){
        revArray.push(myArray[myArray.length-i]);
    };
    
    console.log(myArray.length);
    console.log(myString);
    console.log(myArray);
    console.log(revArray);
    
    let revString=revArray.join("");
    revString.trim();
    console.log(revString);

    if(myString===revString){
        return true;
    } else {
        return false;
    }

 
    /*  
    for(let i=0;i<myArray.length;i++){
        if(myArray[i]===revArray[i]){
            return true;
        } else {
            return false;
        };
    };*/
}; 
// Do not edit below this line
module.exports = palindromes;
