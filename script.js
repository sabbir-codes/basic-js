// loop

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// for(let i=1; i<=5; i++){
//     console.log(i);
    
// }

// FUNCTION
// function greet(){
// console.log("Good Morning");
// }

// greet();


// function add(a, b){
//     return(a + b)
// }

//  let result= add(5, 7);
//  console.log(result);

// //  another way

//  let a = 5;
//  let b = 7;
// function add(a, b){
//      console.log(a + b);
// }

// add(a, b);
 
// ARRAY
// let students=["Sabbir", "Sabuj", "Arman", "Raju"];
// console.log(students[3]);
// students.push("Hasan")
// console.log(students);
// students.pop()
// console.log(students);
// console.log(students.length);

// for(let i=0; i<students.length; i++){
//     console.log(students[i]);  
// }

// let student = {
//     name: "Sabbir",
//     age: 22,
//     city: "Dhaka"
// };
 
// console.log(student.name);
// console.log(student["city"]);
// console.log(student["age"]);
// student.push(city : "Chattogram");

// ALL IN ONE 
const students = [
  {
    name: "Sabbir",
    marks: 85
  },
  {
    name: "Rahim",
    marks: 72
  }
];

for (let i = 0; i < students.length; i++) {
  if (students[i].marks >= 80) {
    console.log(students[i].name + " passed with an A grade.");
  } else {
    console.log(students[i].name + " needs improvement.");
  }
}

// const → to store the array.
// Array → to hold multiple students.
// Objects → to store each student's details.
// Loop → to process every student.
// Condition → to decide the message.
// Operators → >= for comparison.
// Variables → i for the loop index.