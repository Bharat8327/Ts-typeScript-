"use strict";
/*Classes and Object =>
• class Defination
• Constructor
• Access modifiers (public,private,public)
• ReadOnly Properties
• Optional Properties
• Parameter Properties
• Getters and Setters
• Static members
• Abstract classes and methods*/
class Device {
    constructor() {
        this.size = 'lg';
        this.price = 1200;
        this.category = 'Digital';
    }
}
let d1 = new Device();
let d2 = new Device();
console.log(d1);
//  Constructor =>
class student {
    constructor(name, age, subj = 'Maths') {
        this.name = name;
        this.age = age;
        this.subj = subj;
    }
}
const s1 = new student('ram', 43);
const s2 = new student('ram', 43, 'Bio');
console.log(s1, s2);
//  this keyword
class Abcd1 {
    getValue(name) {
        console.log('hello', name);
        this.getdata;
    }
    getdata() {
        console.log('hello');
    }
}
const t1 = new Abcd1();
t1.getValue('ram');
t1.getdata();
// access modifer
class Publiced {
    constructor(name) {
        this.name = name;
        this.halua = 'hlua';
        console.log('comes here first');
    }
}
class Protected extends Publiced {
    constructor(name) {
        console.log('goes to the parent');
        super(name);
    }
    getvalue() {
        console.log(this.name, this.halua);
    }
}
const p1 = new Protected('ram');
p1.getvalue();
// readonly Properties
class ReadOnlyP {
    constructor(name) {
        this.name = name;
    }
    changeName() {
        this.name = 'hulya';
    }
}
const tw1 = new ReadOnlyP('ram');
tw1.changeName();
console.log(tw1.name);
//  geters and setters
class UserDetails {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name1() {
        return this._name;
    }
    set name1(value) {
        this._name = value;
    }
}
const da = new UserDetails('ram', 100);
console.log(da.name1);
da.name1 = 'rahul';
console.log(da, da._name);
// statics keywords uses
class StudentDetails {
    static getRandomNumber() {
        return Math.random();
    }
}
StudentDetails.version = 1.0;
const instance = new StudentDetails();
console.log(StudentDetails.getRandomNumber(), StudentDetails.version);
// abstract classes
class CookingEssentials {
    constructor(gas, gasKaName) {
        this.gas = gas;
        this.gasKaName = gasKaName;
    }
}
class idli extends CookingEssentials {
}
class cake extends CookingEssentials {
}
// funtions type in ts
function abcdef(name, age, cb) {
    console.log(cb('krish'));
}
abcdef('chirkut', 43, (value) => {
    return 'ram';
});
// option parameter and default parameters
function details(name, age, gender = 'Male') {
    console.log(name, gender, age);
}
details('rahul', 32, 'Male');
details('msk', 12);
// rest operator in funtion (multiple argeument ko ek array mein convert kar dena rest opertor use in funtion)
function sum(...arr) {
    console.log(arr);
}
sum('ram', 'shyam', 'krishna');
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
console.log(add('Hello, ', 'World!')); // Hello, World!
// ==========================Generics===========================================================================================================
// 1.Generic function
// 2.Generic Interfaces
// 3.Generic Classes
function genricsFun(name, age) {
    console.log(name, age);
}
genricsFun('love', 23);
// u can skip this <String> when call the funtion
genricsFun('krish', 34); // he can auto checks what is type
function test(arg) {
    console.log(arg.age);
}
test({ name: 'ram', age: 23, key: 'test' });
// genrics classes
class check {
    constructor(name) {
        this.name = name;
    }
}
const b1 = new check('raj');
const b2 = new check(34);
// one logical in funtion =>
function take(name, age) {
    // return 'hey'; we can't return that type used another type
    // return 'hey' as T; // or <T>'hello'
    return 'hyy';
}
console.log(take('ram', 34));
// modeuls
// import and export genrally used in react
//  export default we are already know
// ==========================Type Assertion===========================================================================================================
// Type casting
// Non-null operator
let ds = 'dfsd';
ds.toUpperCase(); // type assertion
console.log(ds);
console.log(ds.toUpperCase());
// (<number>ds)  // used that
// Non-null assertion operator
// The non-null assertion operator (!) tells TypeScript that a value is not null or undefined, even if the type could be.
// Example:
let name1;
name1 = 'hello';
// Normally, TypeScript would warn if you try to access a property on a possibly null/undefined variable.
// The ! operator asserts that name1 is not null or undefined.
console.log(name1.toUpperCase()); // No error, TypeScript assumes name1 is a string here.
// =====================Types Guards=====================================================================
// 1.Types Guards and TypeScript Utility
// 2.Using typeof and instanceof
// 3.partial, Required ,ReadOnly
// 1. Type Guards in TypeScript(type narrowing)
// Type guards help you narrow down the type of a variable within a conditional block.
function printId(id) {
    if (typeof id === 'string') {
        // Here, TypeScript knows 'id' is a string
        console.log(id.toUpperCase());
    }
    else {
        // Here, TypeScript knows 'id' is a number
        console.log(id.toFixed(2));
    }
}
printId('hello'); // Output: HELLO
printId(42); // Output: 42.00
// 2. Using 'instanceof' for type guards with classes
class Car {
    drive() {
        console.log('Driving a car');
    }
}
class Bike {
    ride() {
        console.log('Riding a bike');
    }
}
function move(vehicle) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    }
    else {
        vehicle.ride();
    }
}
move(new Car()); // Output: Driving a car
move(new Bike()); // Output: Riding a bike
// Partial: Makes all properties optional
const partialUser = { name: 'Alice' };
// Required: Makes all properties required
const requiredUser = {
    name: 'Bob',
    age: 30,
    email: 'bob@example.com',
};
// Readonly: Makes all properties readonly (cannot be changed after initialization)
const readonlyUser = { name: 'Charlie', age: 25 };
/*
readonlyUser.name = "Dave"; // Error: Cannot assign to 'name' because it is a read-only property.
*/
console.log(partialUser, requiredUser, readonlyUser);
