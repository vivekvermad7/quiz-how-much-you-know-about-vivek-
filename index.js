var chalk = require('chalk');
var score = 0;
var readlinesync = require('readline-sync');
var userName = readlinesync.question("Hey, what is your name\n");
console.log(chalk.blue ("hello " + userName + " how much you know about Vivek"))
console.log("Start")
var qstndata = [
  {
    question: "who is my fav cricketer?\n",
    answer: "MS Dhoni"
  },
  {
    question: "who is my fav hero?\n",
    answer: "Hrithik Roushan"
  },
  {
    question: "who is my fav superhero\n",
    answer: "Thor"
  },
  {
    question: "what is my fav sports\n",
    answer: "Cricket"
  },
  {
    question: "Which type of movie i like the most\n",
    answer: "Love story"
  }
]
for (var i =0; i<qstndata.length; i++){
  var questionAsked = qstndata[i];
  quiz(questionAsked.question,questionAsked.answer);
  if (i == qstndata.length-1){
    console.log('your final score is:', score);
  }

}
function quiz(questionGiven,answerGiven){
  var userAnswer = readlinesync.question(questionGiven + "");
  if (userAnswer.toUpperCase() == answerGiven.toUpperCase()) {
    score = score + 1;
    console.log('you are right.')
    console.log('Your score;', score);
  } else {
    console.log('you are wrong,correct answer is:',answerGiven);
    console.log('your score:',score);
  }

}
var scoreboard = [
  {
  name: "vivek verma",
  score: 10
  },
  {
  name: "harshit",
  score: 9
  },
  {
  name: "roushan",
  score: 9
  },
  {
  name: "pranjal",
  score: 9
  },
  {
  name: "chiraj",
  score: 8
  },
  {
  name: "sooraj",
  score: 7
  }
];

for (var j = 0; j < scoreboard.length; j++){
  var currentName = scoreboard[j];
  console.log(currentName.name);
  console.log(currentName.score);
}


