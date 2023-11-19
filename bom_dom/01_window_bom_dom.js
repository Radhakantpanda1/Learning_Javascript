// Practice problems

// DOM- Document Object Model
// BOM- Browser Object Model

// Q1. Wrute a JS program using prompt function to take input of age as a value from the user and use prompt whether he can drive or not

/*let tryAgain=true;
while(tryAgain){
    alert("Enter your age-");
    let age=prompt("Enter here");
    age=Number.parseInt(age);
    if(age<18){
        alert("You are underage");
    }
    else{
        alert("you can drive");
    }
    tryAgain=confirm("Do you want to check again");
}
*/

//Q2.Change the background color of page to any color given by user

let color=prompt("Enter the color-");
document.body.style.backgroundColor=color;

// Q3 tAKE A NUMBER FROM USER IF THE NUMBER IS ODD DIRECT TO MDN ELSE DIRECT TO GOOGLE

let userInput=prompt("Enter the number-");
userInput=Number.parseInt(userInput);
if(userInput%2==0){
    location.href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjMttb85tCCAxW4UGwGHaZWAI0QPAgJ";
}
else{
    
    location.href="https://developer.mozilla.org/en-US/";
}
