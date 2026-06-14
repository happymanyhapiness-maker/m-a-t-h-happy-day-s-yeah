// 三角比// = document.getElementById("resume-sankaku");
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
``
