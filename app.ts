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
console.log('never exuted this if we are user never means ');
