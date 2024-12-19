let employee = `{
     "name":"Aleix Melon",
     "id":"E00245",
     "role":["Dev","DBA"],
     "age":23,
     "doj":"11-12-2019",
     "married":false,
     "address":{
        "street":"32 ,Laham St",
        "city":"Innsbruck",
        "country":"Austria"
      },
     "referred-by":"E0012"
}`
const TypeOfEmployee = typeof employee;
console.log(TypeOfEmployee);

console.log(`===== JSON String to Object conversion =======`);
const EmployeeDataInObjectFormat = JSON.parse(employee);
console.log(typeof EmployeeDataInObjectFormat);

console.log("============ Log Dev on the console ============");
console.log(EmployeeDataInObjectFormat.role[0]);

console.log("============ Log only last name ============");
const lastName = EmployeeDataInObjectFormat.name.split(" ")[1];
console.log(lastName);

console.log("============ Log only joining year ============");
const year = EmployeeDataInObjectFormat.doj.split("-")[2];
console.log(year);
