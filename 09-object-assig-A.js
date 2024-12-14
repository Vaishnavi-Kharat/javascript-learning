let professor = {
    fullName : "Elon Musk",
    age : 40,
    Qualification : "Phd In Maths",
    city : "Delhi",
    degrees :{
        engineering : 'CSC',
        PHD : 'Adv Computing',
        University : 'UK University'
    }
};
console.log(professor);
console.log(professor.degrees);

console.log("===============Add one array of certificates============");
professor.certificates= ["Hacker Rank Participation","Certificate in IFE course","Certification in Adv Programming"];
console.log(professor.certificates);

console.log("===============Add new property ============");
professor.totalExperience = "14 years";
console.log(professor);
console.log(professor.totalExperience);

console.log("===============Modify existing property ============");
professor.age = 45;
console.log(professor);

console.log("===============Add new certificate at 2nd index of array ============");
professor.certificates.splice(2,0,"Oracel Certified");
console.log(professor.certificates);

console.log("=============== Log last element of the array ============");
 let lastElement=professor.certificates[professor.certificates.length-1];
 console.log(lastElement);

 console.log("=============== Traverse the array using For loop S============");
 for (const element of professor.certificates) {
    console.log(element);
    
 }
