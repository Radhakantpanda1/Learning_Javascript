// Q1. Ceate an array and take users input as number and return their sum to user.
/*
let userCart=[];
for(let i=0;i<10;i++){
    let a=prompt("Enter the number-");
    userCart[i]= Number.parseInt(a);
}
let sum=userCart.reduce((x,y)=> x+y);
alert("sum is =",sum);
*/

//Q2.kEEP ADDING NUMBERS TO AN ARRAY UNTIL 0 IS ADDED
/*
let userNumber=[];
let i=0;
while(true){
    let a=prompt("Enter a number-");
    userNumber[i]=Number.parseInt(a);
    if(userNumber[i]==0) break;
    i++;
}
console.log(userNumber);
*/

//Q3.fILTER THE NUMBERS FROM AN ARRAY THAT ARE DIVISIBLE BY 10.
let array=[10,11,12,13,20,96,45,20,78,950,126,100];
let new_numbers=array.filter((num)=> num%10==0);
console.log(new_numbers);//[ 10, 20, 20, 950, 100 ]

// Q4. return the product of all the elements in an array
let product=array.reduce((x,y)=> x*y);
console.log(product);//27685334476800000000 