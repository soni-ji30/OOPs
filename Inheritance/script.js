class CommonEmployee {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getdetails() {
        let temp = `Name:${this.name}<br/>Email:${this.email}<br/>Age:${this.age}<br/>`
        return temp;
    }
}
class FullTimeEmployee extends CommonEmployee {
    constructor(name, email, age, annualsalary) {
        super(name, email, age)
        this.annualsalary = annualsalary;
    }
    calculatesalary(commission = 0) {
        return this.annualsalary / 12 + commission;
    }
}
let emp = new FullTimeEmployee("Raghav", "raghav4325@gmail.com", 24, 450000);
document.write(emp.getdetails())
document.write(emp.calculatesalary(4500))

document.write("<hr/>")

class PartTimeEmployee extends FullTimeEmployee {
    constructor(name, email, age, perhour, totalhour) {
        super(name, email, age)
        this.perhour = perhour;
        this.totalhour = totalhour;
    }
    calculatesalary() {
        return this.perhour * this.totalhour;
    }
}
let emp2 = new PartTimeEmployee("Abhimanyu", "abhi5432@gmail.com", 25, 900, 150);
document.write(emp2.getdetails())
document.write(emp2.calculatesalary())