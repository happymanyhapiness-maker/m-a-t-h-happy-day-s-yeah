const sankakuhiQuestions = [
  {
    id: 1,
    level: "Lv1",
    question: "三角形ABCにおいて、辺 b=6, c=8、その間の角 A=30° とする。この三角形の面積を求めよ。",
    thinkingPrompt: "まず何に注目する？",
    thinkingChoices: [
      "2辺とその間の角",
      "3辺の長さ",
      "辺と向かいの角",
      "面積が与えられている"
    ],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！2辺とその間の角から面積公式が使える。",
      "❌ 3辺は与えられていない。",
      "❌ 今回は向かい合う対応ではない。",
      "❌ 面積はこれから求める。"
    ],
    answerPrompt: "面積はどれ？",
    answerChoices: ["12", "24", "6", "8"],
    correctAnswer: 0,
    explanation: "S = 1/2 × 6 × 8 × sin30° = 12"
  },

  {
    id: 2,
    level: "Lv1",
    question: "三角形ABCにおいて、b=5, c=7, A=60° とする。面積を求めよ。",
    thinkingPrompt: "何を使う？",
    thinkingChoices: [
      "面積公式",
      "正弦定理",
      "余弦定理",
      "三平方の定理"
    ],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！",
      "❌ 今回は違う。",
      "❌ 今回は不要。",
      "❌ 直角ではない。"
    ],
    answerPrompt: "面積はどれ？",
    answerChoices: ["35√3/4", "35/2", "7√3", "35√2/4"],
    correctAnswer: 0,
    explanation: "S = 1/2 × 5 × 7 × sin60° = 35√3/4"
  },

  {
    id: 3,
    level: "Lv1",
    question: "三角形ABCにおいて、a=3, A=30°, B=60° とする。辺 b を求めよ。",
    thinkingPrompt: "どの定理？",
    thinkingChoices: [
      "正弦定理",
      "余弦定理",
      "面積公式",
      "三平方の定理"
    ],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！",
      "❌ 条件不足。",
      "❌ 面積ではない。",
      "❌ 直角ではない。"
    ],
    answerPrompt: "辺 b はどれ？",
    answerChoices: ["3√3", "6√3", "3", "3/2"],
    correctAnswer: 0,
    explanation: "b = 3 × sin60° / sin30° = 3√3"
  }
];

console.log("questions loaded");
console.log(sankakuhiQuestions);
