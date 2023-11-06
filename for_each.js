function showAllObjects(objectList){
    objectList.forEach(item => console.log(item.name)
        
    );
}

const data = [
    {id : 111, name : "Pencil",price : 1.11},
    {id : 222, name : "Pen",price : 2.22},
    {id : 333, name : "Ped",price : 3.33}
]
showAllObjects(data)



data.forEach(item => console.log(item.name))//LOOP CALLING NEW FUNCTION FOR EACH ITEM
data.forEach(console.log)//LOGS ALL THREE PARAETERS OUR CALLBACK RECEIVES (ITEM,INDEX,LIST)

function showItem(item, index, list){
    console.log(
        item.id,
        item.name,
        "$" + item.price.toFixed(2),
        "INDEX "+ index +" OF " + list.length
        );
}
data.forEach(showItem)