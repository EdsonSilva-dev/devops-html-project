const quizData = {
  Mathematics: {
    easy: [
      {
        text: "What is 15 + 27?",
        answers: ["42", "41", "43", "44"],
        correct: 0
      },
      {
        text: "What is 9 × 6?",
        answers: ["54", "56", "52", "58"],
        correct: 0
      },
      {
        text: "What is the square root of 64?",
        answers: ["8", "6", "7", "9"],
        correct: 0
      },
      {
        text: "What is 100 divided by 4?",
        answers: ["25", "20", "30", "24"],
        correct: 0
      },
      {
        text: "What is 12²?",
        answers: ["144", "124", "132", "154"],
        correct: 0
      },
      {
        text: "What is 7 + 8?",
        answers: ["14", "15", "16", "13"],
        correct: 1
      },
      {
        text: "What is 5 × 5?",
        answers: ["20", "30", "25", "15"],
        correct: 2
      },
      {
        text: "What is 81 ÷ 9?",
        answers: ["8", "7", "10", "9"],
        correct: 3
      },
      {
        text: "What is 14 - 6?",
        answers: ["8", "9", "7", "6"],
        correct: 0
      },
      {
        text: "What is 3 × 4?",
        answers: ["7", "10", "12", "14"],
        correct: 2
      }
    ]
  },

  History: {
    easy: [
      {
        text: "Who was the first President of the United States?",
        answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        correct: 0
      },
      {
        text: "In what year did World War II end?",
        answers: ["1945", "1944", "1946", "1943"],
        correct: 0
      },
      {
        text: "Where is the Roman Colosseum located?",
        answers: ["Rome", "Athens", "Paris", "Berlin"],
        correct: 0
      },
      {
        text: "In what year was the Battle of Hastings?",
        answers: ["1066", "1054", "1072", "1088"],
        correct: 0
      },
      {
        text: "In what year did the Meiji Restoration begin?",
        answers: ["1868", "1853", "1871", "1889"],
        correct: 0
      },
      {
        text: "Which civilization built the pyramids of Giza?",
        answers: ["Romans", "Greeks", "Egyptians", "Mayans"],
        correct: 2
      },
      {
        text: "Who discovered America in 1492?",
        answers: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"],
        correct: 0
      },
      {
        text: "The Renaissance began in which country?",
        answers: ["France", "Italy", "Spain", "Germany"],
        correct: 1
      },
      {
        text: "Which wall fell in 1989?",
        answers: ["Great Wall", "Berlin Wall", "Hadrian's Wall", "Wall of Troy"],
        correct: 1
      },
      {
        text: "Who was known as the Maid of Orléans?",
        answers: ["Cleopatra", "Marie Curie", "Joan of Arc", "Queen Victoria"],
        correct: 2
      }
    ]
  },

  Geography: {
    easy: [
      {
        text: "What is the capital of Canada?",
        answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        correct: 0
      },
      {
        text: "What is the largest ocean on Earth?",
        answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
        correct: 0
      },
      {
        text: "Mount Everest belongs to which mountain range?",
        answers: ["Himalayas", "Alps", "Andes", "Rockies"],
        correct: 0
      },
      {
        text: "The Atacama Desert is mainly located in which country?",
        answers: ["Chile", "Peru", "Bolivia", "Argentina"],
        correct: 0
      },
      {
        text: "What strait separates Europe and Africa?",
        answers: ["Gibraltar", "Bosporus", "Bering", "Hormuz"],
        correct: 0
      },
      {
        text: "What is the capital of Japan?",
        answers: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
        correct: 1
      },
      {
        text: "Which continent is Brazil in?",
        answers: ["North America", "Europe", "South America", "Africa"],
        correct: 2
      },
      {
        text: "Which country has the Nile River?",
        answers: ["Egypt", "Mexico", "India", "Canada"],
        correct: 0
      },
      {
        text: "Which is the largest country in the world by area?",
        answers: ["China", "USA", "Russia", "Canada"],
        correct: 2
      },
      {
        text: "What is the capital of Australia?",
        answers: ["Sydney", "Melbourne", "Perth", "Canberra"],
        correct: 3
      }
    ]
  },

  "General Knowledge": {
    easy: [
      {
        text: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Gd", "Go"],
        correct: 0
      },
      {
        text: "How many sides does a hexagon have?",
        answers: ["6", "5", "7", "8"],
        correct: 0
      },
      {
        text: "Which planet is closest to the Sun?",
        answers: ["Mercury", "Venus", "Earth", "Mars"],
        correct: 0
      },
      {
        text: "Which gas is essential for human respiration?",
        answers: ["Oxygen", "Nitrogen", "CO2", "Hydrogen"],
        correct: 0
      },
      {
        text: "What is the SI unit of electric current?",
        answers: ["Ampere", "Volt", "Ohm", "Watt"],
        correct: 0
      },
      {
        text: "How many days are there in a leap year?",
        answers: ["364", "365", "366", "367"],
        correct: 2
      },
      {
        text: "What do bees produce?",
        answers: ["Milk", "Honey", "Wax only", "Sugar"],
        correct: 1
      },
      {
        text: "Which animal is known as the king of the jungle?",
        answers: ["Tiger", "Elephant", "Lion", "Leopard"],
        correct: 2
      },
      {
        text: "Which device is used to call someone?",
        answers: ["Microwave", "Telephone", "Printer", "Lamp"],
        correct: 1
      },
      {
        text: "Which season comes after spring?",
        answers: ["Winter", "Autumn", "Summer", "Monsoon"],
        correct: 2
      }
    ]
  }
};

let selectedCategory = "";
let selectedDifficulty = "easy";
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const categoryButtons = document.getElementById("category-buttons");
const categoryLabel = document.getElementById("category-label");
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreText = document.getElementById("score-text");

function loadCategories() {
  categoryButtons.innerHTML = "";

  Object.keys(quizData).forEach(category => {
    const button = document.createElement("button");
    button.textContent = category;
    button.addEventListener("click", () => startQuiz(category, "easy"));
    categoryButtons.appendChild(button);
  });
}

function startQuiz(category, difficulty) {
  selectedCategory = category;
  selectedDifficulty = difficulty;
  currentQuestions = quizData[category][difficulty];
  currentQuestion = 0;
  score = 0;

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  answered = false;
  nextBtn.classList.add("hidden");
  answersDiv.innerHTML = "";

  const q = currentQuestions[currentQuestion];
  categoryLabel.textContent = `Category: ${selectedCategory} | Difficulty: ${selectedDifficulty}`;
  questionText.textContent = q.text;

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.className = "answer-btn";
    button.addEventListener("click", () => selectAnswer(index, button));
    answersDiv.appendChild(button);
  });
}

function selectAnswer(index, button) {
  if (answered) return;
  answered = true;

  const q = currentQuestions[currentQuestion];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add("correct");
    }
  });

  if (index === q.correct) {
    score++;
  } else {
    button.classList.add("wrong");
  }

  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < currentQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreText.textContent = `You scored ${score} out of ${currentQuestions.length} in ${selectedCategory}.`;
}

function goBackToCategories() {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", goBackToCategories);

loadCategories();