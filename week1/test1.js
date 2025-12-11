num = 0
if(num > 0 ){
    console.log("Positive number");
}
// else if(num === 0){
//     console.log("Zero");
// }
else{
    console.log("Non-positive number");
}

switch(num){
    case 1:
        break;
    case 0:
        console.log("Zero");
        break;
    default:
        console.log("Non-positive number");
}

let num1 = 1;
switch(num1){
    case '1':
        console.log("You entered one");
    case '2':
        console.log("You entered two");
    default:
        console.log("You entered a number other than one or two");
}

