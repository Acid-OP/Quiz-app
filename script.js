const quizData = [
    {
      "question": "Which language runs in a web browser?",
      "a": "Java",
      "b": "C",
      "c": "Python",
      "d": "JavaScript",
      "correct": "d",
    },
    {
      "question": "What does CSS stand for?",
      "a": "Central Style Sheets",
      "b": "Cascading Style Sheets",
      "c": "Cascading Simple Sheets",
      "d": "Cars SUVs Sailboats",
      "correct": "b",
    },
    {
      "question": "What does HTML stand for?",
      "a": "Hypertext Markup Language",
      "b": "Hypertext Markdown Language",
      "c": "Hyperloop Machine Language",
      "d": "Helicopters Terminals Motorboats Lamborghinis",
      "correct": "a",
    },
    {
      "question": "What year was JavaScript launched?",
      "a": "1996",
      "b": "1995",
      "c": "1994",
      "d": "none of the above",
      "correct": "b",
    },
  ];

  let currentIndex = 0;
  let correctAnswer = 0;

  function renderQuestion() {
    const currentQuestion = quizData[currentIndex];
    document.getElementById("question").innerHTML = currentQuestion.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    for (let i = 0; i < 4; i++) {
      const optionKey = ["a", "b", "c", "d"][i];
      const option = currentQuestion[optionKey];
      const button = document.createElement("button");
      button.innerHTML = option;

      button.onclick = function () {
        checkAnswer(optionKey);
      };

      optionsDiv.appendChild(button);
    }
  }

  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentIndex];
    if (selectedOption === currentQuestion.correct) {
      correctAnswer++;
    }
    currentIndex++;
    if (currentIndex < quizData.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `<h1>Thanks for playing!</h1> <p>You got ${correctAnswer} out of ${quizData.length} correct!</p> `;

// Hide the quiz section and show the result section
document.getElementById("quiz").style.display = "none";
resultDiv.style.display = "block";
}
  // Initial render
  renderQuestion();