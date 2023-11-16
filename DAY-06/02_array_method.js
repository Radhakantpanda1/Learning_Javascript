let num=[1,2,3,4,5];
let b=num.toString();
console.log( typeof b);// string
console.log(b);// 1,2,3,4,5
let c=num.join("->");
console.log(c);//1->2->3->4->5
console.log(typeof c);//string
num.pop();
console.log(num);// pops out the last element from the array

// shift-removes the first element from the arrray
console.log(num.shift());//1
console.log(num.unshift(101));// returns new array length and add the element and the beginning of array
console.log(num)//[ 101, 2, 3, 4 ]