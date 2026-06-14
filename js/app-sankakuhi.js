let currentIndex = 0;

const level metaText = document.getElementById("metaText");const levelBadge = document.getElementById("levelBadge");
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

function renderQuestion() {
  const q = sankakuhiQuestions[currentIndex];

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

  thinkingResult.className = "feedback";
  thinkingResult.textContent = "";
  answerResult.className = "feedback";
  answerResult.textContent = "";
  answerSection.classList.add("hidden");
  nextBtn.disabled = true;

  updateProgress();
}

function updateProgress() {
  const total = sankakuhiQuestions.length;
  const current = currentIndex + 1;
  progressText.textContent = `${current} / ${total}`;
  progressFill.style.width = `${(current / total) * 100}%`;
}

checkThinkingBtn.addEventListener("click", () => {
  const q = sankakuhiQuestions[currentIndex];
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

checkAnswerBtn.addEventListener("click", () => {
  const q = sankakuhiQuestions[currentIndex];
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

nextBtn.addEventListener("click", () => {
  if (currentIndex < sankakuhiQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    alert("三角比30問おつかれさま！");
  }
});

resetBtn.addEventListener("click", () => {
  renderQuestion();
});

renderQuestion();
