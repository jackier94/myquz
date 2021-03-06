const question = document.getElementById("questions");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

//variables//

let thisQuestion = {};

let yourAnswer = false;

let score = 0;

let questionNumber = 0;

let allQuestions = [];

let questions = [
  {
    question:
      "Which of the following tags includes all the content in the web page?",
    answer1: "<body>",
    answer2: "<html>",
    answer3: "<head>",
    answer4: "<h1>",
    correctAnswer: 2,
  },
  {
    question: "What symbol do we use to refer to an Id?",
    answer1: ".",
    answer2: "$",
    answer3: "#",
    answer4: "*",
    correctAnswer: 3,
  },
  {
    question:
      "Which of the following resources gives us predefined css styles to use",
    answer1: "Bootstrap",
    answer2: "W3Schools",
    answer3: "GitHub",
    answer4: "Javascript",
    correctAnswer: 1,
  },
  {
    question:
      "Which of the following create a popup window when run in the browser?",
    answer1: "alert",
    answer2: "prompt",
    answer3: "confirm",
    answer4: "all of the above",
    correctAnswer: 4,
  },
  {
    question: "How do we write comments in Javascript",
    answer1: "//",
    answer2: "*/",
    answer3: "$$",
    answer4: "!!",
    correctAnswer: 1,
  },
];

// constant variables

const correctPoints = 1;
const finishQuestions = 5;

startQuiz = () => {
  questionNumber = 0;
  score = 0;
  allQuestions = [...questions];
  console.log(allQuestions);
  nextQuestion();
};

nextQuestion = () => {
  if (allQuestions.length === 0 || questionNumber >= finishQuestions) {
    localStorage.setItem("logThisScore", score);
    return window.location.assign("highscores.html");
  }

  questionNumber++;
  const questionsIndex = Math.floor(Math.random() * allQuestions.length);
  thisQuestion = allQuestions[questionsIndex];
  question.innerText = thisQuestion.question;

  choices.forEach((answer) => {
    const number = answer.dataset["number"];
    answer.innerText = thisQuestion["answer" + number];
  });

  allQuestions.splice(questionsIndex, 1);
  console.log(allQuestions);
  yourAnswer = true;
};

choices.forEach((answer) => {
  answer.addEventListener("click", (e) => {
    console.log(e.target);
    if (!yourAnswer) return;

    yourAnswer = false;
    const yourChoice = e.target;
    const otherAnswer = yourChoice.dataset["number"];
    // console.log(otherAnswer);

    console.log(otherAnswer == thisQuestion.correctAnswer);

    // correct or incorrect variables

    applyAnswerStatus = "incorrect";
    if (otherAnswer == thisQuestion.correctAnswer) {
      applyAnswerStatus = "correct";
      console.log(applyAnswerStatus);
    }

    nextQuestion();
  });
});

//Function to Display sccore???

//  choices.forEach(function (answer) {
//   console.log(answer);
//    answer.addEventListener("click", function(e)
//     console.log(e.target);
//    }

//  );

startQuiz();

// function to make score add up! :()

// function addPoints(num)
//     score += num;
//     scoreCounterText.innerText = score;

// let function startQuiz() {
//   questionNumber = 0;
//   score = 0;
//   allQuestions = [...questions];
//   console.log(allQuestions);
// }

//Timer Code

var startSeconds = 75;
timerEl = document.getElementById("timer");
setInterval(function () {
  startSeconds--;
  if (startSeconds >= 0) {
    timerEl.innerHTML = startSeconds;
  }
}, 1000);

// function countDown() {
//   let seconds = time 75;
//   time--;
//   timerEl.innerHTML = '${seconds}';
// }
