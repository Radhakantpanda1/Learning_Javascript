let array=[1,2,3,4,5,6,7,8,9];
array.forEach(element => {
    console.log(element);
});


let name="radhakantpanda";
let name_array=Array.from(name);// it is used to form a array
console.log(name_array);
/*
[
  'r', 'a', 'd', 'h',
  'a', 'k', 'a', 'n',
  't', 'p', 'a', 'n',
  'd', 'a'
]
*/

// using for loop
for(let i=0;i<name_array.length;i++){
 //   console.log(name_array[i]);
}
/*
r
a
d
h
a
k
a
n
t
p
a
n
d
a
*/

//  for each
name_array.forEach((element) => {
  // console.log(element);
});
/*
r
a
d
h
a
k
a
n
t
p
a
n
d
a
*/

//for of
for (const iterator of name_array) {
    console.log(iterator)
}
/*
r
a
d
h
a
k
a
n
t
p
a
n
d
a
*/