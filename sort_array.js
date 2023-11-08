// THE SORT() METHODS SORTS AN ARRAY ALPHABETICALLY
// BY DEFAULT THE SORT() METHOD SORTS THE VALUES IN ASCENDING ORDER AS STRINGS
let kids = ["Natalie", "Brittany", "Zachary"];

kids.sort();
for(let i = 0; i< kids.length; i++){
    console.log(kids[i])
}
kids.sort().forEach( a => console.log(a));

let numbers = [-3, 27, -400, 1, 111, 5];
let total = 0;
for(let i = 0; i< numbers.length;i++){
   total += numbers[i];

}
numbers.sort((a,b) => a - b);
console.log("Total: " + total);
console.log("Sorted Numbers: " + numbers);

numbers.sort((a,b) => a - b).forEach(f => console.log(f));
numbers.sort((a,b) => b -a ).forEach(f => console.log(f));



