//passes all tests, could also shorten to one line using math.round(formula*10)/10

const ftoc = function(fDegrees) {
  fToCFormula=(fDegrees-32)*(5/9);
  return Number(fToCFormula.toFixed(1));
};

const ctof = function(cDegrees) {
  cToFFormula= cDegrees*(9/5)+32;
  return Number(cToFFormula.toFixed(1));
};

ftoc(32);
ftoc(100);
ftoc(-100);

ctof(0);
ctof(73.2);
ctof(-10);
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
