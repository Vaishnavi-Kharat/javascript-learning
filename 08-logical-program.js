console.log("------------ Even Number ------------");

let arr = [10,20, 47,93,60];
let countEven = 0;
console.log(arr);
for (const element of arr) {
    if (element%2==0) {
        console.log(element);
        countEven = countEven + 1;
    }
}
console.log(`The total even number is :${countEven}`);


console.log("------------- Find odd number from the array ---------------");
let array = [10,30,47,60,77];
for (const element of array) {
    if (element%2==1) {
        console.log(element);
    }
}

console.log("------------- Find odd number count from the array ---------------");
let array1 = [10,30,47,60,77];
let oddNumCount = 0;
for (const element of array1) {
    if (element%2==1) {
        console.log(element);
        oddNumCount = oddNumCount+1;
    }
}
console.log(`Odd number count is : ${oddNumCount}`);

console.log("-----------------WAP to count the vowels including lower and upper case---------------------");
const myLove = "I Love only JavaScript";
const vowels ="aeiou";
let counterVowels = 0;
for (const char of myLove) {
    if (vowels.includes(char.toLowerCase())) {
        counterVowels = counterVowels + 1 ;
    }
}
console.log(`Vowel count is : ${counterVowels}`);

console.log("------------ WAP to count the a character including lower and upper case------------");
const sentence = "JavaScript LANGUAGE";
let countChar = 0;
for (const char of sentence) {
    if (char == 'a' || char == 'A') {
        countChar = countChar + 1 ;
    }
    // if (char.toUpperCase() == 'A') {
    //     countChar = countChar + 1 ;
    // }
}
console.log(`Toatal A character is : ${countChar}`);
