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

// const titleCased = tutorials.map(function (tutorial) {
//   // let sentence = tutorial.toLowerCase().split(" ");
//   let sentence = tutorial.split(" ");

  
//   for(let i = 0; i< sentence.length; i++){
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//     // debugger;
//  }
//  sentenceCap = sentence.join(" ")
//  return sentenceCap
// // return tutorials
// })

function titleCased() {
  const casedArray = []
  tutorials.map(function (tutorial) {
      debugger;
      let sentence = tutorial.split(" ");
      
      for(let i = 0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    let sentenceCap = sentence.join(" ")
    casedArray.push(sentenceCap)

    })
    return casedArray
}

