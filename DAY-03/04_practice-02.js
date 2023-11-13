// Q1)WAP to print the marks of a student using forin loop in an object.
let studentMarks={
    Radhakant:8,
    Rajakumar:9.99,
    Rajat:9.98,
    Sanket:9.97,
    Gopal:9.99
}
// console.log( typeof Object.keys(studentMarks).length);
console.log("solution 01-")
for (const key in studentMarks) {
    console.log(`${key} has scored ${studentMarks[key]}`)
}

//  q2)  Above question using for loop
console.log("solution 02-")
for(let i=0;i<Object.keys(studentMarks).length;i++){
    console.log(Object.keys(studentMarks)[i],"=",studentMarks[Object.keys(studentMarks)[i]]);
}

//Q3) WAP to find mean of 5 numbers using function
let meanOfNumbers=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log(meanOfNumbers(5,6,9,4,8));
/*
//Q4)
let correctNumber=101;
let cn;
while(cn!=correctNumber){
    cn=prompt("Enter the number");
    cn=parseInt(cn);
}
// run this code at console.
*/