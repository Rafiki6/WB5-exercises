let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];

   console.log(cart.map(r => r.item).join("\n"));
   console.log(cart.map(r => r.price).join("\n"));

// function getTotal(list) {
//     const itemSubTotal = [];

//     for (let i = 0; i < list.length; i++) {
//         const item = list[i];
//         const result = item.price * item.quantity;
//        itemSubTotal.push({item : item.item, result})
//     }

//     return itemSubTotal
// }
// const itemSubTotal = getTotal(cart);
// itemSubTotal.forEach((item) => {
//     console.log(
//       `Item : ${item.item},
//       subTotal : $${item.result}`)})
