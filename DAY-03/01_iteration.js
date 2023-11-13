// for loop to find sum of first n numbers
let sum=0;
let i;
for(i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);

// to find factorial of a number
let fact=1;
for(let i=1;i<=5;i++){
    fact=fact*i;
}
console.log(fact);



//for of
const userDetails={
    userName:"Radhakant Panda",
    userAge:21,
    userId:"radhakant&gooytb",
    userGender:"male"
}
for (const key in userDetails) {
    console.log(`${key}-${userDetails[key]}`);
}

/*
for (const iterator of userDetails) {
    console.log(userDetails[key]);
}
        // not iterable
*/