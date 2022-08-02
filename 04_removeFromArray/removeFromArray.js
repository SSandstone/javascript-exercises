/*
//my first attempt, passes first 4 tests, fails final 3
const removeFromArray = function(array, ...args) {

for(const arg of args){

    for(const item of array){
        if (arg===array[item]){
        array.splice(item,1);
    };
    }
    
};

return array;

};

*/

//using new methods .forEach .includes()
const removeFromArray = function(...args) {
let array=args[0];
let myArray=[];

array.forEach((arg) =>{
    if(!args.includes(arg)){
        myArray.push(arg);
    };
})
return myArray;
};


removeFromArray([1, 2, 3, 4], 3);
removeFromArray([1, 2, 3, 4], 3, 2);
removeFromArray([1, 2, 3, 4], 7, "tacos");
removeFromArray([1, 2, 3, 4], 7, 2);
removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;