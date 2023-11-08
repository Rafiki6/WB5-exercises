function isOver60(arrayValue){
if(arrayValue > 60){
return true;
}
else{
    return false
}
}
let numbers = [7, 9, 65, 60, 12, 13, 64, 62];
let firstValOver60 = numbers.find(isOver60);

if(firstValOver60 != undefined){
console.log(firstValOver60)
}
else {
    console.log("No values over 60");
   }
//    ALWAYS FIND(), ONE ELEMENT IN THE ARRAY WHICH IS THE FIRST ONE IN THE ARRAY.
// SHORT VERSION
let isOver61 = (v => v > 60);
console.log(numbers.find(isOver61));
// SHOTEST
console.log(numbers.find(v => v > 60));