let products = [
    {prodId: 2, item: "Notepads (12 pk)", price: 12.29},
    {prodId: 12, item: "Black Pens (12 pk)", price: 15.70},
    {prodId: 22, item: "Stapler", price: 12.79}
   ];

   products.sort((a,b) => a.price - b.price).forEach(f => console.log(f.item));
   products.sort((a,b) => a.item.localeCompare(b.item)).forEach(f => console.log(f.item));


// SECOND METHOD
   products.sort(function(a, b){
    if(a.item < b.item) return -1;
    if(a.item > b.item) return 1;
    return 0;
   });
   let numProducts = products.length;
   for(let i = 0; i < numProducts; i++) {
    console.log(products[i].item + 
    " $" + products[i].price.toFixed(2));
   }
   