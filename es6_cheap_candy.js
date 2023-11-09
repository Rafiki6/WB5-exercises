let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },

];
// Which candies costs less than $4.00?
let lessThan4 = (v => v.price < 4);
products.filter(lessThan4).forEach(f =>console.log(f.product))

// Which candies has "M&M" its name?
let candies =(v => v.product.includes("M&M"));
products.filter(candies).forEach(f => console.log(f.product));
// Do we carry "Swedish Fish"?
//let candies1 = (v => v.product.includes("Swedish Fish"));
products.filter((v => v.product.includes("Swedish Fish"))).forEach(f => console.log("This product contain: "+ f.product+" "+f.price));