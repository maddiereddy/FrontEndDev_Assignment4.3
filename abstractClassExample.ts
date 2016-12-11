/**
 * Created by maddie on 12/6/16.
 */

/*
 Create an abstract class Department with one abstract method:
 abstract class Department {
     public name: string;
     constructor (name) {}
     printName(): void { console dept name with appropriate message }
     abstract printMeeting(): void;
 }

 Now extend this abstract class using AccountingDepartment:
 class AccountingDepartment extends Department {
 //Use department class property and methods here }

 Again create 2 more classes for different department and extend department class.
 And then create instance for all and show output using console.
 */


abstract class Department {
    private name: string

    constructor(name: string) {
        this.name = name
    }

    getName(): string {
        return this.name
    }

    printName(): void {
        console.log("Department name: " + this.name)
    }

    abstract printMeeting(): void // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting and Auditing") // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log(`The ${super.getName()} Department meets each Monday at 10am.`)
    }

    generateReports(): void {
        console.log("Generating accounting reports...")
    }
}

class HRDepartment extends Department {

    constructor() {
        super("Human Resources") // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log(`The ${super.getName()} Department meets each Friday at 4pm.`)
    }

    generateNewEmployeeList(): void {
        console.log("Generating new employee list...")
    }
}

class QADepartment extends Department {
    private bugList: string[] = []
    constructor() {
        super("Quality Assurance") // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log(`The ${super.getName()} Department meets each Tuesday and Thursday at 10am.`)
    }

    addBug(bug: string): void {
        this.bugList.push(bug)
    }

    generateBugList(): void {
        let num = 1
        console.log(`Generating bug list: `)
        for (let bug of this.bugList) {
            console.log(`${num++}. Bug ${bug}`)
        }
    }
}

let department: Department; // create a reference to an abstract type
department = new AccountingDepartment(); // create and assign a non-abstract subclass
department.printName()
department.printMeeting()

console.log(`*****************************`)

let accountDept = new AccountingDepartment() //create an instance of an AccountingDepartment
accountDept.printName()
accountDept.generateReports()
accountDept.printMeeting()

console.log(`*****************************`)

let hrDept = new HRDepartment() //create an instance of an HRDepartment
hrDept.printName()
hrDept.generateNewEmployeeList()
hrDept.printMeeting()

console.log(`*****************************`)

let qaDept = new QADepartment() //create an instance of an HRDepartment
qaDept.printName()
qaDept.addBug("#10023")
qaDept.addBug("#10035")
qaDept.addBug("#10111")
qaDept.generateBugList()
qaDept.printMeeting()