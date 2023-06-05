readLine = require('readline-sync')
username = readLine.question("Enter your name ")
var score = 0;
console.log("Welcome  "+username)
function quizknow(questionsasked, user) {
  unserinput = readLine.question(questionsasked)
  if (unserinput === user) {
    score++;
    console.log("Right answer")
  }
  else {
    console.log("Wrong answer")
  }
  console.log()
}

var objectsnow1 = { question: "Do you know what is my name ? ", ans: "Shaik Afzal" }
var objectsnow2 = { question: "Do you where i live (city) ? ", ans: "Vijayawada" }
var objectsnow3 = { question: "Do you know what is my dream job ? ", ans: "Microsoft" }
var objectsnow4 = { question: "Do you know what is my age? ", ans: "24" }
var objectsnow5 = { question: "Do you know what is my height(feet) ? ", ans: "5.6f" }

var arraylistmaking = [objectsnow1, objectsnow2, objectsnow3, objectsnow4, objectsnow5]


for (var i = 0; i < arraylistmaking.length; i++) {
  quizknow(arraylistmaking[i].question, arraylistmaking[i].ans)
}
console.log("Your final score is  " + score)