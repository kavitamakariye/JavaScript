/*Abstraction: Hides the detail, shows the essential
 */

 //First set the properties to private

 function Circle(radius){
    //let color = 'red';//local variable, it can't be accessed outside the function
    // this.color = color;//by doing this, it can be accessed outside the function
    this.radius = radius;//radius is the member of object circle so, it can be accessed using this keyword
    let defaultLocation = {x:1, y:2};//by defining it as local variable, here we are actually making it as private variable
    let computeOptimumLocation = function(factor){ // private method
        //....
    }
    this.draw = function(){
        computeOptimumLocation(0.1);//It will work without using this keyword because of the closure property, read at the end of this document about the closure and scope
        console.log('draw');
    }
}

const circle = new Circle(10);


/**Scope and Closure
 * A scope determines the accessibily(where it can be access) of the variables and functions
 * Scope is temporary and it dies, but closure stays their.
 * A closure determines what variable will be accessible to an inner function.
 * ex. Circle() is the parent function of the draw function so,
 * draw() can access local varaibles of Circle() i.e defaultLocation and computeOptimumLocation()
 */

/*Note: This private members can be access using getters and setter, see GettersAndSetters.js file. */