const numbers = [3, 4, 5, 6, 7, 8];
const output =[];

for (let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element *element;
    output.push(result);
}

function square (element){
    return element * element ;
}

//map
numbers.map(square);
console.log(output);
 function square(element){
     return element * element
 }
const result = number.map(function(element){
    return element * element ;
})
console.log(result);
 //map
 const result = number.map (x => x*x);
 console.log(result);

//filter use \
 const bigger = number.filter(x =>x<5);
 console.log(bigger);

 //find use
 const bigger = numbers.filter(x=> x<3);
 cost isThere = numbers.find( x => x > 5);
 console.log(isThere);