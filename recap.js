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



    for(i = 1;i <= 20; i++){
       console.log(i)
    }

    const fruits = ['apples', 'orange', 'pear', 'pawpaw']

      

    for(i = 0; i<fruits.length;i++) {
       console.log(fruits[i] + ' ' + 'Dataslid')
    }

    for( let fruit of fruits) {
      console.log(fruit)
    }


    fruits.map((fru)=>(
      console.log(fru + ' Ayoola')
    ))

     


//  const newFruit = 'banana'
const allFruits = [...fruits,'banana']

console.log(allFruits)


// PoP
// Push
// shift 
// Unshift 
// at 
// slice 
// splice 
// forEach 
// map 
// filter 
// reduce 
// every 
// some 
// sort 
// find 
// join    


const cars = ['benz', 'bmw','volvo','toyota', 'mazda', 'honda']

// const favCars= cars.slice(1)
// console.log(favCars)
// console.log(cars)
// cars.splice(2,2, 'pawpaw', 'banana')
// console.log(cars)


cars.map((a)=>(
  console.log(a)
))

const carWithO = cars.filter((car)=>(
  car.includes('o')
))

console.log(carWithO)


const newCar = cars.find((car)=>(
  car.includes('o')
))

console.log(newCar)

const scores = [10, 20, 70, 80, 90,2 ]
scores.push(18)

const totalAmount = scores.reduce((x,y)=>x + y, 0)
console.log(totalAmount)















       









