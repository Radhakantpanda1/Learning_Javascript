let userName="radhakant";
let title="panda";
console.log(userName);
console.log(userName.length);//9
console.log(userName.toLowerCase());//radhakant
console.log(userName.toUpperCase());//RADHAKANT
console.log(userName.slice(3,7));//haka
console.log(userName.slice(6));//ant
console.log(userName.replace("rad", "kad"));//kadhakant
console.log(userName.concat(title));//radhakantpanda
console.log(userName);
// all these methods return a new string original string is not effected

// Quick Quiz
// use for loop to print your name
let myName="Radhakant Panda";
let n;
/*
for(let i=0;i<myName.length;i++){
    n=n.concat(myName[i]);
}
console.log(n);
*/
for (const iterator of myName) {
    console.log(iterator);
}