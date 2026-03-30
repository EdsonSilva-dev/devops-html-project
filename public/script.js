const quizData = {
  Mathematics: {
    description: "Sharpen your logical and numerical thinking.",
    difficulties: {
      easy: [
        { text: "What is 5 + 3?", answers: ["6", "7", "8", "9"], correct: 2 },
        { text: "What is 10 - 4?", answers: ["6", "5", "7", "4"], correct: 0 },
        { text: "What is 2 × 6?", answers: ["10", "12", "14", "16"], correct: 1 },
        { text: "What is 15 ÷ 3?", answers: ["3", "5", "6", "4"], correct: 1 },
        { text: "What is the square root of 49?", answers: ["6", "7", "8", "9"], correct: 1 }
      ],
      medium: [
        { text: "What is 12 × 8?", answers: ["96", "88", "108", "92"], correct: 0 },
        { text: "What is 144 ÷ 12?", answers: ["11", "12", "13", "14"], correct: 1 },
        { text: "What is 25% of 200?", answers: ["25", "40", "50", "60"], correct: 2 },
        { text: "What is 17 + 29?", answers: ["44", "45", "46", "47"], correct: 2 },
        { text: "What is 9²?", answers: ["72", "81", "99", "91"], correct: 1 }
      ],
      hard: [
        { text: "What is the derivative of x²?", answers: ["x", "2x", "x²", "2"], correct: 1 },
        { text: "What is the value of π rounded to 2 decimals?", answers: ["3.12", "3.13", "3.14", "3.15"], correct: 2 },
        { text: "What is 2³ × 2²?", answers: ["16", "32", "8", "64"], correct: 1 },
        { text: "What is the square root of 169?", answers: ["11", "12", "13", "14"], correct: 2 },
        { text: "Solve: 3x = 21", answers: ["5", "6", "7", "8"], correct: 2 }
      ]
    }
  },
  History: {
    description: "Travel through time and major world events.",
    difficulties: {
      easy: [
        { text: "Who was the first U.S. President?", answers: ["Lincoln", "Washington", "Jefferson", "Adams"], correct: 1 },
        { text: "World War II ended in?", answers: ["1944", "1945", "1946", "1943"], correct: 1 },
        { text: "The Roman Colosseum is in?", answers: ["Athens", "Rome", "Paris", "Berlin"], correct: 1 },
        { text: "The pyramids are in?", answers: ["India", "Mexico", "Egypt", "Peru"], correct: 2 },
        { text: "Who discovered America in 1492?", answers: ["Columbus", "Magellan", "Da Gama", "Cook"], correct: 0 }
      ],
      medium: [
        { text: "The Renaissance began in which country?", answers: ["France", "Italy", "Spain", "Germany"], correct: 1 },
        { text: "The Berlin Wall fell in?", answers: ["1987", "1988", "1989", "1990"], correct: 2 },
        { text: "Joan of Arc was from?", answers: ["France", "Spain", "England", "Italy"], correct: 0 },
        { text: "The Battle of Hastings happened in?", answers: ["1066", "1070", "1054", "1088"], correct: 0 },
        { text: "Who led the nonviolent movement in India?", answers: ["Nehru", "Gandhi", "Mandela", "Churchill"], correct: 1 }
      ],
      hard: [
        { text: "The Meiji Restoration began in?", answers: ["1868", "1853", "1871", "1889"], correct: 0 },
        { text: "Who wrote the Communist Manifesto with Engels?", answers: ["Lenin", "Stalin", "Karl Marx", "Trotsky"], correct: 2 },
        { text: "The Hundred Years' War was mainly between England and?", answers: ["Spain", "France", "Germany", "Italy"], correct: 1 },
        { text: "Which empire built Machu Picchu?", answers: ["Aztec", "Roman", "Inca", "Mayan"], correct: 2 },
        { text: "Who was the British Prime Minister during most of WWII?", answers: ["Churchill", "Thatcher", "Attlee", "Chamberlain"], correct: 0 }
      ]
    }
  },
  Geography: {
    description: "Explore the world, borders, capitals, and landmarks.",
    difficulties: {
      easy: [
        { text: "What is the capital of Canada?", answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correct: 1 },
        { text: "Which is the largest ocean?", answers: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 2 },
        { text: "Mount Everest is in which range?", answers: ["Alps", "Andes", "Rockies", "Himalayas"], correct: 3 },
        { text: "Brazil is in which continent?", answers: ["Europe", "Asia", "South America", "Africa"], correct: 2 },
        { text: "What is the capital of Japan?", answers: ["Tokyo", "Kyoto", "Osaka", "Beijing"], correct: 0 }
      ],
      medium: [
        { text: "The Atacama Desert is mainly in?", answers: ["Peru", "Chile", "Bolivia", "Argentina"], correct: 1 },
        { text: "What is the capital of Australia?", answers: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
        { text: "Which river runs through Egypt?", answers: ["Amazon", "Danube", "Yangtze", "Nile"], correct: 3 },
        { text: "Russia is in Europe and?", answers: ["Africa", "Asia", "Oceania", "North America"], correct: 1 },
        { text: "Which country has Barcelona?", answers: ["Portugal", "Italy", "Spain", "France"], correct: 2 }
      ],
      hard: [
        { text: "Which strait separates Europe and Africa?", answers: ["Hormuz", "Bering", "Gibraltar", "Bosporus"], correct: 2 },
        { text: "What is the world's largest country by area?", answers: ["Canada", "China", "USA", "Russia"], correct: 3 },
        { text: "Which African country has Nairobi as capital?", answers: ["Kenya", "Nigeria", "Ethiopia", "Ghana"], correct: 0 },
        { text: "Which mountain is the highest in South America?", answers: ["Aconcagua", "Kilimanjaro", "Denali", "Elbrus"], correct: 0 },
        { text: "Which country is both in Europe and Asia and has Istanbul?", answers: ["Greece", "Turkey", "Romania", "Georgia"], correct: 1 }
      ]
    }
  },
  "General Knowledge": {
    description: "A mix of science, culture, and everyday facts.",
    difficulties: {
      easy: [
        { text: "What is the chemical symbol for gold?", answers: ["Ag", "Au", "Go", "Gd"], correct: 1 },
        { text: "How many sides does a hexagon have?", answers: ["5", "6", "7", "8"], correct: 1 },
        { text: "Which planet is closest to the Sun?", answers: ["Venus", "Earth", "Mercury", "Mars"], correct: 2 },
        { text: "Which gas do humans need to breathe?", answers: ["Nitrogen", "Oxygen", "Hydrogen", "CO2"], correct: 1 },
        { text: "How many days are in a leap year?", answers: ["365", "364", "366", "367"], correct: 2 }
      ],
      medium: [
        { text: "What is the SI unit of electric current?", answers: ["Volt", "Ampere", "Ohm", "Watt"], correct: 1 },
        { text: "What do bees produce?", answers: ["Milk", "Honey", "Oil", "Salt"], correct: 1 },
        { text: "Which animal is called the king of the jungle?", answers: ["Tiger", "Lion", "Elephant", "Bear"], correct: 1 },
        { text: "Which device is used to make phone calls?", answers: ["Printer", "Lamp", "Telephone", "Toaster"], correct: 2 },
        { text: "Which season comes after spring?", answers: ["Winter", "Summer", "Autumn", "Rainy"], correct: 1 }
      ],
      hard: [
        { text: "Which organ pumps blood through the body?", answers: ["Liver", "Lung", "Heart", "Kidney"], correct: 2 },
        { text: "What is H2O commonly known as?", answers: ["Salt", "Oxygen", "Hydrogen", "Water"], correct: 3 },
        { text: "Which planet is known as the Red Planet?", answers: ["Mars", "Jupiter", "Saturn", "Venus"], correct: 0 },
        { text: "What is the boiling point of water at sea level?", answers: ["90°C", "100°C", "110°C", "120°C"], correct: 1 },
        { text: "Which language is primarily spoken in Brazil?", answers: ["Spanish", "English", "Portuguese", "French"], correct: 2 }
      ]
    }
  }
};

const state = {
  currentUser: null,
  selectedCategory: null,
  selectedDifficulty: null,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  answered: false
};

const views = {
  home: document.getElementById("home-view"),
  login: document.getElementById("login-view"),
  difficulty: document.getElementById("difficulty-view"),
  quiz: document.getElementById("quiz-view"),
  result: document.getElementById("result-view"),
  leaderboard: document.getElementById("leaderboard-view")
};

const categoryGrid = document.getElementById("category-grid");
const difficultyGrid = document.getElementById("difficulty-grid");
const difficultyTitle = document.getElementById("difficulty-title");
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const quizMeta = document.getElementById("quiz-meta");
const nextBtn = document.getElementById("next-btn");
const resultText = document.getElementById("result-text");
const leaderboardList = document.getElementById("leaderboard-list");
const loginMessage = document.getElementById("login-message");
const usernameInput = document.getElementById("username-input");

function showView(viewName) {
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[viewName].classList.add("active");
}

function renderCategories() {
  categoryGrid.innerHTML = "";

  Object.keys(quizData).forEach((category) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${category}</h3>
      <p>${quizData[category].description}</p>
      <button class="btn btn-primary">Choose</button>
    `;
    card.querySelector("button").addEventListener("click", () => openDifficulty(category));
    categoryGrid.appendChild(card);
  });
}

function openDifficulty(category) {
  state.selectedCategory = category;
  difficultyTitle.textContent = `Choose Difficulty - ${category}`;
  difficultyGrid.innerHTML = "";

  ["easy", "medium", "hard"].forEach((difficulty) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${difficulty.toUpperCase()}</h3>
      <p>${quizData[category].difficulties[difficulty].length} questions</p>
      <button class="btn btn-primary">Start Quiz</button>
    `;
    card.querySelector("button").addEventListener("click", () => startQuiz(category, difficulty));
    difficultyGrid.appendChild(card);
  });

  showView("difficulty");
}

