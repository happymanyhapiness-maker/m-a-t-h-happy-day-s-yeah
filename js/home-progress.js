// 三角比
const sankakuEl = document.getElementById("resume-sankaku");
const sankaku = localStorage.getItem("sankaku-progress");

if (sankakuEl) {
  if (sankaku !== null) {
    sankakuEl.textContent = `続き：Q${Number(sankaku) + 1}から再開`;
  } else {
    sankakuEl.textContent = "未開始";
  }
}

// 図形
const zukeiEl = document.getElementById("resume-zukei");
const zukei = localStorage.getItem("zukei-progress");

if (zukeiEl) {
  if (zukei !== null) {
    zukeiEl.textContent = `続き：Q${Number(zukei) + 1}から再開`;
  } else {
    zukeiEl.textContent = "未開始";
  }
}
const resetBtn = document.getElementById("reset-all");

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("sankaku-progress");
    localStorage.removeItem("zukei-progress");

    alert("進捗をリセットしました");

    location.reload(); // 表示更新
  });
}
