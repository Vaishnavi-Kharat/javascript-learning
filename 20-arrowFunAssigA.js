console.log("======== Arrow fun with no arg and no return value =======");
let greet = ()=>{
    console.log("Good Morning,Today is Tuesday");
}
greet();

console.log("======== Arrow fun with 3 arg and no return value =======");
let multiply = (n1,n2,n3=1)=>{
    const result=n1*n2*n3;
    console.log(`Multiplication of given number is : ${result}`);
}
multiply(5,5,2);
multiply(10,4);

console.log("======== Arrow fun with 5 arg and  return value =======");
let add = (n1,n2,n3,n4,n5)=>{
    console.log(`n1: ${n1},n2: ${n2},n3: ${n3},n4: ${n4},n5: ${n5}`);
    const addition = n1+n2+n3+n4+n5;
    console.log(`Addition of given value is : ${addition}`);

    
}
add(100,100,200,349,756);
add(" I am " ," learning " ," ES6 " ," features " ," in depth ");












