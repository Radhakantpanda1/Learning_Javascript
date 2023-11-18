console.log(console);
console.time("forloop");
for(let i=0;i<10;i++){
    console.log("hello");
}
console.timeEnd("forloop");

let userDetails={
    userName:"Radhakant panda",
    userAge:21,
    userId:"rkp@google"
}
for (const key in userDetails) {
    console.log(userDetails[key]);
}
console.table(userDetails);