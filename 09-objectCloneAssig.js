console.log("==================== Creating object bank SBI ====================");
let bankSbi = {
    fullName : "State bank Of India",
    loan :"4%",
    holiday : "Saturday",
    branch : 4
}
console.log(bankSbi);
console.log(`Name of bank is : ${bankSbi.fullName}`);
console.log(`The loan given by bank is of interest : ${bankSbi.loan}`);
console.log(`Bank is close on : ${bankSbi.holiday}`);
console.log(`Total number of branches bank have : ${bankSbi.branch}`);

console.log("==================== Creating another object bank location ====================");
let bankLocation = {
    street : "Shivaji Nagar",
    city : "Pune",
    pin : "413325"
}
console.log(bankLocation);
console.log(`Street name of bank : ${bankLocation.street}`);
console.log(`Bank present in city : ${bankLocation.city}`);
console.log(`Pin code of bank is : ${bankLocation.pin}`);


console.log("==================== Cloning of two object ====================");
let bankClone = Object.assign({ }, bankSbi,bankLocation);
console.log(bankClone);

console.log("==================== Creating another object rate Of Interest ====================");
let rateOfInterest ={
    homeLoanInterest : "2%",
    personalLoanInterest : "4%",
    dueInterest : "10%"
}
console.log(rateOfInterest);
console.log(`Home Loan is given at interest : ${rateOfInterest.homeLoanInterest}`);
console.log(`Personal Loan is given at interest : ${rateOfInterest.personalLoanInterest}`);
console.log(`Due interest is : ${rateOfInterest.dueInterest}`);


console.log("================ Merge above three object ===============");
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest)
console.log(sbiDetails);

console.log("============== Traversing merge object ===========");
for (const key in sbiDetails) {
    if (Object.prototype.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(element);
        
    }
}
