function isOver60(arrayValue){
    if(arrayValue >60){
        return true;
    }else{
        return false;
    }
}
let numbers = [7, 9, 64, 60, 12, 13, 67, 66];
let allOver60 = numbers.filter(isOver60)

if(allOver60 != undefined){
    console.log("All the eleemnts: "+allOver60)
}
else {
    console.log("Not founds")
}
// FILTER() FUNCTION USED TP PRINT OUT ALL THE ELEMENTS THAT ARE ABOVE 60LS