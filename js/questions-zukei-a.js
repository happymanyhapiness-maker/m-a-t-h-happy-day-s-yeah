const zukeiAQuestions = [
  {
    id: 1,
    level: "Lv1",
    question: "三角形ABCの重心Gについて、正しい説明を1つ選べ。",
    thinkingPrompt: "まず着目すべき線はどれ？",
    thinkingChoices: ["中線", "垂直二等分線", "高さ", "角の二等分線"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！重心は中線と結びつく。",
      "❌ それは外心に関係する。",
      "❌ それは垂心に関係する。",
      "❌ それは内心に関係する。"
    ],
    answerPrompt: "重心Gの説明として正しいものはどれ？",
    answerChoices: [
      "3本の中線の交点",
      "3本の垂直二等分線の交点",
      "3本の高さの交点",
      "3本の角の二等分線の交点"
    ],
    correctAnswer: 0,
    explanation: "重心は三角形の3本の中線の交点。"
  },
  {
    id: 2,
    level: "Lv1",
    question: "三角形ABCの外心Oについて、正しい説明を1つ選べ。",
    thinkingPrompt: "外心を決める線はどれ？",
    thinkingChoices: ["垂直二等分線", "中線", "高さ", "角の二等分線"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！外心は垂直二等分線の交点。",
      "❌ それは重心に関係する。",
      "❌ それは垂心に関係する。",
      "❌ それは内心に関係する。"
    ],
    answerPrompt: "外心Oの説明として正しいものはどれ？",
    answerChoices: [
      "3本の垂直二等分線の交点",
      "3本の中線の交点",
      "3本の高さの交点",
      "3本の角の二等分線の交点"
    ],
    correctAnswer: 0,
    explanation: "外心は3辺の垂直二等分線の交点で、外接円の中心になる。"
  },
  {
    id: 3,
    level: "Lv1",
    question: "三角形ABCの内心Iについて、正しい説明を1つ選べ。",
    thinkingPrompt: "内心を決める線はどれ？",
    thinkingChoices: ["角の二等分線", "垂直二等分線", "高さ", "中線"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！内心は角の二等分線の交点。",
      "❌ それは外心に関係する。",
      "❌ それは垂心に関係する。",
      "❌ それは重心に関係する。"
    ],
    answerPrompt: "内心Iの説明として正しいものはどれ？",
    answerChoices: [
      "3本の角の二等分線の交点",
      "3本の垂直二等分線の交点",
      "3本の高さの交点",
      "3本の中線の交点"
    ],
    correctAnswer: 0,
    explanation: "内心は3つの角の二等分線の交点で、内接円の中心になる。"
  },
  {
    id: 4,
    level: "Lv1",
    question: "三角形ABCの重心Gは、中線をどの比で内分するか。",
    thinkingPrompt: "頂点側と中点側の比を思い出そう。",
    thinkingChoices: ["2:1", "1:1", "3:1", "1:2"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！頂点側が2。",
      "❌ 半分ではない。",
      "❌ 取り違えている。",
      "❌ 逆になっている。"
    ],
    answerPrompt: "頂点から重心、重心から辺の中点までの比はどれ？",
    answerChoices: ["2:1", "1:1", "3:1", "1:2"],
    correctAnswer: 0,
    explanation: "重心は各中線を頂点側:中点側=2:1に内分する。"
  },
  {
    id: 5,
    level: "Lv1",
    question: "正三角形における中心の性質として正しいものを1つ選べ。",
    thinkingPrompt: "図形の対称性に注目しよう。",
    thinkingChoices: [
      "外心・内心・重心が一致する",
      "外心と重心だけ一致する",
      "内心と垂心だけ一致する",
      "どれも一致しない"
    ],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！正三角形では中心が一致する。",
      "❌ 一部だけではない。",
      "❌ 一部だけではない。",
      "❌ 一致する。"
    ],
    answerPrompt: "正しいものはどれ？",
    answerChoices: [
      "外心・内心・重心が一致する",
      "外心と重心だけ一致する",
      "内心と垂心だけ一致する",
      "どれも一致しない"
    ],
    correctAnswer: 0,
    explanation: "正三角形では外心・内心・重心・垂心などが同じ点になる。"
  },
  {
    id: 6,
    level: "Lv1",
    question: "三角形ABCで、内心Iの性質として正しいものを1つ選べ。",
    thinkingPrompt: "どの距離が等しくなるか考えよう。",
    thinkingChoices: ["3辺までの距離", "3頂点までの距離", "3本の中線の長さ", "3つの角の大きさ"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！内心は3辺から等距離。",
      "❌ それは外心の性質に近い。",
      "❌ そのような性質ではない。",
      "❌ 角そのものが等しいわけではない。"
    ],
    answerPrompt: "内心Iについて正しいものはどれ？",
    answerChoices: [
      "3辺から等距離にある",
      "3頂点から等距離にある",
      "3本の中線の長さが等しい",
      "3つの角を等しくする"
    ],
    correctAnswer: 0,
    explanation: "内心は3辺からの距離が等しい点。"
  },
  {
    id: 7,
    level: "Lv1",
    question: "三角形ABCで、外心Oの性質として正しいものを1つ選べ。",
    thinkingPrompt: "どの距離が等しくなるか考えよう。",
    thinkingChoices: ["3頂点までの距離", "3辺までの距離", "3本の高さの長さ", "3つの角の大きさ"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！外心は3頂点から等距離。",
      "❌ それは内心の性質。",
      "❌ そのような性質ではない。",
      "❌ 角の大きさの話ではない。"
    ],
    answerPrompt: "外心Oについて正しいものはどれ？",
    answerChoices: [
      "3頂点から等距離にある",
      "3辺から等距離にある",
      "3本の高さの長さが等しい",
      "3つの角を等しくする"
    ],
    correctAnswer: 0,
    explanation: "外心は3頂点から等距離にあり、外接円の中心になる。"
  },
  {
    id: 8,
    level: "Lv2",
    question: "三角形ABCで、点Dが辺BC上にあり、ADが∠Aの二等分線である。AB=6, AC=9 のとき、BD:DC を求めよ。",
    thinkingPrompt: "どの定理に注目する？",
    thinkingChoices: ["角の二等分線の定理", "中点連結定理", "チェバの定理", "メネラウスの定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！AB:AC = BD:DC を使える。",
      "❌ 平行線の話ではない。",
      "❌ 1点に集まる条件の話ではない。",
      "❌ 一直線上の条件の話ではない。"
    ],
    answerPrompt: "BD:DC はどれ？",
    answerChoices: ["2:3", "3:2", "6:9", "1:1"],
    correctAnswer: 0,
    explanation: "角の二等分線の定理より AB:AC = BD:DC = 6:9 = 2:3。"
  },
  {
    id: 9,
    level: "Lv2",
    question: "三角形ABCで、ABの中点をM、ACの中点をNとする。MNとBCの関係として正しいものを1つ選べ。",
    thinkingPrompt: "中点連結定理に注目しよう。",
    thinkingChoices: [
      "MNはBCに平行で、長さはBCの半分",
      "MNはBCに垂直で、長さはBCの半分",
      "MNはBCに平行で、長さはBCと等しい",
      "MNはBCと無関係"
    ],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！中点連結定理そのもの。",
      "❌ 垂直ではない。",
      "❌ 長さは半分。",
      "❌ きちんと関係がある。"
    ],
    answerPrompt: "正しいものはどれ？",
    answerChoices: ["平行で半分", "垂直で半分", "平行で等しい", "無関係"],
    correctAnswer: 0,
    explanation: "中点連結定理より、MN ∥ BC かつ MN = BC/2。"
  },
  {
    id: 10,
    level: "Lv2",
    question: "三角形ABCで、ABの中点をM、ACの中点をNとする。BC=10 のとき、MN の長さを求めよ。",
    thinkingPrompt: "どの定理を使う？",
    thinkingChoices: ["中点連結定理", "角の二等分線の定理", "チェバの定理", "メネラウスの定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！MN = BC/2。",
      "❌ 今回は中点に注目する。",
      "❌ 1点に集まる条件の話ではない。",
      "❌ 一直線上の条件の話ではない。"
    ],
    answerPrompt: "MN の長さはどれ？",
    answerChoices: ["5", "10", "15", "20"],
    correctAnswer: 0,
    explanation: "中点連結定理より MN = BC/2 = 5。"
  },
  {
    id: 11,
    level: "Lv2",
    question: "円O上の相異なる3点A,B,Cについて、∠AOC=80° とする。弧ACに対する円周角 ∠ABC を求めよ。",
    thinkingPrompt: "どの角の関係を使う？",
    thinkingChoices: ["中心角と円周角", "接弦定理", "方べきの定理", "チェバの定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！同じ弧に対する円周角は中心角の半分。",
      "❌ 接線は出てこない。",
      "❌ 積の関係ではない。",
      "❌ 三角形の線分比ではない。"
    ],
    answerPrompt: "∠ABC はどれ？",
    answerChoices: ["40°", "80°", "20°", "160°"],
    correctAnswer: 0,
    explanation: "同じ弧ACに対する円周角は中心角の半分なので 80°/2 = 40°。"
  },
  {
    id: 12,
    level: "Lv2",
    question: "同じ円の同じ弧に対する円周角について、正しいものを1つ選べ。",
    thinkingPrompt: "円周角の基本性質に注目しよう。",
    thinkingChoices: ["等しい", "2倍になる", "和が180°になる", "必ず90°になる"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！同じ弧に対する円周角は等しい。",
      "❌ 2倍になるのは中心角。",
      "❌ 必ずそうなるわけではない。",
      "❌ 半円のときに限る。"
    ],
    answerPrompt: "正しいものはどれ？",
    answerChoices: ["等しい", "2倍になる", "和が180°", "必ず90°"],
    correctAnswer: 0,
    explanation: "同じ弧に対する円周角は等しい。"
  },
  {
    id: 13,
    level: "Lv2",
    question: "四角形ABCDが円に内接しているとき、∠A=70° である。∠C を求めよ。",
    thinkingPrompt: "どの性質を使う？",
    thinkingChoices: ["円に内接する四角形の対角の和", "中心角と円周角", "中点連結定理", "角の二等分線の定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！対角の和は180°。",
      "❌ ここでは四角形の性質に注目する。",
      "❌ 中点の話ではない。",
      "❌ 辺の比の話ではない。"
    ],
    answerPrompt: "∠C はどれ？",
    answerChoices: ["110°", "70°", "90°", "180°"],
    correctAnswer: 0,
    explanation: "円に内接する四角形では対角の和が180°なので、∠C = 180° - 70° = 110°。"
  },
  {
    id: 14,
    level: "Lv2",
    question: "四角形ABCDが円に内接しているとき、∠B=95° である。∠D を求めよ。",
    thinkingPrompt: "どの角の関係に注目する？",
    thinkingChoices: ["対角の和が180°", "隣り合う角が等しい", "中心角の半分", "外角は内角に等しい"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！円に内接する四角形の性質。",
      "❌ そのような性質ではない。",
      "❌ ここでは使わない。",
      "❌ 一般には成り立たない。"
    ],
    answerPrompt: "∠D はどれ？",
    answerChoices: ["85°", "95°", "90°", "180°"],
    correctAnswer: 0,
    explanation: "対角の和が180°なので、∠D = 180° - 95° = 85°。"
  },
  {
    id: 15,
    level: "Lv2",
    question: "円Oにおいて、点Aでの接線と弦ABがつくる角が35° である。同じ弦ABに対する円周角の大きさを求めよ。",
    thinkingPrompt: "どの定理を使う？",
    thinkingChoices: ["接弦定理", "中心角と円周角", "方べきの定理", "メネラウスの定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！接線と弦の角は、反対側の円周角に等しい。",
      "❌ 接線があるので接弦定理が直接。",
      "❌ 積の関係ではない。",
      "❌ 一直線上の条件ではない。"
    ],
    answerPrompt: "同じ弦ABに対する円周角はどれ？",
    answerChoices: ["35°", "70°", "17.5°", "145°"],
    correctAnswer: 0,
    explanation: "接弦定理より、接線と弦のなす角は同じ弦に対する円周角に等しい。"
  },
  {
    id: 16,
    level: "Lv2",
    question: "円Oにおいて、点Aでの接線と弦ACがつくる角が48° である。同じ弦ACに対する円周角の大きさを求めよ。",
    thinkingPrompt: "どの定理を使う？",
    thinkingChoices: ["接弦定理", "円に内接する四角形", "中点連結定理", "チェバの定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！接弦定理。",
      "❌ 四角形の話ではない。",
      "❌ 平行線の話ではない。",
      "❌ 線分比ではない。"
    ],
    answerPrompt: "円周角はどれ？",
    answerChoices: ["48°", "96°", "24°", "132°"],
    correctAnswer: 0,
    explanation: "接弦定理より、求める円周角は48°。"
  },
  {
    id: 17,
    level: "Lv3",
    question: "点Pから円に2本の接線PA, PBを引く。PA=7 のとき、PB の長さを求めよ。",
    thinkingPrompt: "接線の長さの性質に注目しよう。",
    thinkingChoices: ["同一点から引いた2本の接線の長さ", "中心角と円周角", "方べきの定理の積", "中点連結定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！同一点から引いた接線の長さは等しい。",
      "❌ 接線の長さそのものの性質を使う。",
      "❌ ここではもっと直接的な性質がある。",
      "❌ 無関係。"
    ],
    answerPrompt: "PB の長さはどれ？",
    answerChoices: ["7", "14", "3.5", "0"],
    correctAnswer: 0,
    explanation: "同一点から円に引いた2本の接線の長さは等しいので PB = PA = 7。"
  },
  {
    id: 18,
    level: "Lv3",
    question: "点Pから円に2本の接線PA, PBを引く。PA=10 のとき、PB の長さを求めよ。",
    thinkingPrompt: "どの性質を使う？",
    thinkingChoices: ["接線の長さは等しい", "円周角の性質", "方べきの定理", "メネラウスの定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！同一点からの接線は等しい。",
      "❌ 角の話ではない。",
      "❌ 今回はもっと直接的。",
      "❌ 無関係。"
    ],
    answerPrompt: "PB の長さはどれ？",
    answerChoices: ["10", "20", "5", "0"],
    correctAnswer: 0,
    explanation: "接線PA, PBは同じ点Pから引いているので PA = PB = 10。"
  },
  {
    id: 19,
    level: "Lv3",
    question: "点Pから円に引いた1本の割線が円とA, Bで交わり、PA=3, PB=12 である。別の割線が円とC, Dで交わり、PC=4 のとき、PD を求めよ。",
    thinkingPrompt: "どの定理が使える？",
    thinkingChoices: ["方べきの定理", "接弦定理", "チェバの定理", "中点連結定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！PA×PB = PC×PD を使う。",
      "❌ 接線は出てこない。",
      "❌ 三角形の線分比ではない。",
      "❌ 平行線の話ではない。"
    ],
    answerPrompt: "PD はどれ？",
    answerChoices: ["9", "12", "16", "36"],
    correctAnswer: 0,
    explanation: "方べきの定理より 3×12 = 4×PD。したがって PD = 9。"
  },
  {
    id: 20,
    level: "Lv3",
    question: "点Pから円に引いた1本の割線が円とA, Bで交わり、PA=2, PB=15 である。別の割線が円とC, Dで交わり、PC=5 のとき、PD を求めよ。",
    thinkingPrompt: "どの積が等しくなる？",
    thinkingChoices: ["PA×PB と PC×PD", "PA+PB と PC+PD", "PA-PB と PC-PD", "PA² と PC²"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！方べきの定理の形。",
      "❌ 和ではない。",
      "❌ 差ではない。",
      "❌ 2乗ではない。"
    ],
    answerPrompt: "PD はどれ？",
    answerChoices: ["6", "5", "10", "30"],
    correctAnswer: 0,
    explanation: "2×15 = 5×PD より PD = 6。"
  },
  {
    id: 21,
    level: "Lv3",
    question: "点Pから円に接線PTと割線PABを引く。PT=6, PA=3 のとき、PB を求めよ。",
    thinkingPrompt: "どの定理が使える？",
    thinkingChoices: ["方べきの定理", "接弦定理", "円周角の定理", "メネラウスの定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！PT² = PA×PB を使う。",
      "❌ 角の等しさではない。",
      "❌ 円周角だけではない。",
      "❌ 無関係。"
    ],
    answerPrompt: "PB はどれ？",
    answerChoices: ["12", "9", "18", "6"],
    correctAnswer: 0,
    explanation: "方べきの定理より PT² = PA×PB。36 = 3×PB だから PB = 12。"
  },
  {
    id: 22,
    level: "Lv3",
    question: "点Pから円に接線PTと割線PABを引く。PT=8, PA=4 のとき、PB を求めよ。",
    thinkingPrompt: "どの式に注目する？",
    thinkingChoices: ["PT² = PA×PB", "PT = PA+PB", "PT = PA-PB", "PT² = PA+PB"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！接線と割線の方べき。",
      "❌ 和ではない。",
      "❌ 差ではない。",
      "❌ 2乗の後ろが違う。"
    ],
    answerPrompt: "PB はどれ？",
    answerChoices: ["16", "12", "8", "4"],
    correctAnswer: 0,
    explanation: "64 = 4×PB より PB = 16。"
  },
  {
    id: 23,
    level: "Lv3",
    question: "三角形ABCで、辺BC上に点D、辺CA上に点E、辺AB上に点Fをとる。AD, BE, CF が1点で交わる条件を扱う定理はどれ？",
    thinkingPrompt: "1点に集まる条件か、一直線上の条件かを区別しよう。",
    thinkingChoices: ["チェバの定理", "メネラウスの定理", "中点連結定理", "接弦定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！1点に集まる条件はチェバ。",
      "❌ それは一直線上の条件。",
      "❌ 中点や平行線の定理ではない。",
      "❌ 接線は関係ない。"
    ],
    answerPrompt: "使う定理はどれ？",
    answerChoices: ["チェバの定理", "メネラウスの定理", "中点連結定理", "接弦定理"],
    correctAnswer: 0,
    explanation: "三角形の3本の線分が1点で交わる条件はチェバの定理。"
  },
  {
    id: 24,
    level: "Lv3",
    question: "三角形ABCで、辺BC上に点D、CA上に点E、ABの延長上に点Fをとる。D, E, F が一直線上にある条件を扱う定理はどれ？",
    thinkingPrompt: "一直線上の条件に注目しよう。",
    thinkingChoices: ["メネラウスの定理", "チェバの定理", "角の二等分線の定理", "中点連結定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！一直線上ならメネラウス。",
      "❌ それは1点に集まる条件。",
      "❌ 辺の比は出るが主役ではない。",
      "❌ 平行線の定理ではない。"
    ],
    answerPrompt: "使う定理はどれ？",
    answerChoices: ["メネラウスの定理", "チェバの定理", "角の二等分線の定理", "中点連結定理"],
    correctAnswer: 0,
    explanation: "三角形の辺上の3点が一直線上にある条件はメネラウスの定理。"
  },
  {
    id: 25,
    level: "Lv3",
    question: "チェバの定理の式の特徴として正しいものを1つ選べ。",
    thinkingPrompt: "どの計算に注目する？",
    thinkingChoices: ["比の積", "比の和", "比の差", "比の平均"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！チェバは比の積が1。",
      "❌ 和ではない。",
      "❌ 差ではない。",
      "❌ 平均ではない。"
    ],
    answerPrompt: "正しいものはどれ？",
    answerChoices: ["3つの比の積が1", "3つの比の和が1", "3つの比の差が1", "3つの比の平均が1"],
    correctAnswer: 0,
    explanation: "チェバの定理では、対応する3つの比の積が1になる。"
  },
  {
    id: 26,
    level: "Lv3",
    question: "メネラウスの定理を使うとき、特に注意すべきものを1つ選べ。",
    thinkingPrompt: "比をどう扱うかに注目しよう。",
    thinkingChoices: ["線分の向き", "角度の和", "面積比", "円周角"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！向き付きで比を扱うことがある。",
      "❌ 角度の和が主役ではない。",
      "❌ 面積比ではない。",
      "❌ 円周角ではない。"
    ],
    answerPrompt: "重要なのはどれ？",
    answerChoices: ["線分の向き", "角度の和", "面積比", "円周角"],
    correctAnswer: 0,
    explanation: "メネラウスの定理では、符号付き比・向きを意識することが大切。"
  },
  {
    id: 27,
    level: "Lv3",
    question: "三角形ABCで、点Dが辺BC上にあり、ADが∠Aの二等分線である。AB=8, AC=12 のとき、BD:DC を求めよ。",
    thinkingPrompt: "どの比が等しくなる？",
    thinkingChoices: ["AB:AC = BD:DC", "AB:AC = AD:DC", "AB:BC = BD:DC", "AC:BC = BD:DC"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！角の二等分線の定理。",
      "❌ AD はその形では入らない。",
      "❌ 辺BCは直接入らない。",
      "❌ その形ではない。"
    ],
    answerPrompt: "BD:DC はどれ？",
    answerChoices: ["2:3", "3:2", "8:12", "1:1"],
    correctAnswer: 0,
    explanation: "AB:AC = BD:DC = 8:12 = 2:3。"
  },
  {
    id: 28,
    level: "Lv3",
    question: "三角形ABCで、ABの中点をM、ACの中点をNとする。MN=7 のとき、BC の長さを求めよ。",
    thinkingPrompt: "どの定理を使う？",
    thinkingChoices: ["中点連結定理", "チェバの定理", "メネラウスの定理", "方べきの定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！MN = BC/2。",
      "❌ 1点集中の話ではない。",
      "❌ 一直線上の話ではない。",
      "❌ 円の定理ではない。"
    ],
    answerPrompt: "BC の長さはどれ？",
    answerChoices: ["14", "7", "3.5", "21"],
    correctAnswer: 0,
    explanation: "中点連結定理より BC = 2×MN = 14。"
  },
  {
    id: 29,
    level: "Lv3",
    question: "円O上の4点A, B, C, Dで四角形ABCDが円に内接している。∠A=55° のとき、∠C を求めよ。",
    thinkingPrompt: "どの角の関係に注目する？",
    thinkingChoices: ["対角の和", "隣角の和", "中心角は2倍", "接弦定理"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！内接四角形の対角の和は180°。",
      "❌ 隣角ではない。",
      "❌ ここでは四角形の性質。",
      "❌ 接線はない。"
    ],
    answerPrompt: "∠C はどれ？",
    answerChoices: ["125°", "55°", "90°", "110°"],
    correctAnswer: 0,
    explanation: "円に内接する四角形では対角の和が180°なので、∠C = 180° - 55° = 125°。"
  },
  {
    id: 30,
    level: "Lv3",
    question: "点Pから円に引いた1本の割線が円とA, Bで交わり、PA=4, PB=9 である。別の割線が円とC, Dで交わり、PC=6 のとき、PD を求めよ。",
    thinkingPrompt: "どの関係式を使う？",
    thinkingChoices: ["PA×PB = PC×PD", "PA+PB = PC+PD", "PA-PB = PC-PD", "PA² = PC²"],
    correctThinking: 0,
    thinkingFeedback: [
      "✅ 正解！方べきの定理。",
      "❌ 和ではない。",
      "❌ 差ではない。",
      "❌ 2乗同士ではない。"
    ],
    answerPrompt: "PD はどれ？",
    answerChoices: ["6", "9", "12", "24"],
    correctAnswer: 0,
    explanation: "4×9 = 6×PD より PD = 6。"
  }
];
