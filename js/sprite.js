// 選擇 DOM 元素並初始化變數
let cursor = document.getElementById("cursor");
let close = document.getElementById("close");
let body = document.body;
let iframe = document.getElementById("pen");
let penLink = document.getElementById("penlink");
let links = document.getElementsByTagName("a");

// iFrame 的 URL 陣列
// let frames = [
//   "https://codepen.io/cobra_winfrey/debug/xxVJZwo",
//   "https://cdpn.io/cobra_winfrey/debug/wvGyKEY",
//   "https://codepen.io/cobra_winfrey/debug/OJVJJoj",
//   "https://cdpn.io/cobra_winfrey/debug/YzXOBEN",
//   "https://codepen.io/cobra_winfrey/debug/qBZWVmO",
//   "https://codepen.io/cobra_winfrey/debug/eYOXOdB",
//   "https://codepen.io/cobra_winfrey/debug/OJXJeod",
//   "https://codepen.io/cobra_winfrey/debug/PoqVQRq",
//   "https://cdpn.io/cobra_winfrey/debug/qgEGMZ",
//   "https://codepen.io/cobra_winfrey/debug/RwWYGxj",
// ];

// Pull out the preloader
// 在 DOMContentLoaded 事件上添加一個類別
//DOMContentLoaded 事件觸發時，為 body 元素添加一個名為 "loaded" 的 CSS 類別。
document.addEventListener("DOMContentLoaded", function () {
  body.classList.add("loaded");
});

// 初始化 GSAP 動畫以處理游標移動

gsap.set("#cursor", { xPercent: -50, yPercent: -50 });
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.35;

const xSet = gsap.quickSetter(cursor, "x", "px");
const ySet = gsap.quickSetter(cursor, "y", "px");

// 根據滑鼠移動更新游標位置
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// 使用 GSAP 的動畫循環實現平滑的游標移動
gsap.ticker.add(() => {
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

// Load iFrames on demand & remove after modal is closed to reduce weight & smooth out transitions
// 處理卡片的滑鼠事件
let cards = document.getElementsByClassName("inner");
for (let i = 0; i < cards.length; i++) {
  // 在滑鼠事件中添加類別以改變游標外觀
  cards[i].addEventListener("mousemove", function (event) {
    cursor.classList.add("active");
  });
  cards[i].addEventListener("mouseover", function (event) {
    cursor.classList.add("active");
  });

  cards[i].addEventListener("mouseout", function (event) {
    cursor.classList.remove("active");
  });

  // 處理卡片的點擊事件
  cards[i].addEventListener(
    "click",
    function (i) {
      body.classList.add("active");
      // iframe.setAttribute("src", frames[i]);
      // let penDebug = frames[i];
      // let penFull = penDebug.replace("debug", "pen");
      penLink.setAttribute("href", penFull);
    }.bind(null, i)
  );
}

// hover events for social links
// 處理社交連結的滑鼠事件
for (link of links) {
  link.addEventListener("mouseover", function (event) {
    cursor.classList.add("linkhover");
  });
  link.addEventListener("mousemove", function (event) {
    cursor.classList.add("linkhover");
  });
  link.addEventListener("mouseout", function (event) {
    cursor.classList.remove("linkhover");
  });
}

// Escape key option to exit active state
// 處理按下 Escape 鍵退出活動狀態的事件
document.onkeydown = function (evt) {
  evt = evt || window.event;
  let isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    body.classList.remove("active");
    setTimeout(() => {
      iframe.setAttribute("src", "");
    }, 2000);
  }
};

// 處理點擊關閉按鈕的事件
close.addEventListener("click", function (event) {
  body.classList.remove("active");
  setTimeout(() => {
    iframe.setAttribute("src", "");
  }, 2000);
});

// 使用 Splitting.js 庫拆分文本內容
Splitting();

// Individual section scroll progress
// 為各個區塊的滾動進度創建滾動觸發器
gsap.utils.toArray(".panel").forEach((section, index) => {
  gsap.to(this, {
    scrollTrigger: {
      trigger: section,
      start: "top 100%",
      end: "bottom 25%",
      scrub: 0,
      onUpdate: (self) => {
        section.style.setProperty("--progress", self.progress);
      },
    },
  });
});

// Full page scroll progress
// 為整個頁面的滾動進度創建滾動觸發器
gsap.to("body", {
  scrollTrigger: {
    trigger: "body",
    start: "top 100%",
    end: "50% 50%",
    scrub: 0,
    onUpdate: (self) => {
      // body.style.setProperty("--progress", self.progress);
    },
  },
});