function startQuiz(category, difficulty) {
  state.selectedCategory = category;
  state.selectedDifficulty = difficulty;
  state.questions = quizData[category].difficulties[difficulty];
  state.currentQuestionIndex = 0;
  state.score = 0;
  state.answered = false;

  renderQuestion();
  showView("quiz");
}

function renderQuestion() {
  const question = state.questions[state.currentQuestionIndex];
  quizMeta.textContent = `${state.selectedCategory} | ${state.selectedDifficulty.toUpperCase()} | Question ${state.currentQuestionIndex + 1} of ${state.questions.length}`;
  questionText.textContent = question.text;
  answersDiv.innerHTML = "";
  nextBtn.classList.add("hidden");
  state.answered = false;

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.addEventListener("click", () => selectAnswer(index, button));
    answersDiv.appendChild(button);
  });
}

function selectAnswer(index, clickedButton) {
  if (state.answered) return;

  state.answered = true;
  const question = state.questions[state.currentQuestionIndex];
  const buttons = document.querySelectorAll(".answer-btn");

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;

    if (buttonIndex === question.correct) {
      button.classList.add("correct");
    }
  });

  if (index === question.correct) {
    state.score++;
  } else {
    clickedButton.classList.add("wrong");
  }

  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  state.currentQuestionIndex++;

  if (state.currentQuestionIndex < state.questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  resultText.textContent = `${state.currentUser || "Guest"}, you scored ${state.score} out of ${state.questions.length} in ${state.selectedCategory} (${state.selectedDifficulty}).`;
  showView("result");
}

