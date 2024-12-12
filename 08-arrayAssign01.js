const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
// First Element
let firstElement=fruits_seasonal[0];
console.log(firstElement);
// Last Element
let lastElement=fruits_seasonal[fruits_seasonal.length-1];
console.log(lastElement);

console.log('---------------- Inserting at first --------------');

console.log('Before Insertion');
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya")
console.log(fruits_seasonal);

console.log('----------------------------- Remove Mango from the array---------------------------');
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);

console.log('---------------------------- Insert Pineapple at the last --------------------------');
fruits_seasonal.push("Pineapple")
console.log(fruits_seasonal);

console.log('----------------------- Inserting element Dragon fruit before Water Melon -------------------');
fruits_seasonal.splice(5,0,"Dragon Fruit");
console.log(fruits_seasonal);

console.log('------------------------ Replace element Orange with Kiwi -----------------------');
fruits_seasonal[2]= "Kiwi";
console.log(fruits_seasonal);

console.log('------------------------ Log only first element start from index 1-4 -----------------------');
const result =fruits_seasonal.slice(0,4);
console.log(result);

console.log('-------------------------------------------- Log only 3 last element using length--------------------------------------');

const lastThreeElements = fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(lastThreeElements );
