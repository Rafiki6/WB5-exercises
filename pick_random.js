function pickOneFromList(list = []){
    const max = list.length;
    const r  = Math.floor(Math.random()* max);
    return list[r]
}
const fruit =  ["Apple", "Banana", "Cherry", "DragonFruit", "Papaya"];

const total = {};
for(let i = 0; i < 5; i++){
    const f = pickOneFromList(fruit);
    if(!total.hasOwnProperty(f)){
        total[f] = 1;

    }else{
        total[f] ++;
    }
}
console.log(total)