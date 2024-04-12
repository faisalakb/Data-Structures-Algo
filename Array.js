// Creating an array
let fruits = ['apple', 'banana', 'orange', 'grape'];


console.log(fruits[0]); 
console.log(fruits[2]); 


fruits[1] = 'pear';
console.log(fruits); 

// Adding elements to the end of the array
fruits.push('kiwi');
console.log(fruits); 

// Removing the last element from the array
let removedFruit = fruits.pop();
console.log(removedFruit); 
console.log(fruits);


for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Iterating over the array using forEach method
fruits.forEach(function(fruit) {
  console.log(fruit);
});


// Finding the index of an element in the array
let index = fruits.indexOf('orange');
console.log(index); 

// Removing an element from a specific index
let removedItem = fruits.splice(1, 1); 
console.log(removedItem);
console.log(fruits); 
