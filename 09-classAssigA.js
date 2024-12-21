class Vehicle {

    // constructor
    constructor(Company,model,color,fuel){
        this.Company = Company;
        this.model = model;
        this.color = color;
        this.fuel = fuel;
    }

    // Member Function or methods
    details(){
        console.log(`==== Vehicle Details ====== `);
        console.log(`Company Name is: ${this.Company},  Model of car is: ${this.model},  Color of car is: ${this.color},  Fuel used in car is:${this.fuel}`);  
    }
}

const Vehicle1 = new Vehicle("Tata","Latest","Black","Petrol");
Vehicle1.details();

console.log("====================== College details using class ====================");

class College {

    // constructor
    constructor(Name,department,placement,fees){
        this.Name = Name;
        this.department = department;
        this.placement = placement;
        this.fees = fees;
    }

    // Member Function or methods
    // details(){
    //     console.log(`==== College Details ====== `);
    //     console.log(`College Name is: ${this.Name}, Department in college is: ${this.department}, Total placement in college is: ${this.placement}, Fees Of college used is:${this.fees}`);  
    // }

    display() {
        console.log(`Name: ${this.Name}`);
        console.log(`Department: ${this.department}`);
        console.log(`Placement: ${this.placement}`);
        console.log(`Fees: ${this.fees}`);
    }
}

const clg = new College("RIT","7","92%","1500000");
clg.display();
