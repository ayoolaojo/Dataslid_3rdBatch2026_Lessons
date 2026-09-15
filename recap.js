//  <!-- Variables -->

//     <!-- variable declaration - using let or const  -->

//     <!-- strings must be inside quote or object literal `` -->

let a = 12;
a = "Ayoola";

console.log(a);

const myName = "Dataslid";
const greet = `Hello ${myName}`;

console.log(greet);

let $9_ra = "joaoao";

let count = 0;
count--;

console.log(count);

console.log(2 !== "2");
console.log(2 != "2");

const allStudents = [
  {
    studentId: 1,
    age: 18,
    firstName: "Adams",
    lastName: "Owoade",
    department: "Software Engineering",
  },

  {
    studentId: 2,
    age: 25,
    firstName: "Paul",
    lastName: "Owonikoko",
    department: "Computer Science",
  },
];


allStudents.map((student)=>(
    console.log(student.firstName)
))


// if else Statements

let x = 5


if(x=='5'){
   console.log('Adams')
}


let price = 6000000;
let discount;
let amountPayable;

if(price >= 5000000){
  discount = price * 0.1
  amountPayable = price - discount
  console.log(amountPayable)

} else if ( price >=300000 && price < 5000) {
   discount = price * 0.05
    amountPayable = price - discount
  console.log(amountPayable)

} else {
  amountPayable = price
   console.log(amountPayable)
}


    // Voter's Eligibility

    let age = 20
    const hasPvC = true

    if(age >= 18 && hasPvC) {
      console.log(`Congratulations , You're ${age} years old. You're eligible to vote`)
    } else {
      console.log(`Sorry minors not allowed!  You're ${age} years old. You're NOT eligible to vote`)
    }


    age >=18 && hasPvC ? console.log(`Congratulations , You're ${age} years old. You're eligible to vote`) : console.log(`Sorry minors not allowed!  You're ${age} years old. You're NOT eligible to vote`)


    const score = 89;

    score >= 75 ? console.log(`You've won yourself a scholarship`) : score >= 50 && score < 75 ? console.log(`Passed with ${score} points btu not eligible for scholarship`): console.log('Sorry, try again next time')











       









