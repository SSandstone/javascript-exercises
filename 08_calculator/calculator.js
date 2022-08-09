const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce((previousVal, currentVal) => previousVal+currentVal,0);
};

const multiply = function(array) {
  return array.reduce((previousVal, currentVal) => previousVal*currentVal,1);
};

const power = function(a,b) {
  let currentVal=1;

  for(let i=0;i<b;i++){
    currentVal=currentVal*a;
  };

  return currentVal;
};

const factorial = function(a) {
	currentVal=1;
  
  for(let i=1;i<a+1;i++){
    currentVal=currentVal*i;
  };
  return currentVal; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
