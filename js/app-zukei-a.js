// ===== 進捗読み込み =====
let currentIndex = 0;

const savedIndexIndex !== null) {const savedIndex = localStorage.getItem("zukei-progress");
  currentIndex = Number(savedIndex);
}

// ===== 要素取得 =====
const levelBadge = document.getElementById("levelBadge");
const metaText = document.getElementById("metaText");
const questionText = document.getElementById("questionText");
const thinkingPrompt = document.getElementById("thinkingPrompt");
const thinkingChoices = document.getElementById("thinkingChoices");
const thinkingResult = document.getElementById("thinkingResult");
const answerSection = document.getElementById("answerSection");
const answerPrompt = document.getElementById("answerPrompt");
const answerChoices = document.getElementById("answerChoices");
const answerResult = document.getElementById("answerResult");
const checkThinkingBtn = document.getElementById("checkThinkingBtn");
const checkAnswerBtn = document.getElementById("checkAnswerBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

// ===== 問題表示 =====
function renderQuestion() {
  const q = zukeiAQuestions[currentIndex];

  levelBadge.textContent = q.level;
  metaText.textContent = `${q.level} / Q${q.id}`;
  questionText.textContent = q.question;
  thinkingPrompt.textContent = q.thinkingPrompt;
  answerPrompt.textContent = q.answerPrompt;

  thinkingChoices.innerHTML = "";
  answerChoices.innerHTML = "";

  q.thinkingChoices.forEach((choice, index) => {
    thinkingChoices.innerHTML += `
      <div class="choice-item">
        <label>
          <input type="radio" name="thinking" value="${index}">
          <span>${choice}</span>
        </label>
      </div>
    `;
  });

  q.answerChoices.forEach((choice, index) => {
    answerChoices.innerHTML += `
      <div class="choice-item">
        <label>
          <input type="radio" name="answer" value="${index}">
          <span>${choice}</span>
        </label>
      </div>
    `;
  });

  // リセット表示
  thinkingResult.className = "feedback";
  thinkingResult.textContent = "";
  answerResult.className = "feedback";
  answerResult.textContent = "";
  answerSection.classList.add("hidden");
  nextBtn.disabled = true;

  updateProgress();
}

// ===== 進捗バー =====
function updateProgress() {
  const total = zukeiAQuestions.length;
  const current = currentIndex + 1;
  progressText.textContent = `${current} / ${total}`;
  progressFill.style.width = `${(current / total) * 100}%`;
}

// ===== 思考チェック =====
checkThinkingBtn.addEventListener("click", () => {
  const q = zukeiAQuestions[currentIndex];
  const selected = document.querySelector('input[name="thinking"]:checked');

  if (!selected) {
    thinkingResult.className = "feedback ng";
    thinkingResult.textContent = "考え方を1つ選んでください。";
    return;
  }

  const selectedIndex = Number(selected.value);
  const isCorrect = selectedIndex === q.correctThinking;

  thinkingResult.className = `feedback ${isCorrect ? "ok" : "ng"}`;
  thinkingResult.textContent = q.thinkingFeedback[selectedIndex];

  if (isCorrect) {
    answerSection.classList.remove("hidden");
  } else {
    answerSection.classList.add("hidden");
  }
});

// ===== 答えチェック =====
checkAnswerBtn.addEventListener("click", () => {
  const q = zukeiAQuestions[currentIndex];
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    answerResult.className = "feedback ng";
    answerResult.textContent = "答えを1つ選んでください。";
    return;
  }

  const selectedIndex = Number(selected.value);
  const isCorrect = selectedIndex === q.correctAnswer;

  answerResult.className = `feedback ${isCorrect ? "ok" : "ng"}`;
  answerResult.textContent = isCorrect
    ? `✅ 正解！ ${q.explanation}`
    : `❌ 不正解。正しい答えは「${q.answerChoices[q.correctAnswer]}」。 ${q.explanation}`;

  if (isCorrect) {
    nextBtn.disabled = false;
  }
});

// ===== 次の問題 =====
nextBtn.addEventListener("click", () => {
  if (currentIndex < zukeiAQuestions.length - 1) {
    currentIndex++;

    // ✅ 保存
    localStorage.setItem("zukei-progress", currentIndex);

    renderQuestion();
  } else {
    alert("図形の性質30問おつかれさま！");
  }
});

// ===== やり直し =====
resetBtn.addEventListener("click", () => {
  renderQuestion();
});

// ===== 初期表示 =====
renderQuestion();
