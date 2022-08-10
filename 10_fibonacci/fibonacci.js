const fibonacci = function(number) {
    //new idea
    //push numbers into array
    //give it starting numbers to reference
    let fibArr=[1,1];

    //make strings allowable
    let seqNum=parseInt(number);

    //push last index + current index into array
    for(let i=1;i<seqNum;i++){
        fibArr.push(fibArr[i-1]+fibArr[i]);
    }

    //only works with positive integers
    if(number>0){
        return fibArr[seqNum-1];
    } else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;

// fibonacci(4)returns the 4th member of the series: 3  (1, 1, 2, 3)
// 1 1 2 3 5 8 13 21...
//+0 0 1 1 2 3 5 