let result11 = 10 + 5 * 2
let result12 = (10+5) * 2
let result13 = 15%4+1
let result14 = 4**2/2

console.log(`num 1.1 : ${result11}`);
console.log(`num 1.2 : ${result12}`);
console.log(`num 1.3 : ${result13}`);
console.log(`num 1.4 : ${result14}`);
console.log(`\n`);


let a21 = 10
a21 += 5
console.log(`num 2.1 : ${a21}`);
let b22 = 8
b22 /= 4
console.log(`num 2.2 : ${b22}`);
let count = 5
let a23 = count++
let b23 = count
console.log(`num 2.3 : ${a23}, ${b23}`);
let a24 = ++count
let b24 = count
console.log(`num 2.4 : ${a24}, ${b24}`);
console.log(`\n`);

console.log("num 3.1 : ", 10 === "10");
console.log("num 3.2 : ", 20 != "20");
console.log("num 3.3 : ", null >= 0);
console.log("num 3.4 : ", false == 0);
console.log(`\n`);

let result41 = "20" + 5
console.log(`num 4.1 : ${result41}\t\t`, typeof result41);
let result42 = "20" - 5
console.log(`num 4.2 : ${result42}\t\t`, typeof result42);
let result43 = 1 + true
console.log(`num 4.3 : ${result43}\t\t\t`,  typeof result43);
let result44 = "Hello" + 10
console.log(`num 4.4 : ${result44}\t`, typeof result44);
