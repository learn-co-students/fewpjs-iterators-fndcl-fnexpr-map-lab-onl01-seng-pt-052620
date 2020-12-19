const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map(line => {
    let tokens = line.split(" ")
    let capitalizedTokens = tokens.map(token => token.charAt(0).toUpperCase() + token.slice(1))
    let response = capitalizedTokens.join(" ")
    return response
  })
}



// let students = ["harry", "ron", "hermione", "ginevra"]; 
// let rollCall = []; 

// for (const student of students){
//   rollCall.push(student + " the wizard"); 
// }
// /* 
// for...of
// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
// */



// function studentRollCall(student){
//   return student + " the wizard"
// }

// let students = ["harry", "ron", "hermione", "ginevra"]; 
// let rollCall = students.map(studentRollCall); 


// let students = ["harry", "ron", "hermione", "ginevra"];
// let rollCall = students.map(function(student){
//   return student + " the wizard"
// })


// let students = ["harry", "ron", "hermione", "ginevra"];
// let rollCall = students.map(student => student + " the wizard") 

// const robots = [
//   {
//     name: "Johnny 5", 
//     modes: 5, 
//     isActivated: false,
//   }, 

//   {
//     name: "C3PO",
//     modes: 3, 
//     isActivated: false,
//   }, 

//   {
//     name: "Sonny", 
//     modes: 2.5, 
//     isActivated: false, 
//   }, 

//   {
//     name: "Baymax",
//     modes: 1.5, 
//     isActivated: false,
//   }, 
// ]; 

// const activatedRobots = robots.map(function (robot){
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2, 
//     isActivated: true,
//   });
// }); 
// console.log(activatedRobots)











