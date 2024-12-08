var evenOrOdd = function (num) {
    console.log(num);
    if (num%2==0) {
       console.log('Given number is : even');
       
    } else {
        console.log('Given number is : odd');
    }
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

console.log('------------------------------------');
var voteEligible =function(age){
    console.log('Age is :',age);
    
    if (age>=18) {
        console.log('You are eligible for vote');
    } else {
        console.log('Unfortunately you are not eligible');
    }
}
voteEligible(18);
voteEligible(20);
voteEligible(17);
voteEligible(40);

console.log('------------------------------------');

 function check (string){
    console.log('Given string is:',string);
    if (string.length>10) {
        console.log("Given string contain more than 10 character");  
    } else {
        console.log("Given string not contain more than 10 character");
    }   
}
check('Javascript 10');
check("Hello");

console.log('------------------------------------');

    function aa(str){
        console.log('Given string is :',str);
        if (str.startsWith('Java')) {
            console.log('string starts with java');
        } else {
            console.log('string  NOT stats with java');
        }
    }
    aa('Java language');
    aa('Programming language')