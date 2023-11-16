let a=[1,2,3,4,5];
console.log(a);// [ 1, 2, 3, 4, 5 ]
console.log(a.length);//  5
delete a[2]; // it delets the element but array size doesn't change
console.log(a); //  [ 1, 2, <1 empty item>, 4, 5 ]
console.log(a.length);//  5

let a1=[1,2,3,4,5];
let a2=[6,7,8,9,10];
let new_array=a1.concat(a2); // returns a new array
console.log(a1);//[ 1, 2, 3, 4, 5 ]
console.log(new_array);
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
a2.reverse();
console.log(a2);// [ 10, 9, 8, 7, 6 ]

a2.sort();
console.log(a2); //[ 10, 6, 7, 8, 9 ] // based on first alphabate it is sorted

// slice and splice
console.log("Slice and splice-")
let array1=[1,2,3,4,5,6,7];
console.log(array1)//
/* [
  1, 2, 3, 4,
  5, 6, 7
]
*/
let sliced_array=array1.slice(4);
console.log(sliced_array);//[ 5, 6, 7 ]

let spliced_aray=array1.splice(1,3,"radhakant","panda","sinu");
console.log(array1);//[ 1, 'radhakant', 'panda', 'sinu', 5, 6, 7 ]

