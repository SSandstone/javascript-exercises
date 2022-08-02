const repeatString = function(string,num) {
    let myString='';
    
    if(num<0){
        return 'ERROR';
    }

    for(let i=0;i<num;i++){
        myString+=string;
    };

  return myString;  
};

repeatString('hey',3);
repeatString('hey',10);
repeatString('hey',1);
repeatString('hey',0);
repeatString('hey',-1);
repeatString('hey',);
repeatString('',10);

// Do not edit below this line
module.exports = repeatString;
