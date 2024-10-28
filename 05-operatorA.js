function squareOfWordLength(sentence){
    console.log(`Given sentence is: ${sentence}`);
    var len = sentence.length;
    var square = len * len;
    return square;
}
var result = squareOfWordLength("JavaScript");
console.log(`Square of word length is: ${result}`);
console.log(`------------------------------`);

var result = squareOfWordLength("Google Chrome");
console.log(`Square of word length is: ${result}`);
console.log(`------------------------------`);

var result = squareOfWordLength("Web Developer Smart");
console.log(`Square of word length is: ${result}`);
console.log(`------------------------------`);

function string(){
    var str = "I am a Angular Developer"
    console.log(`GIven string is : ${str}`);
    console.log(`------------------------------`);

    var strLength = str.length;
    console.log(`The length of string is : ${strLength}`);

    var totalWord =str.split(" ");
    var len = totalWord.length;
    console.log(`Total word present in the string is : ${len}`);

    var result = strLength/len
    console.log(` String length divided by total words is : ${result}`);
    console.log(`------------------------------`);

    var res = strLength * len ;
    console.log(` String length multiply by total words is : ${res}`);
    
}
string();

