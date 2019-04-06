//Enumerating properties of Object, this can be done by using for-in loop.

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