async function login() {
  const username = usernameInput.value.trim();

  if (!username) {
    loginMessage.textContent = "Please enter your name.";
    return;
  }

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    });

    const data = await response.json();

    if (!response.ok) {
      loginMessage.textContent = data.message || "Login failed.";
      return;
    }

    state.currentUser = data.user.username;
    localStorage.setItem("currentUser", state.currentUser);
    loginMessage.textContent = `Welcome, ${state.currentUser}!`;
    showView("home");
  } catch (error) {
    loginMessage.textContent = "Could not connect to the server.";
  }
}

async function saveScore() {
  if (!state.currentUser) {
    alert("Please sign in first.");
    showView("login");
    return;
  }

  try {
    const response = await fetch(`/api/scores/${encodeURIComponent(state.currentUser)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: state.selectedCategory,
        difficulty: state.selectedDifficulty,
        score: state.score,
        total: state.questions.length
      })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Could not save score.");
      return;
    }

    alert("Score saved successfully.");
    loadLeaderboard();
  } catch (error) {
    alert("Server error while saving score.");
  }
}

async function loadLeaderboard() {
  try {
    const response = await fetch("/api/leaderboard");
    const leaderboard = await response.json();

    leaderboardList.innerHTML = "";

    if (!leaderboard.length) {
      leaderboardList.innerHTML = "<div class='score-row'>No scores saved yet.</div>";
      return;
    }

    leaderboard.forEach((entry, index) => {
      const row = document.createElement("div");
      row.className = "score-row";
      row.innerHTML = `
        <strong>#${index + 1} ${entry.username}</strong><br>
        ${entry.category} | ${entry.difficulty} | ${entry.score}/${entry.total} (${entry.percentage}%)
      `;
      leaderboardList.appendChild(row);
    });
  } catch (error) {
    leaderboardList.innerHTML = "<div class='score-row'>Could not load leaderboard.</div>";
  }
}

document.getElementById("start-btn").addEventListener("click", () => showView("home"));
document.getElementById("leaderboard-btn").addEventListener("click", () => {
  loadLeaderboard();
  showView("leaderboard");
});
document.getElementById("nav-home").addEventListener("click", () => showView("home"));
document.getElementById("nav-login").addEventListener("click", () => showView("login"));
document.getElementById("nav-leaderboard").addEventListener("click", () => {
  loadLeaderboard();
  showView("leaderboard");
});
document.getElementById("login-btn").addEventListener("click", login);
document.getElementById("back-home-btn").addEventListener("click", () => showView("home"));
document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("save-score-btn").addEventListener("click", saveScore);
document.getElementById("play-again-btn").addEventListener("click", () => showView("home"));

renderCategories();
loadLeaderboard();

const savedUser = localStorage.getItem("currentUser");
if (savedUser) {
  state.currentUser = savedUser;
}