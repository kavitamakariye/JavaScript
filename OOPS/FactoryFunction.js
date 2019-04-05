/*Factory Function: Is used to simplify object having multiple functions
i.e behaviours */

function createCircle(radius){
    return{
        radius,                  //es6 feature used here it can be writtern as radius: radius
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();