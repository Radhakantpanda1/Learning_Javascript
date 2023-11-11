console.log("hello");
// let const var
let userName="Radhakant Panda";//sinu
userName="sinu";//  variable  overwritting 
console.log(userName);//



// *********************** let , var and const ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let Name="Radhakant";
{
    let Name="sinu";
    console.log(Name);// sinu
}
console.log(Name);//Radhakant


var userID="radhakant@google";
{
    var userID="sinu@ytb";// var is  not block scoped 
}
console.log(userID);// sinu@ytb