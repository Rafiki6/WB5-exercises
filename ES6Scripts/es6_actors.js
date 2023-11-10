let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["A Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
  
   ];
// Who is the Academy Member whose ID is 187?
let student = (v => v.memID == 187);
academyMembers.filter(student).forEach(f => console.log("Student Name: "+f.name));

// // Who has been in at least 3 films?
let student1 = v => v.films.length >= 3;
academyMembers.filter(student1).forEach(f => console.log("Member Name: " +f.name));


// // Who has a name that starts with "Bob"?
let student2 = v => v.films.toString().includes("A");
academyMembers.filter(student2).forEach(f => console.log("Member Nmae: "+f.films));
// // HARDER: Which Academy Members have been in a film
 let student3 = v => v.films.length > 0;
academyMembers.filter(student3).forEach(f => console.log("Member in the film: "+f.name));
// that starts with "A"
academyMembers.filter((v => v.films.filter(f => f.indexOf("A")==0).length > 0)).forEach(f => console.log(f.name+" Film Name: "+f.films));
// let student3 = (v => v.films.length > 0);
// academyMembers.filter(student3).forEach(f => console.log("Member Name: " + f.name));