//1)WAP tot convert a given string to lower case in JS.
let userName="radhakantpanda";
let newUserName=userName.toUpperCase();
console.log(newUserName);

//2.Extract the amount out of this string- "Please give me Rs 1599"
let demand="Please give me Rs 1599"
let money=demand.slice(18);
console.log(money);
console.log(typeof money);
money=parseInt(money);
console.log(typeof money);

//3.Explore includes , startswith and endswith functions.
console.log(userName.includes("panda"));// true
console.log(userName.startsWith("radha"));// true
console.log(userName.endsWith("pnda"));// false

//4.Try to change the 4th character of a string, were you able to do it. // string is immutable.
console.log(userName.replace("d","k"));
console.log(userName);

//5.What will be the following print in JS- console.log("radhakant\"panda"); 
console.log("radhakant\"panda".length);