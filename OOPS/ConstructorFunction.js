//Constructor Function
// Constructor function name should start with a capital letter

function Circle(radius){
    console.log('this', this);
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const another = Circle(1); 


// Functions are Objects
// Value Type/Primititves are copied by values and Reference Type/Objects are copied by their
// reference.