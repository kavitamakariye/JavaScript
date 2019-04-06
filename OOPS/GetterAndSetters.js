//Getters and Setters to access private members of objects.

function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x:0, y:0};//private or local variable

    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    this.draw = function(){
        console.log('draw');
    }

    Object.defineProperty(this,'defaultLocation',{//directly accessing the defaultLocation
        get:function(){//here get is a special keyword
            return defaultLocation;
        },
        set:function(value){//here set is a special keyword
            if(!value.x || !value.y)//validation
            throw new Error('Invalid Location');
            defaultLocation = value;
        }
    });

}

const circle = new Circle(10);
console.log(circle.defaultLocation);//Object.defineProperty()
console.log(circle.getDefaultLocation());//getter method

circle.defaultLocation = 1;//gives error
console.log(circle.draw);