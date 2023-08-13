//1st
alert('Hello World!')

//2nd
let a = 8
let b = 9
const sum = (c, d) => c + d
alert(sum(a, b))

//3
let c = 1
let validation = (typeof c == 'number') ? 'is a number ;)' : 'is not a number :('
alert(validation)

//4
let d = 1
validation = (typeof d == 'string') ? 'is a string ;)' : 'is not a string :('
alert(validation)

//5
let e = true
validation = (typeof e == 'boolean') ? 'is boolean ;)' : 'is not a boolean :('
alert(validation)

//6
const sub = (c, d) => c - d
alert(sub(a, b))

//7
const mult = (c, d) => c * d
alert(mult(a, b))

//8
const div = (c, d) => c / d
alert(div(a, b))

const divInt = (c, d) => Math.floor(c / d)
alert(divInt(a, b))

//9 - 10
const isEvenOrOdd = e => (e % 2 == 0) ? 'is Even ;)' : 'is Odd :('
alert(isEvenOrOdd(b))