// THE REDUCE() METHODS EXECUTES A REDUCER FUNCTION FOR ARRAY ELEMENTS
// REDUCE(): RETURNS A SINGLE VALUE,WHICHIS THE REDUCER'S ACCUMULATED RESULT.
let numbers = [300, 150, 25];
 function getSum(currentTotal , arrayvalue){
    return currentTotal + arrayvalue
 }
let sum = numbers.reduce(getSum,0);
console.log(sum)

f = (currentTotal , arrayvalue) => currentTotal + arrayvalue;
const total = numbers.reduce(f,0)
console.log(total)


//FOR EACH USING GLOBAL ACCUMULATOR FOR TOTAL
accumulator = 0 //RUNNING SUBTOTAL GLOBAL VAIABLE
f2 = (n) => accumulator = accumulator + n;
numbers.forEach(f2)
console.log(accumulator)

let ticketPackage = [
    {ticketType: "Senior", price: 49.99, numTickets: 1},
    {ticketType: "Adult", price: 79.99, numTickets: 2},
    {ticketType: "Child", price: 29.99, numTickets: 3}
   ];
   function getTotalCost(currentTotal, arrayElement) {
    return currentTotal + 
    (arrayElement.price * arrayElement.numTickets);
   }
   let sum1 = ticketPackage.reduce(getTotalCost, 0);
   console.log(sum1)

   f = (currentTotal, arrayElement) => currentTotal + (arrayElement.price * arrayElement.numTickets);
   const price = ticketPackage.reduce(f,0);
   console.log("The price $: "+price)

