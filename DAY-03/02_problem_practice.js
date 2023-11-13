//q1)write a sample for loop of your choice.
for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(`${i}X${j}=${i*j}`);
    }
}


//Q2) Sample program demonstrating for in loop.
let userData={
    userName:"Radhakant Panda",
    userAge:21,
    userId:"radhakant&gooytb",
    userGender:"male"
}
for (const key in userData) {
    console.log(`${key}:${userData[key]}`);
}


//Q3) Sample program demonstrating for of
const superHero=["Ironman","Spiderman","Thor","Superman"];
for (const i of superHero) {
    console.log(i);
}

