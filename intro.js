// document.body.style.backgroundColor = 'red'
// document.body.style.padding = '2rem'

const myName = "Ayoola";

const myAge = 20;
console.log(myName);

console.log(myAge);

const college = "Dataslid";

const firstNum = 10;
const secNum = 15;

const total = firstNum + secNum;

console.log(total);
console.log(firstNum * secNum);
console.log(firstNum - secNum);
console.log(firstNum / secNum);
console.log(firstNum ** secNum);

const combined = myName + " " + college;

console.log(combined);

console.log(16 + "12");
console.log(16 + 12);

let firstName = "Dada";
firstName = "Clinton";

console.log(firstName);
console.log("Firstname");

// Javascript Datatypes

// Strings - ''
// Number - numbers
// boolean = true/false
// BigInt =  10000014tn
//
// null
// undefined
// symbols
// Object -

console.log(typeof firstName);

const isStudent = true;
console.log(typeof isStudent);

const serialNumber = 10000014n;

console.log(typeof serialNumber);

const scores = null;

console.log(typeof scores);

let fruit;

console.log(typeof fruit);

const person = {
  name: "Mubarak",
  age: 40,
  isSingle: true,
  religion: "Islam",
  gender: "male",
};

// dot Notation.
// bracket Notation

console.log(person.religion);
console.log(person.religion);
console.log(person.religion);

const bio = ` His name is ${person.name}, 
              he's ${person.age} years old. 
              ${person.gender}. 
              He pratcises ${person.religion}
              `;

const summary = ` i have a friend whose name is ${person["name"]} `;

console.log(bio);

const user = {
  name: "Ayoola",
  age: 25,
  address: {
    city: "Lagos",
    country: "Nigeria",
  },

  hobbies: {
    sport: "Football",
    food: "Pizza",
  }
};


console.log(user.address.city)
console.log(user.address.country)
console.log(user.hobbies)

// Javascript arrays

const schools = ['UniOsun', 'OAU', 'Adeleke University', 'Kwasu', 'Lautech', 50 , false, {
  name: 'Ayoola',
  id: 4001,
}, 'ABC' ]

 console.log(schools)

 console.log(schools.length)

 const nat =  'justeryu'
 console.log(nat.length)

 const firstSchool =  schools[0]


 console.log(firstSchool)

 console.log(schools[6])



 const AllStudents =[
   {
    studentName:'Fawaz',
     matricNumber:1111,
     department: 'Computer Science',
     gender: 'male'
    } ,


    {
    studentName:'David',
     matricNumber:1112,
     department: 'Computer Technology',
     gender: 'female'
    } ,
  
  ] 


  console.log(AllStudents[0].department)


  // javascript operators
  // Arithmetic operator  - +  *  **  /  %   ++   -- 

  console.log(5%3)

  let score =  15
  score--




 console.log(score)


    //  ==    ===
    // ! - not
    // &&  -  and
        // || -     or

    // +=

    //  > <   <=  >=
     

    console.log(2 != '2')
    console.log(10 === 10)


    let pet =  'dog'

      pet += ' is a pet'

      console.log(pet)

      let grade =  15

      grade /=  30

      console.log(grade)



      const age  =  18
      const hasPVC   =   false


      if(age > 17){
        console.log('Youre an adult')
      }else{
        console.log('Sorry, minors not aloowed here')
      }



      if(age>17 || hasPVC){
             console.log(`You're eligible to vote`)
      } else{
         console.log(`NOT ELIGIBLE to vote`)
      }


//             "Positive" if the number is greater than 0
// "Negative" if less than 0
// "Zero" if equal to 0


     const number =  99

     if(number > 0 ) {
      console.log('number is POSITIVE')
     } else if (number < 0) {
        console.log('Number is NEGATIVE')
     } else{
        console.log('number is ZERO')
     }



    //  Even or odd

         if(number % 2 === 0){
           console.log(`${number} is an EVEN number`)
         } else {
            console.log(`${number} is an ODD number`)
         }


//          "You can vote" if age is 18 or older.
// "You cannot vote" otherwise.
  

        // //  GRADING SYSTEM
        // A1 (Excellent): 75% to 100%
// B2 (Very Good): 70% to 74%
// B3 (Good): 65% to 69%
// C4 to C6 (Credit): 50% to 64%
// D7 and E8 (Pass): 40% to 49%
// F9 (Fail): 0% to 39% 



        let scoreInput =   prompt('Enter your score')
        scoreInput =  Number(scoreInput)

        if (scoreInput >= 75 ) {
             alert(`Excellent! You scored ${scoreInput} Your grade is A1`)
        } else if (scoreInput >= 70 && scoreInput < 75){
            alert(`Very Good! You scored ${scoreInput} out of 100. Your grade is B2`)
        }  else if (scoreInput >= 65 && scoreInput < 70 ){
            alert(`Good! You scored ${scoreInput} out of 100. Your grade is B3`)
        } else if (scoreInput >= 50 && scoreInput < 65 ){
            alert(` You scored ${scoreInput} out of 100. Your grade is C`)
        } else if (scoreInput >= 40 && scoreInput < 50 ){
            alert(` You scored ${scoreInput} out of 100. Your grade is D`)
        }else{
            alert(` You scored ${scoreInput} out of 100. Your grade is F. Work harder next time`)
        }


        // Tenary operator   

           const num =  11
          //  if( num%2===0) {
          //      console.log(`${num} is EVEN`)
          //  } else {
          //   console.log(`${num} is ODD`)
          //  }


           num % 2 === 0 ? console.log(`${num} is EVEN`) : console.log(`${num} is ODD`)

           let password = "javascript123";

// If the password length is 8 or more:

// Strong Password

// Otherwise:

// Weak Password   

const psw = 'gshi152'

psw.length >= 8? console.log('Strong Password'): console.log('Weak Password')





      











        

    






   

 

