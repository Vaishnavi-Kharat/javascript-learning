const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(arrayNumbers);

console.log(`============ Elements greater than 50 ===========`);
const num =arrayNumbers.filter((element)=>{
    return element>50;
})
console.log(num);

console.log(`============ Even Numbers ===========`);
const even =arrayNumbers.filter((element)=>{
    return element%2==0;
})
console.log(even);

console.log(`============ Odd Numbers ===========`);
const odd =arrayNumbers.filter((element)=>{
    return element%2==1;
})
console.log(odd);

console.log(`============ Numbers multiple of 5 ===========`);
const multipleOf5 =arrayNumbers.filter((element)=>{
    return element%5==0;
})
console.log(multipleOf5);

console.log(`============ Numbers between 20 and 50 ===========`);
const numBetween =arrayNumbers.filter((element)=>{
    return element>20 && element<50;
})
console.log(numBetween);