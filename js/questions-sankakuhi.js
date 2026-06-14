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
    thinkingChoices: ["面積公式", "正弦定理", "余弦定理", "三平方の定理"],
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
    question: "三角形ABCにおいて、b=5, c=6, A=60° とする。辺 a の長さを求めよ。",
    thinkingPrompt: "最初に使うべき定理はどれ？",
    thinkingChoices: ["正弦定理", "余弦定理", "面積公式", "相互関係"],
    correctThinking: 1,
    thinkingFeedback: [
      "❌ 辺と向かい合う角の対応が足りない。",
      "✅ 正解！2辺とその間の角から残り1辺を求める。",
      "❌ 面積は出せるが、辺 a を直接求めるなら余弦定理。",
      "❌ まず辺を求める段階。"
    ],
    answerPrompt: "辺 a はどれ？",
    answerChoices: ["√31", "√39", "11", "5"],
    correctAnswer: 0,
    explanation: "a²=5²+6²-2×5×6×cos60°=31"
  },
  {
    id: 4,
    level: "Lv1",
    question: "三角形ABCにおいて、a=3, A=30°, B=60° とする。辺 b を求めよ。",
    thinkingPrompt: "どの定理？",
    thinkingChoices: ["正弦定理", "余弦定理", "面積公式", "三平方の定理"],
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
  },
  {
    id: 5,
    level: "Lv1",
    question: "三角形ABCにおいて、b=7, c=8, A=90° とする。辺 a の長さを求めよ。",
    thinkingPrompt: "どの考え方が最も自然？",
    thinkingChoices: ["正弦定理", "余弦定理", "面積公式", "内接円"],
    correctThinking: 1,
    thinkingFeedback: [
      "❌ この条件なら余弦定理の方が自然。",
      "✅ 正解！A=90° なので三平方の定理型になる。",
      "❌ 面積は出せても辺 a は直接出せない。",
      "❌ 今回は不要。"
    ],
    answerPrompt: "辺 a はどれ？",
    answerChoices: ["√113", "15", "√105", "1"],
    correctAnswer: 0,
    explanation: "a²=7²+8²=113"
  },
  {
    id: 6,
    level: "Lv1",
    question: "三角形ABCにおいて、面積が12、b=6, c=8 とする。角 A の大きさを求めよ。ただし鋭角とする。",
    thinkingPrompt: "まず求めるべき量はどれ？",
    thinkingChoices: ["sinA", "cosA", "辺 a", "角 B"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！面積公式から sinA を出せる。",
      "❌ まずは面積公式に直接つながる量を出したい。",
      "❌ 辺 a を求める条件としては弱い。",
      "❌ A を求めるのが先。"
    ],
    answerPrompt: "角 A はどれ？",
    answerChoices: ["30°", "45°", "60°", "150°"],
    correctAnswer: 0,
    explanation: "12=1/2×6×8×sinA → sinA=1/2。鋭角より A=30°"
  },
  {
    id: 7,
    level: "Lv1",
    question: "三角形ABCにおいて、a=10, b=6, c=8 とする。角 A の大きさを求めよ。",
    thinkingPrompt: "まず何を求めるのが自然？",
    thinkingChoices: ["cosA", "sinA", "面積", "辺 b"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！3辺があるので、まず余弦定理で cosA を出す。",
      "❌ まずは余弦定理で cos を出す方が自然。",
      "❌ 面積を経由しなくてもよい。",
      "❌ b はすでに分かっている。"
    ],
    answerPrompt: "角 A はどれ？",
    answerChoices: ["30°", "60°", "90°", "120°"],
    correctAnswer: 2,
    explanation: "10²=6²+8²-2×6×8×cosA → cosA=0 → A=90°"
  },
  {
    id: 8,
    level: "Lv1",
    question: "三角形ABCにおいて、a=8, b=5, c=7 とする。角 A を求めるために必要な cosA の値を求めよ。",
    thinkingPrompt: "最初に使うべき定理はどれ？",
    thinkingChoices: ["余弦定理", "正弦定理", "面積公式", "三平方の定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！3辺から cosA を出すなら余弦定理。",
      "❌ 角の対応だけでは進めにくい。",
      "❌ 面積を求める段階ではない。",
      "❌ 直角三角形かはまだ分からない。"
    ],
    answerPrompt: "cosA はどれ？",
    answerChoices: ["1/7", "1/5", "1/2", "0"],
    correctAnswer: 0,
    explanation: "8²=5²+7²-2×5×7cosA → cosA=1/7"
  },
  {
    id: 9,
    level: "Lv1",
    question: "三角形ABCにおいて、b=4, c=6、面積が6である。角 A の大きさを求めよ。ただし鋭角とする。",
    thinkingPrompt: "まず求めるべき量はどれ？",
    thinkingChoices: ["sinA", "cosA", "辺 a", "半径"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！面積公式から sinA を出して角に戻す。",
      "❌ まずは面積に直結する量を出す。",
      "❌ 辺 a を先に求める必要はない。",
      "❌ 今回は不要。"
    ],
    answerPrompt: "角 A はどれ？",
    answerChoices: ["30°", "45°", "60°", "120°"],
    correctAnswer: 0,
    explanation: "6=1/2×4×6×sinA → sinA=1/2。鋭角より A=30°"
  },
  {
    id: 10,
    level: "Lv1",
    question: "辺の長さが 3, 4, 5 の三角形である。最大の角の大きさを求めよ。",
    thinkingPrompt: "最初に確認すべきことはどれ？",
    thinkingChoices: ["直角三角形かどうか", "面積", "正弦定理", "円"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！3²+4²=5² を確認する。",
      "❌ 面積を出す前にもっと基本的な判定がある。",
      "❌ いきなり定理を使う前に形を見たい。",
      "❌ 今回は不要。"
    ],
    answerPrompt: "最大の角はどれ？",
    answerChoices: ["45°", "60°", "90°", "120°"],
    correctAnswer: 2,
    explanation: "3²+4²=5² なので直角三角形。最大角は90°"
  },
  {
    id: 11,
    level: "Lv2",
    question: "三角形ABCにおいて、a=6, A=30°, B=45° とする。辺 b の長さを求めよ。",
    thinkingPrompt: "最初に使うべき考え方はどれ？",
    thinkingChoices: ["正弦定理", "余弦定理", "面積公式", "相互関係"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！辺と向かい合う角の対応がある。",
      "❌ 必要な辺が足りない。",
      "❌ 面積ではなく辺を求める問題。",
      "❌ 先に定理を使う。"
    ],
    answerPrompt: "辺 b はどれ？",
    answerChoices: ["6√2", "3√2", "6√3", "12"],
    correctAnswer: 0,
    explanation: "b=6×sin45°/sin30°=6√2"
  },
  {
    id: 12,
    level: "Lv2",
    question: "三角形ABCにおいて、b=4, c=5, A=120° とする。辺 a の長さを求めよ。",
    thinkingPrompt: "最初に使うべき定理はどれ？",
    thinkingChoices: ["正弦定理", "余弦定理", "面積公式", "三平方の定理"],
    correctThinking: 1,
    thinkingFeedback: [
      "❌ 対応する辺と角が足りない。",
      "✅ 正解！2辺とその間の角から残り1辺を出す。",
      "❌ 面積は出せても辺 a は直接出せない。",
      "❌ 直角三角形ではない。"
    ],
    answerPrompt: "辺 a はどれ？",
    answerChoices: ["√61", "√41", "9", "√31"],
    correctAnswer: 0,
    explanation: "a²=4²+5²-2×4×5×cos120°=61"
  },
  {
    id: 13,
    level: "Lv2",
    question: "三角形ABCにおいて、面積が10、b=5, c=4 とする。角 A の大きさを求めよ。",
    thinkingPrompt: "まず求めるべき量はどれ？",
    thinkingChoices: ["sinA", "cosA", "辺 a", "角 B"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！面積公式から sinA を求める。",
      "❌ まずは面積に直接つながる量を出す。",
      "❌ 辺 a を先に求める必要はない。",
      "❌ A を求めるのが先。"
    ],
    answerPrompt: "角 A はどれ？",
    answerChoices: ["30°", "60°", "90°", "120°"],
    correctAnswer: 2,
    explanation: "10=1/2×5×4×sinA → sinA=1 → A=90°"
  },
  {
    id: 14,
    level: "Lv2",
    question: "三角形ABCにおいて、a=5, b=7, c=8 とする。角 C を求めるために必要な cosC の値を求めよ。",
    thinkingPrompt: "最初に使うべき定理はどれ？",
    thinkingChoices: ["余弦定理", "正弦定理", "面積公式", "円周角"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！3辺から角Cにつながる cosC を出す。",
      "❌ 角の対応だけでは弱い。",
      "❌ 面積を経由しなくてもよい。",
      "❌ 今回は不要。"
    ],
    answerPrompt: "cosC はどれ？",
    answerChoices: ["1/7", "1/5", "1/2", "0"],
    correctAnswer: 0,
    explanation: "8²=5²+7²-2×5×7cosC → cosC=1/7"
  },
  {
    id: 15,
    level: "Lv2",
    question: "三角形ABCにおいて、b=4, c=6、面積が6である。面積公式を用いて sinA を求めよ。",
    thinkingPrompt: "まず使うのはどれ？",
    thinkingChoices: ["面積公式", "正弦定理", "余弦定理", "三平方の定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！面積から sinA を逆算できる。",
      "❌ 辺と角の対応が足りない。",
      "❌ 3辺がない。",
      "❌ 直角三角形とは限らない。"
    ],
    answerPrompt: "sinA はどれ？",
    answerChoices: ["1/2", "1", "1/3", "2/3"],
    correctAnswer: 0,
    explanation: "6=1/2×4×6×sinA → sinA=1/2"
  },
  {
    id: 16,
    level: "Lv2",
    question: "三角形ABCにおいて、a=3, A=30°, 面積が3である。辺 c の長さを求めよ。ただし B=90° とする。",
    thinkingPrompt: "最初に着目する条件はどれ？",
    thinkingChoices: ["辺 a と角 A", "3辺", "面積と直角", "外接円"],
    correctThinking: 2,
    thinkingFeedback: [
      "❌ それだけでは遠回りになりやすい。",
      "❌ 3辺は与えられていない。",
      "✅ 正解！B=90° なので面積が 1/2×a×c になる。",
      "❌ 不要。"
    ],
    answerPrompt: "辺 c はどれ？",
    answerChoices: ["2", "3", "4", "6"],
    correctAnswer: 0,
    explanation: "3=1/2×3×c → c=2"
  },
  {
    id: 17,
    level: "Lv2",
    question: "三角形ABCにおいて、a=6, b=8, c=10 とする。角 C の大きさを求めよ。",
    thinkingPrompt: "まず求めると自然なのはどれ？",
    thinkingChoices: ["cosC", "sinC", "面積", "辺 b"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！3辺から余弦定理で cosC を出す。",
      "❌ まずは cosC が自然。",
      "❌ 面積を経由しなくてもよい。",
      "❌ b はすでに分かっている。"
    ],
    answerPrompt: "角 C はどれ？",
    answerChoices: ["30°", "60°", "90°", "120°"],
    correctAnswer: 2,
    explanation: "10²=6²+8²-2×6×8×cosC → cosC=0 → C=90°"
  },
  {
    id: 18,
    level: "Lv2",
    question: "三角形ABCにおいて、a=5, A=30°, B=45° とする。辺 b の長さを求めよ。",
    thinkingPrompt: "最初に使うべき定理はどれ？",
    thinkingChoices: ["正弦定理", "余弦定理", "面積公式", "相互関係"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！辺と向かい合う角の対応から正弦定理。",
      "❌ 必要な辺情報が足りない。",
      "❌ 面積ではない。",
      "❌ 先に定理を使う。"
    ],
    answerPrompt: "辺 b はどれ？",
    answerChoices: ["5√2", "10√2", "5√3", "10"],
    correctAnswer: 0,
    explanation: "b=5×sin45°/sin30°=5√2"
  },
  {
    id: 19,
    level: "Lv2",
    question: "三角形ABCにおいて、b=3, c=4, A=90° とする。この三角形の面積を求めよ。",
    thinkingPrompt: "最初に使うべき考え方はどれ？",
    thinkingChoices: ["面積公式", "正弦定理", "余弦定理", "方べきの定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！BとCが直角をはさむ辺なのでそのまま面積公式。",
      "❌ 今回は不要。",
      "❌ 辺を求める問題ではない。",
      "❌ 不要。"
    ],
    answerPrompt: "面積はどれ？",
    answerChoices: ["6", "12", "7", "5"],
    correctAnswer: 0,
    explanation: "S=1/2×3×4=6"
  },
  {
    id: 20,
    level: "Lv2",
    question: "三角形ABCにおいて、a=7, b=5, c=6 とする。角 A を求めるために必要な cosA の値を求めよ。",
    thinkingPrompt: "何を使うべき？",
    thinkingChoices: ["余弦定理", "正弦定理", "面積公式", "三平方の定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！3辺から cosA を出す典型。",
      "❌ 角の対応だけでは不十分。",
      "❌ 面積から行く必要はない。",
      "❌ 直角かは分からない。"
    ],
    answerPrompt: "cosA はどれ？",
    answerChoices: ["1/5", "1/7", "1/2", "0"],
    correctAnswer: 0,
    explanation: "7²=5²+6²-2×5×6cosA → cosA=1/5"
  },
  {
    id: 21,
    level: "Lv3",
    question: "三角形ABCにおいて、a=7, b=5, c=6 とする。三角形の面積を求めよ。",
    thinkingPrompt: "面積を求めるために、まず何を求めるのが自然？",
    thinkingChoices: ["sinA", "辺 b", "角 C", "外接円の半径"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！まず cosA を余弦定理で出し、そこから sinA を求めて面積につなげる。",
      "❌ b はすでに分かっている。",
      "❌ A を使えば十分。",
      "❌ 今回は不要。"
    ],
    answerPrompt: "面積はどれ？",
    answerChoices: ["6√6", "3√6", "12√6/5", "5√6"],
    correctAnswer: 0,
    explanation: "cosA=1/5 → sinA=2√6/5。S=1/2×5×6×2√6/5=6√6"
  },
  {
    id: 22,
    level: "Lv3",
    question: "三角形ABCにおいて、b=6, c=8、面積が24である。角 A の大きさを求めよ。",
    thinkingPrompt: "まず何を出すのが自然？",
    thinkingChoices: ["sinA", "cosA", "辺 a", "角 B"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！面積公式から sinA を出す。",
      "❌ cosA より sinA が直接出せる。",
      "❌ 辺 a を先に出す必要はない。",
      "❌ A を先に求めたい。"
    ],
    answerPrompt: "角 A はどれ？",
    answerChoices: ["30°", "60°", "90°", "120°"],
    correctAnswer: 2,
    explanation: "24=1/2×6×8×sinA → sinA=1 → A=90°"
  },
  {
    id: 23,
    level: "Lv3",
    question: "三角形ABCにおいて、b=5, c=7, A=60° とする。面積と辺 a の長さをそれぞれ求めよ。",
    thinkingPrompt: "面積と辺を両方求めるとき、最初の処理として自然なのはどれ？",
    thinkingChoices: ["面積を先に求める", "辺 a を先に求める", "正弦定理を使う", "半径を求める"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！この問題では面積公式がすぐ使える。",
      "❌ a を先に求めてもよいが、まずは面積公式が最短。",
      "❌ 正弦定理は形が弱い。",
      "❌ 不要。"
    ],
    answerPrompt: "『面積, 辺a』の組として正しいものはどれ？",
    answerChoices: ["35√3/4, √39", "35/2, √39", "35√3/4, √31", "35√2/4, √39"],
    correctAnswer: 0,
    explanation: "面積は 35√3/4、辺aは a²=25+49-35=39 より √39"
  },
  {
    id: 24,
    level: "Lv3",
    question: "三角形ABCにおいて、b=6, c=8, A=90° とする。面積と辺 a の長さをそれぞれ求めよ。",
    thinkingPrompt: "最初の処理として自然なのはどれ？",
    thinkingChoices: ["面積を先に求める", "正弦定理を使う", "外接円を使う", "角Bを求める"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！面積公式が最短。",
      "❌ 今回は不要。",
      "❌ 不要。",
      "❌ その必要はない。"
    ],
    answerPrompt: "『面積, 辺a』の組として正しいものはどれ？",
    answerChoices: ["24, 10", "12, 10", "24, 8", "12, 8"],
    correctAnswer: 0,
    explanation: "S=1/2×6×8=24、a²=6²+8²=100 → a=10"
  },
  {
    id: 25,
    level: "Lv3",
    question: "三角形ABCにおいて、a=7, A=45°, B=60° とする。辺 b の長さを求めよ。",
    thinkingPrompt: "最初に使うべき定理はどれ？",
    thinkingChoices: ["正弦定理", "余弦定理", "面積公式", "三平方の定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！aとA、bとBの対応から正弦定理。",
      "❌ 辺の情報が足りない。",
      "❌ 面積ではない。",
      "❌ 直角とは限らない。"
    ],
    answerPrompt: "辺 b はどれ？",
    answerChoices: ["7√6/2", "7√2", "7√3/2", "7"],
    correctAnswer: 0,
    explanation: "b=7×sin60°/sin45°=7√6/2"
  },
  {
    id: 26,
    level: "Lv3",
    question: "三角形ABCにおいて、a=7, A=45°, B=60° とする。三角形の面積を求めよ。",
    thinkingPrompt: "面積を求めるために、まず何を確認するのが自然？",
    thinkingChoices: ["角 C", "辺 a", "cosA", "外接円"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！AとBが分かっているので C=180°-A-B を確認できる。",
      "❌ a はすでに分かっている。",
      "❌ まずは角を整理したい。",
      "❌ 不要。"
    ],
    answerPrompt: "面積はどれ？",
    answerChoices: ["49(3+√3)/8", "49(3+√3)/4", "49√3/8", "49/2"],
    correctAnswer: 0,
    explanation: "b=7√6/2、C=75°、S=1/2×a×b×sinC=49(3+√3)/8"
  },
  {
    id: 27,
    level: "Lv3",
    question: "三角形ABCにおいて、a=5, b=6, c=7 とする。cosC の値を求めよ。",
    thinkingPrompt: "どの定理を使うべき？",
    thinkingChoices: ["余弦定理", "正弦定理", "面積公式", "三平方の定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！3辺から cosC を出す。",
      "❌ 角情報がない。",
      "❌ 面積を先に出す必要はない。",
      "❌ 直角とは限らない。"
    ],
    answerPrompt: "cosC はどれ？",
    answerChoices: ["1/5", "1/7", "1/2", "0"],
    correctAnswer: 0,
    explanation: "7²=5²+6²-2×5×6cosC → cosC=1/5"
  },
  {
    id: 28,
    level: "Lv3",
    question: "三角形ABCにおいて、a=5, b=6, c=7 とする。三角形の面積を求めよ。",
    thinkingPrompt: "面積を求めるために、まず何を求めるのが自然？",
    thinkingChoices: ["sinC", "辺 a", "角 A", "外接円"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！余弦定理から cosC を出し、そこから sinC に進む。",
      "❌ a は分かっている。",
      "❌ C を使えば十分。",
      "❌ 不要。"
    ],
    answerPrompt: "面積はどれ？",
    answerChoices: ["6√6", "3√6", "12√6/5", "5√6"],
    correctAnswer: 0,
    explanation: "cosC=1/5 → sinC=2√6/5。S=1/2×5×6×2√6/5=6√6"
  },
  {
    id: 29,
    level: "Lv3",
    question: "三角形ABCにおいて、面積が12、b=6, c=8 とする。角 A は鋭角である。角 A の大きさを求めよ。",
    thinkingPrompt: "まず出すべき量はどれ？",
    thinkingChoices: ["sinA", "cosA", "辺 a", "角 C"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！面積公式から sinA を出し、鋭角条件で角を決める。",
      "❌ sinA の方が直接つながる。",
      "❌ 不要。",
      "❌ A を先に求める。"
    ],
    answerPrompt: "角 A はどれ？",
    answerChoices: ["30°", "45°", "60°", "150°"],
    correctAnswer: 0,
    explanation: "12=1/2×6×8×sinA → sinA=1/2。鋭角より A=30°"
  },
  {
    id: 30,
    level: "Lv3",
    question: "三角形ABCにおいて、a=3, b=4, c=5 とする。角 C の大きさと三角形の面積を求めよ。",
    thinkingPrompt: "最初にどんな見方をするのが自然？",
    thinkingChoices: [
      "最長辺に注目して直角三角形か確認する",
      "正弦定理を使う",
      "外接円を考える",
      "面積公式から始める"
    ],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！3,4,5 はまず直角三角形を疑う。",
      "❌ もっと基本的な見方がある。",
      "❌ 不要。",
      "❌ 先に形を見抜ける。"
    ],
    answerPrompt: "『角C, 面積』の組として正しいものはどれ？",
    answerChoices: ["90°, 6", "60°, 6", "90°, 12", "60°, 12"],
    correctAnswer: 0,
    explanation: "3²+4²=5² より C=90°。面積は 1/2×3×4=6"
  }
];
