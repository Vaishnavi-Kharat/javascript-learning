console.log("============ Adding 10 value in each element =============");

const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
let array = arrayNumbers.map((element)=>{
    return element+10;
})
console.log(arrayNumbers);
console.log(array);


console.log("============ log cube of given array value =============");

const cube = [20,11,40,25,23,11,9,31,60,2,19];
let cubeNum= cube.map((element)=>{
    return element*element*element;
})
console.log(cube);
console.log(cubeNum);


console.log("============ Add the index value into its corresponding each array element =============");

const num = [20,11,40,25,23,11,9,31,60,2,19];
let addIndexNum = num.map((element,index)=>{
    return element+index ;
})
console.log(num);
console.log(addIndexNum);