function stringBasics(){
    console.log(`My dream company is Microsoft`);
}
stringBasics();

function hobby(hobbies1,hobbies2,hobbies3){
    console.log(`My hobbies are: ${hobbies1},${hobbies2},${hobbies3}`);
    var result = hobbies1.length + hobbies2.length + hobbies3.length;
    console.log(`The total number of character available in hobby1,hobby2,hobby3 is : ${result}`);
    
}
hobby("Drawing","Travelling","Reading")