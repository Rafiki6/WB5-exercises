// FOREACH FUNCTION TERURN ALL THE ELEMENET IN THE ARRAY.
let kids = [
    { first : "Natalie", last : "Plyers" },
     { first: "Brittany", last: "Ray" },
     { first: "Zachary", last: "Westly" }
    ];
    function displayKids(arrayElement){
console.log(arrayElement.first+" "+arrayElement.last)
    }
    kids.forEach(displayKids)
const person = p => p
    kids.filter(person).forEach(f =>console.log(f.first +" "+ f.last))