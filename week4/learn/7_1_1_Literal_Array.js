let test1 = ["สมศรี", "สมชาย", "สมเกียรติ", "สมหญิง"];
let test2 = {0 : ["สมศรี", "สมชาย", "สมเกียรติ", "สมหญิง"], "j" : ["ประยุทธ์", "ประวิตร", "ประเสริฐ", "ประดิษฐ์"]};
let test3 = [["สมศรี", "สมชาย", "สมเกียรติ", "สมหญิง"], ["ประยุทธ์", "ประวิตร", "ประเสริฐ", "ประดิษฐ์"]];

// console.log(`frist student number (Index 0 ) : ${test1[0]}`);
// console.log(`frist student number (Index 3 ) : ${test1[3]}`);
console.log(`tset ob ${test2.j[1]}`); // ประเสริฐ
// console.log(`tset ob ${test2[0][1]}`); // ประเสริฐ
// console.log(`tset arr2 ${test3[0][1]}`); // ประเสริฐ
// console.log(`tset arr2 ${test3[0]}`); // ประเสริฐ
console.log(`tset arr2 ${test1.splice(0, 2)}`); // ประเสริฐ


// console.log(`total student (length) : ${test1.length}`);
// console.log();

// console.log(`Before student Index 2 : ${test1}`);
// test1[2] = "ประยุทธ์";
// console.log(`After student Index 2 : ${test1}`);

// console.log(`Before student Index 2 : ${test2.j}`);
// test2.j[2] = "ประยุทธ์";
// console.log(`After student Index 2 : ${test2.j}`);

// console.log(`Before student Index 2 : ${test3[1]}`);
// test3[1][2] = "ประยุทธ์";
// console.log(`After student Index 2 : ${test3[1]}`);



