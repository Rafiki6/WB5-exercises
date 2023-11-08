function isOver60(arrayValue) {
    if (isOver60 > 60) {
        return true;
    } else {
        return false
    }
}
let numbers = [7, 9, 65, 60, 12, 13, 64, 62];
let firstValOver60 = numbers.findIndex(isOver60)

if (firstValOver60 != undefined) {
    console.log(firstValOver60)

}
else {
    console.log("the function not found")
}
// This FINDINDEX() IS USED TO RETURN THE INDEX OF THE ELEMENT FOUND

