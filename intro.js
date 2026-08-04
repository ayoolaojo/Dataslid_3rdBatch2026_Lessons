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











        

    






   

 

