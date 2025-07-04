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
  size = 'lg';
  price = 1200;
  category = 'Digital';
}

let d1 = new Device();
let d2 = new Device();

console.log(d1);

//  Constructor =>

class student {
  constructor(
    public name: string,
    public age: number,
    public subj: string = 'Maths',
  ) {}
}
const s1 = new student('ram', 43);
const s2 = new student('ram', 43, 'Bio');
console.log(s1, s2);

//  this keyword

class Abcd1 {
  getValue(name: string) {
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
  private halua: string = 'hlua';
  constructor(public name: string) {
    console.log('comes here first');
  }
}

class Protected extends Publiced {
  constructor(name: string) {
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
  constructor(public readonly name: string) {}
  changeName() {
    this.name = 'hulya';
  }
}

const tw1 = new ReadOnlyP('ram');
tw1.changeName();
console.log(tw1.name);

//  geters and setters

class UserDetails {
  constructor(public _name: string, public age: number) {}

  get name1() {
    return this._name;
  }
  set name1(value: string) {
    this._name = value;
  }
}

const da = new UserDetails('ram', 100);

console.log(da.name1);
da.name1 = 'rahul';
console.log(da, da._name);

// statics keywords uses

class StudentDetails {
  static version = 1.0;
  static getRandomNumber(): number {
    return Math.random();
  }
}

const instance = new StudentDetails();
console.log(StudentDetails.getRandomNumber(), StudentDetails.version);

// abstract classes

class CookingEssentials {
  constructor(public gas: number, public gasKaName: string) {}
}
class idli extends CookingEssentials {}
class cake extends CookingEssentials {}

// funtions type in ts
function abcdef(name: string, age: number, cb: (value: string) => string) {
  console.log(cb('krish'));
}

abcdef('chirkut', 43, (value: string) => {
  return 'ram';
});

// option parameter and default parameters

function details(name: string, age: number, gender: string = 'Male') {
  console.log(name, gender, age);
}

details('rahul', 32, 'Male');
details('msk', 12);

// rest operator in funtion (multiple argeument ko ek array mein convert kar dena rest opertor use in funtion)
function sum(...arr: string[]) {
  console.log(arr);
}

sum('ram', 'shyam', 'krishna');

// funtion overloading in ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add('Hello, ', 'World!')); // Hello, World!

// ==========================Generics===========================================================================================================
// 1.Generic function
// 2.Generic Interfaces
// 3.Generic Classes

function genricsFun<T>(name: T, age: number) {
  console.log(name, age);
}
genricsFun<String>('love', 23);

// u can skip this <String> when call the funtion
genricsFun('krish', 34); // he can auto checks what is type

// Generic Interfaces

interface halua<T> {
  name: string;
  age: number;
  key: T;
}

function test(arg: halua<string>) {
  console.log(arg.age);
}

test({ name: 'ram', age: 23, key: 'test' });

// genrics classes

class check<P> {
  constructor(public name: P) {}
}

const b1 = new check<string>('raj');
const b2 = new check(34);

// one logical in funtion =>
function take<T>(name: T, age: number): T {
  // return 'hey'; we can't return that type used another type
  // return 'hey' as T; // or <T>'hello'
  return <T>'hyy';
}

console.log(take('ram', 34));

// modeuls
// import and export genrally used in react
//  export default we are already know

// ==========================Type Assertion===========================================================================================================
// Type casting
// Non-null operator

let ds: any = 'dfsd';

(ds as string).toUpperCase(); // type assertion
console.log(ds);

console.log((ds as string).toUpperCase());

// (<number>ds)  // used that

// Non-null assertion operator
// The non-null assertion operator (!) tells TypeScript that a value is not null or undefined, even if the type could be.
// Example:
let name1: null | undefined | string;
name1 = 'hello';
// Normally, TypeScript would warn if you try to access a property on a possibly null/undefined variable.
// The ! operator asserts that name1 is not null or undefined.
console.log(name1!.toUpperCase()); // No error, TypeScript assumes name1 is a string here.

// =====================Types Guards=====================================================================
// 1.Types Guards and TypeScript Utility
// 2.Using typeof and instanceof
// 3.partial, Required ,ReadOnly

// 1. Type Guards in TypeScript(type narrowing)
// Type guards help you narrow down the type of a variable within a conditional block.

function printId(id: number | string) {
  if (typeof id === 'string') {
    // Here, TypeScript knows 'id' is a string
    console.log(id.toUpperCase());
  } else {
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

function move(vehicle: Car | Bike) {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.ride();
  }
}
move(new Car()); // Output: Driving a car
move(new Bike()); // Output: Riding a bike

// 3. TypeScript Utility Types: Partial, Required, Readonly

interface User {
  name: string;
  age: number;
  email?: string;
}

// Partial: Makes all properties optional
const partialUser: Partial<User> = { name: 'Alice' };

// Required: Makes all properties required
const requiredUser: Required<User> = {
  name: 'Bob',
  age: 30,
  email: 'bob@example.com',
};

// Readonly: Makes all properties readonly (cannot be changed after initialization)
const readonlyUser: Readonly<User> = { name: 'Charlie', age: 25 };
/*
readonlyUser.name = "Dave"; // Error: Cannot assign to 'name' because it is a read-only property.
*/

console.log(partialUser, requiredUser, readonlyUser);
