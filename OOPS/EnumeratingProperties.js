/*Enumerating properties of Object, this can be done by using for-in loop
  or approach is use Object.keys(objName) method of object.
*/

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

for(let key in circle){
    if(typeof circle[key] !== 'function')//checks the type of key and prints only properties and not methods
    //console.log(key);//return both properties and methods in an object
    console.log(key,circle[key]);// also prints members of object
}

//keys method approach

const keys = Object.keys(circle);//stores the keys in array, but cannot separate properties and methods
console.log(keys);

//to check the properties in an object use in operator as shown below

if('radius' in circle){
    console.log('Circle has a radius');
}