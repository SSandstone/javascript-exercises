const sumAll = function(startNum, endNum) {
let counter=startNum;
let sum=0;
//after reviewing solution, I can use an if statement to transition values
// if startNum is larger, which would save me repeating code in second half of if
//could use for loop instead of while
if((startNum<0 || endNum<0)||(typeof startNum!=='number'||typeof endNum!=='number')){
    return 'ERROR';
};

if(startNum<endNum){
while(counter<endNum+1){

    sum+=counter;
    counter++;
}
} else {
    while(counter+1>endNum){

        sum+=counter;
        counter--;
    }
} 

return sum;

};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
