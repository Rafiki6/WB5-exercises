// THE MAP() FUNCTION IS USED TO TRANSFORM ELEMENTS FROM ONE ARRAY INTO ELEMENTS IN A NEW ARRAY.
let kids = [
    { first : "Natalie", last : "Plyers" },
     { first: "Brittany", last: "Ray" },
     { first: "Zachary", last: "Westly" }
    ];
    function buildFullName(arrayElement) {
     return arrayElement.first + " " + arrayElement.last;
    }
    let namesList = kids.map(buildFullName);
    let numElements = namesList.length;
    for (let i = 0; i < numElements; i++) {
     console.log(namesList[i]);
     // output matches image above
    }

    //SHORT VERSION

    // kids.map(p =>p ).fforEach(f => console.log(f.first +" "+ f.last));

    let kids1 = [
        { first : "Natalie", last : "Plyers" },
         { first: "Brittany", last: "Ray" },
         { first: "Zachary", last: "Westly" }
        ];
        function buildFullName(arrayElement) {
         return arrayElement.first + " " + arrayElement.last;
        }
        function displayName(arrayElement) {
         console.log(arrayElement);
        }
        let namesList1 = kids1.map(buildFullName);
        namesList1.forEach(displayName);