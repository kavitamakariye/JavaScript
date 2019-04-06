/**Properties in an Object can be added as well as removed,
 * as objects are dynamic.
 */

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);
//Adding a object property using dot notation
circle.location = {x:1};

//Adding a object property using bracket[] notation
//circle['location1'] = {y:1};

/*Deleting object property can be done using both 
dot as well as bracket notation*/

delete circle.location;
//delete circle['location'];