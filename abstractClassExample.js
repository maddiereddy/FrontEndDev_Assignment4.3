/**
 * Created by maddie on 12/6/16.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.getName = function () {
        return this.name;
    };
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        _super.call(this, "Accounting and Auditing"); // constructors in derived classes must call super()
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The " + _super.prototype.getName.call(this) + " Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var HRDepartment = (function (_super) {
    __extends(HRDepartment, _super);
    function HRDepartment() {
        _super.call(this, "Human Resources"); // constructors in derived classes must call super()
    }
    HRDepartment.prototype.printMeeting = function () {
        console.log("The " + _super.prototype.getName.call(this) + " Department meets each Friday at 4pm.");
    };
    HRDepartment.prototype.generateNewEmployeeList = function () {
        console.log("Generating new employee list...");
    };
    return HRDepartment;
}(Department));
var QADepartment = (function (_super) {
    __extends(QADepartment, _super);
    function QADepartment() {
        _super.call(this, "Quality Assurance"); // constructors in derived classes must call super()
        this.bugList = [];
    }
    QADepartment.prototype.printMeeting = function () {
        console.log("The " + _super.prototype.getName.call(this) + " Department meets each Tuesday and Thursday at 10am.");
    };
    QADepartment.prototype.addBug = function (bug) {
        this.bugList.push(bug);
    };
    QADepartment.prototype.generateBugList = function () {
        var num = 1;
        console.log("Generating bug list: ");
        for (var _i = 0, _a = this.bugList; _i < _a.length; _i++) {
            var bug = _a[_i];
            console.log(num++ + ". Bug " + bug);
        }
    };
    return QADepartment;
}(Department));
var department; // create a reference to an abstract type
department = new AccountingDepartment(); // create and assign a non-abstract subclass
department.printName();
department.printMeeting();
console.log("*****************************");
var accountDept = new AccountingDepartment(); //create an instance of an AccountingDepartment
accountDept.printName();
accountDept.generateReports();
accountDept.printMeeting();
console.log("*****************************");
var hrDept = new HRDepartment(); //create an instance of an HRDepartment
hrDept.printName();
hrDept.generateNewEmployeeList();
hrDept.printMeeting();
console.log("*****************************");
var qaDept = new QADepartment(); //create an instance of an HRDepartment
qaDept.printName();
qaDept.addBug("#10023");
qaDept.addBug("#10035");
qaDept.addBug("#10111");
qaDept.generateBugList();
qaDept.printMeeting();
