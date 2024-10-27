function stringHandsOn(){
    var string = "   Hey you are doing good, keep it up   ";
    console.log(`The given string is : ${string}`);
    console.log(`-------------------`);

    var length = string.length;
    console.log(`The length of the given string is - ${length}`);
    console.log(`-------------------`);
 
    var trimString = string.trim();
    console.log(`After trim the string is : ${trimString}, and its length is ${trimString.length}`);
    console.log(`-------------------`);
    
    console.log(`The first character of string is : ${trimString.charAt(0)}, and its last character is : ${trimString.charAt(trimString.length-1)}`);
    console.log(`-------------------`);
    
    var sentence = trimString;
    console.log(`The string is : ${sentence.split(" ")}`);
    console.log(`Total words available in string is :${sentence.length}`);
    console.log(`-------------------`);

   var indexOfgood = sentence.indexOf("good");
   console.log(`The index of good word is : ${indexOfgood}`);
   console.log(`-------------------`);

  var result = sentence.substring(22);
  console.log(`String starting from 22 is : ${result}`);
  
}
stringHandsOn();