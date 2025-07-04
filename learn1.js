"use strict";
let a = [1, 2, 3, 4, 5, 5, 6, 7, { name: 'ram' }, { name: 22 }];
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["SUPER_ADMIN"] = "super_admin";
})(UserRole || (UserRole = {}));
// any
let b;
b = 10;
b = 'ram';
b.toUpperCase();
console.log(b);
// unknown
let c;
c = 10;
c = 'ram';
if (typeof c === 'string') {
    c.toUpperCase();
}
// function return nothing used that
function abcd() {
    console.log('return Nothing use that type');
}
// if funtion return somethin then use this format
function mul() {
    return 12;
}
let x;
x = 'sdfa'; // that is valid
// x = 12;// that is not valid  error :Type 'number' is not assignable to type 'string'
let y;
function xyz() {
    while (true) { }
}
xyz();
console.log('never exuted this if we are user never');
function user(obj) {
    console.log(obj);
}
user({
    name: 'krish',
    email: 'patel@gmail.com',
    password: 'ram@gmail.com',
    gender: 'Male',
});
function AdminData(obj) {
    obj.name = 'sdnj';
}
function abd(obj) {
    obj.name = 'ram';
    obj.email = 'ram@gmail.com';
}
let data;
data = 'csfasd';
data = null;
data = 43;
//  or
function take(a) {
    console.log(a);
}
take('sdnf');
function acdb(obj) {
    obj.getDetails('hey');
}
