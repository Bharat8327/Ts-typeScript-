let a = [1, 2, 3, 4, 5, 5, 6, 7, { name: 'ram' }, { name: 22 }];
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  SUPER_ADMIN = 'super_admin',
}

// any
let b;
b = 10;
b = 'ram';
b.toUpperCase();
console.log(b);

// unknown
let c: unknown;
c = 10;
c = 'ram';

if (typeof c === 'string') {
  c.toUpperCase();
}

// function return nothing used that
function abcd(): void {
  console.log('return Nothing use that type');
}
// if funtion return somethin then use this format
function mul(): number {
  return 12;
}

let x: string | null;
x = 'sdfa'; // that is valid
// x = 12;// that is not valid  error :Type 'number' is not assignable to type 'string'

let y: undefined;

function xyz(): never {
  while (true) {}
}
xyz();
console.log('never exuted this if we are user never');

// Interface and aliases

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function user(obj: User) {
  console.log(obj);
}

user({
  name: 'krish',
  email: 'patel@gmail.com',
  password: 'ram@gmail.com',
  gender: 'Male',
});

interface UserDetails {
  name: string;
  email: string;
  password: string;
}

interface admin extends UserDetails {
  admin: boolean;
}

function AdminData(obj: admin) {
  obj.name = 'sdnj';
}

// both are combine and make online one interface =>
//  interface abcd{
//   name:string;
//   email:string
// }
interface abcd1 {
  name: string;
}
interface abcd1 {
  email: string;
}

function abd(obj: abcd1) {
  obj.name = 'ram';
  obj.email = 'ram@gmail.com';
}

// types Aliases
// ==============================================================================================================================================================================================================

type value = string | number | null;
let data: value;
data = 'csfasd';
data = null;
data = 43;
//  or

function take(a: value) {
  console.log(a);
}
take('sdnf');

// ==============================================================================================================================================================================================================
// intersection type
type User1 = {
  name: string;
  email: string;
};

type Admin = User1 & {
  getDetails(dta: string): void;
};

function acdb(obj: Admin) {
  obj.getDetails('hey');
}
