// for each loop calls the function  once for every array element

// map creates a new array by performing some operation on each array elememnt
let a=[1,2,3,4,5];
let new_array=a.map((value)=>{
    return value;
})
let another_new_array=a.map((value)=>value)
console.log(new_array);//[ 1, 2, 3, 4, 5 ]
console.log(another_new_array)//[ 1, 2, 3, 4, 5 ]
let array=a.filter( (element)=> element%2==0);
console.log(array)//[ 2, 4 ]


// reduce

let userCart=[100,120,36,98,45,74,123,69];
let total_price=userCart.reduce((sum,price)=>{
    return sum+price;
})
console.log(total_price);

/*
map and filter returns an array while reduce returns a value.
*/