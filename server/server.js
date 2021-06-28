const express = require( 'express' );
const app = express();
// const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve back static files
app.use(express.static('server/public'));

// app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];




app.get('/jokes', (req, res) => {
  res.send(jokes);
});


// app.post('/jokes', (req, res) => {
//   console.log('POST /jokes', req.body);

//   //gather information from inputs here
//   const whoseJoke = req.body.whoseJoke;
//   const jokeQuestion = req.body.jokeQuestion;
//   const punchLine = req.body.punchLine;


//   let result;
//   if (operator === '/') {
//       result = firstNumber / secondNumber;
//   }
//   else if (operator === '*') {
//       result = firstNumber * secondNumber;
//   }
//   else if (operator === '+') {
//       result = firstNumber + secondNumber;
//   }
//   else {
//       res.sendStatus(400).send('Try again');
//       return;
//   }
//   console.log('added joke');

// get endpoint needs to use the post
// you are pushing this object into the array to display on history

//   jokes.push({
//     whoseJoke: whoseJoke.val(),
//     jokeQuestion: jokeQuestion.val(),
//     punchLine: punchLine.val()
// });
//   res.sendStatus(201);

// });

app.post('/jokes',(req,res) => {
  console.log('In post for addition', req.body);

  // add it to our item array
  jokes.push({
    whoseJoke: req.body.whoseJoke,
    jokeQuestion: req.body.jokeQuestion,
    punchLine: req.body.punchLine,
});
  
  console.log('all of the jokes', jokes);

  //always respond
  res.sendStatus(201); // this is good
  // res.sendStatus(500); // this is bad!
});
    

     // 
  //   whoseJoke: $('#whoseJoke').val(),
  //   jokeQuestion: $('#question').val(),
  //   punchLine: $('#punchLine').val(),