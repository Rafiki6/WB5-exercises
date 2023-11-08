let menu = [
    { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
    { id: 2, item: "Burger", category: "Meal", price: 7.29 },
    { id: 3, item: "Salad", category: "Meal", price: 8.29 },
    { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
    { id: 5, item: "Coke", category: "Drink", price: 2.29 },

];
// find a single element matching a condition
let searchId = 4;
let matching = null;
for (let i = 0; i < menu.length; i++) {
    if (menu[i] == searchId) {
        matching == menu[i];
        break; //YOU'VE FOUND IT STOP LOOKING
    }
}
if(matching != null){
    console.log(matching.item +" costs $"+ matching.price)
}else
{
    console.log("Item "+searchId + " Not Found")
}
//LOOPS TO SEARCH ARRAYS TO FIND A SUBSET OF ELEMENTS THAT MATCH A CONDITION
let searchCategory  = "Meal";
let matchings = [];

for (let i  = 0; i < menu.length;i++){
    if(menu[i].category == searchCategory)
    matchings.push(menu[i]);

}
if (matchings.length != 0){
   for(let i = 0; i < menu.length; i++){
    console.log(
        matchings[i].item + " costs $" + matchings[i].price);
   }

}
else {
    console.log("No items matched category " + searchCategory);
   }
