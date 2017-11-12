// Base functions
const compose = f => g => x => f(g(x));
const add = x => y => x + y;
const toString = n => n.toString();

// Builder functions
const adder = f => add(f);
const stringer = compose(toString);
const addNStringer = n => stringer(adder(n));

// Final form functions
const add3Stringer = addNStringer(3);
const add5Stringer = addNStringer(5);
const add7Stringer = addNStringer(7);

// Check it ...
const assertIsString = n => {if (typeof n !== 'string') console.log("test failed: n is not type string");}
const assertIsVal = (n, val) => {if (n != val) console.log("test failed: n is not"+val);}

var i = add3Stringer(15);
assertIsString(i);
assertIsVal(i, '18');
console.log(i);

i = add5Stringer(15);
assertIsString(i);
assertIsVal(i, '20');
console.log(i);

i = add7Stringer(15);
assertIsString(i);
assertIsVal(i, '22');
console.log(i);
