const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "users.json");
const PUBLIC_DIR = path.join(__dirname, "public");

app.use(cors());
app.use(express.json());
app.use(express.static(PUBLIC_DIR));

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ users: [] }, null, 2));
  }
}

function readData() {
  ensureDataFile();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw);
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function findUser(data, username) {
  return data.users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
}

app.post("/api/login", (req, res) => {
  const { username } = req.body;

  if (!username || !username.trim()) {
    return res.status(400).json({ message: "Username is required." });
  }

  const cleanUsername = username.trim();
  const data = readData();

  let user = findUser(data, cleanUsername);

  if (!user) {
    user = {
      username: cleanUsername,
      createdAt: new Date().toISOString(),
      scores: []
    };
    data.users.push(user);
    writeData(data);
  }

  res.json({
    message: "Login successful.",
    user: {
      username: user.username,
      createdAt: user.createdAt,
      scores: user.scores
    }
  });
});

app.get("/api/users/:username", (req, res) => {
  const { username } = req.params;
  const data = readData();
  const user = findUser(data, username);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  res.json(user);
});

app.post("/api/scores/:username", (req, res) => {
  const { username } = req.params;
  const { category, difficulty, score, total } = req.body;

  if (!category || !difficulty || score === undefined || total === undefined) {
    return res.status(400).json({ message: "Missing score data." });
  }

  const data = readData();
  const user = findUser(data, username);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  const entry = {
    category,
    difficulty,
    score,
    total,
    percentage: Math.round((score / total) * 100),
    date: new Date().toISOString()
  };

  user.scores.push(entry);
  writeData(data);

  res.json({ message: "Score saved successfully.", entry });
});

app.get("/api/scores/:username", (req, res) => {
  const { username } = req.params;
  const data = readData();
  const user = findUser(data, username);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  const sortedScores = [...user.scores].sort((a, b) => {
    if (b.percentage !== a.percentage) return b.percentage - a.percentage;
    return b.score - a.score;
  });

  res.json(sortedScores);
});

app.get("/api/leaderboard", (req, res) => {
  const data = readData();

  const leaderboard = data.users
    .flatMap((user) =>
      user.scores.map((score) => ({
        username: user.username,
        ...score
      }))
    )
    .sort((a, b) => {
      if (b.percentage !== a.percentage) return b.percentage - a.percentage;
      return b.score - a.score;
    })
    .slice(0, 20);

  res.json(leaderboard);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

app.listen(PORT, () => {
  ensureDataFile();
  console.log(`Server running on http://localhost:${PORT}`);
});