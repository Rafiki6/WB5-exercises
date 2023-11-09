let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];

// USING MAP() AND FOREACH()
// cart.map(a => a.item).forEach(f => console.log(f))  ;
//  USING REDUCE()
// f =(total, arrayValue) => total + (arrayValue.price * arrayValue.quantity);
// const totalPrice = cart.reduce(f,0);
// console.log("The Total Price $: " + totalPrice);
// USING SORT()
cart.sort((a,b) => a.price - b.price).forEach(f => console.log(f.item));
// cart.sort((a, b) => a.item.localeCompare(b.item)).forEach(item => console.log(item.item));
