let x = 10;
let y = x; //copies the value of x in y

x = 20;

console.log("Value of x: " + x);//prints the value 20
console.log("Value of y: " + y);//prints the value 10

let a = {value:10};
let b = a;//copies the address of object in a to b
a.value = 20;//changes the value of where the object is store
console.log("Value of a object: " + a.value);//prints the value as 20
console.log("Value of b object: " + b.value);//prints the value as 20

/*Conclusion: Primitives are copied by their values and Objects are 
  copied by their reference.*/

  /**Another example using functions*/
   let number = 10;

   function increase(number){
       number++;// increases the number to 11 but goes out of scope outside the loop
        console.log("number variable value inside the function: "+ number);
    }

   increase(number);
   console.log("After calling increase() the value of number is: " + number );//prints 10

   //What if Object is used instead of a primitive, lets see

   let num = {value: 10};
   function increaseObj(num){
    num++;
   }

   increaseObj(num);
   console.log("The value of num is: "+ num.value);//prints 11