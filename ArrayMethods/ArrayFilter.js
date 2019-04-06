const numbers = [1,-1,2,3];

const filtered = numbers.filter(function(value){//filter method of array
    return value >= 0;
});

console.log(filtered);