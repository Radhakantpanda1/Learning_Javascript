let x=5;
let y=3;
/*
console.log("x+y=",(x+y));
console.log("x-y=",(x-y));
console.log("x*y=",(x*y));
console.log("x/y=",(x/y));
console.log("x**y=",(x**y));
console.log("x%y=",(x%y));
*/
/*
let a=235;
console.log(++a);
console.log(--a);
console.log(a--);
console.log(++a);
console.log(a--);
*/
const k=2;
/*
console.log(++k);
console.log(--k);
console.log(k--);
console.log(++k);
console.log(k--);
*/
// output- Assignment to constant variable.


// Q1)Print whether you can drive or you can't drive based on age is <18 or >18 .
// Solution
let age=25;
if(age<18){
    console.log("You are underage ,you can't drive");
}
else{
    console.log("You are an adult ,you can drive");
}

//2.Use logical operators to find whether the age of a person lied between 10 and 20 or not.
// solution
let userAge=21;
if(userAge<10){
    console.log("Your age is less than 10");
}
else if(age>=10&&age<=20){
    console.log("Your age is in the range");
}
else{
    console.log("Your age is greater  than 20");
}

//q3.Write a javascript program to find whether a number is divisible by both 2 and 3.
// solution
let number=24;
if(number%2==0&&number%3==0){
    console.log(`${number} is divisible by both 2 and 3.`);
}
else{
    console.log(`${number} is not divisible.`);
}

// Q4.Write a javascript program to find whether a number is divisible by either 2 or 3.
// ans
let userNumber=31;
if(userNumber%2==0||userNumber%3==0){
    console.log(`${userNumber} is divisible by either 2 or 3.`);
}
else{
    console.log(`${userNumber} is not  divisible by either 2 or 3.`);
}