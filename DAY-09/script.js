alert("Enter the number");
let a= prompt("Enter it here");
a=Number.parseInt(a);
let write=confirm("you want to write a");
if(write){
    document.write(a);
}
else{
    alert("didn't print a");
}
