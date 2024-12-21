const arrayNumbers = [1,-7,40,502,-77,91,0,108,-601];
arrayNumbers.forEach((currentValue,index)=>{
    console.log(`index : ${index}  =>  current value : ${currentValue}`);
})

console.log("============= Positive elements ============");

arrayNumbers.forEach((element)=>{
    if (element>0) {
        console.log(element);
    }
})
console.log("============= Negative elements ============");
arrayNumbers.forEach((element)=>{
    if (element<0) {
        console.log(element);
    }
})


console.log("============= Even Numbers ============");
arrayNumbers.forEach((element)=>{
    if (element%2==0) {
        console.log(element);
    }
})

console.log("============= Sum of all elements in the array ============");
let sum=0;
arrayNumbers.forEach((element)=>{
      sum=sum+element;
})
console.log(sum);

console.log("============= log only Even Indexed array value ============");
arrayNumbers.forEach((value,index)=>{
    if (index%2==0) {
        console.log(value);
    }
})