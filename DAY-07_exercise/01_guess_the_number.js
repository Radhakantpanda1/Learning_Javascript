function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 100)
console.log(rndInt)
let guess_count=0;
 while(guess_count<=100){
  let a=prompt("Enter a number in between 0 and 100-");
  guess_count++;
  a=Number.parseInt(a);
  if(a==rndInt){
    console.log(`Your guess is correct the number is =${rndInt}`);
    break;
  }
  else if (a<rndInt) {
    console.log(`Your number ${a} is less than the target element.`);
    
  } 
  else {
    console.log(`Your number ${a} is greater than the target element.`);
  }
 }
 console.log(`Your score is = ${100-guess_count}`);
 alert(`your score is ${100-guess_count}`);

 // Run at console.