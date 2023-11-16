let a=[1,2,3,4,5,6,7,"radhaaknt",true ,null]
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

console.log(typeof a);// object

a[5]="sinu";// arrays are mutable

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
console.log(a.length);

// using for of loop
for (const iterator of a) {
    console.log(iterator)
}
/*
1
2
3
4
5
sinu
7
radhaaknt
true
null*/