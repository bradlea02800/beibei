// 選擇 DOM 元素並初始化變數
let cursor = document.getElementById("cursor");
let close = document.getElementById("close");
let body = document.body;
let iframe = document.getElementById("pen");
let penLink = document.getElementById("penlink");
let links = document.getElementsByTagName("a");

// iFrame 的 URL 陣列
let frames = [
  "https://codepen.io/cobra_winfrey/debug/xxVJZwo",
  "https://cdpn.io/cobra_winfrey/debug/wvGyKEY",
  "https://codepen.io/cobra_winfrey/debug/OJVJJoj",
  "https://cdpn.io/cobra_winfrey/debug/YzXOBEN",
  "https://codepen.io/cobra_winfrey/debug/qBZWVmO",
  "https://codepen.io/cobra_winfrey/debug/eYOXOdB",
  "https://codepen.io/cobra_winfrey/debug/OJXJeod",
  "https://codepen.io/cobra_winfrey/debug/PoqVQRq",
  "https://cdpn.io/cobra_winfrey/debug/qgEGMZ",
  "https://codepen.io/cobra_winfrey/debug/RwWYGxj",
];

// Pull out the preloader
// 在 DOMContentLoaded 事件上添加一個類別
//DOMContentLoaded 事件觸發時，為 body 元素添加一個名為 "loaded" 的 CSS 類別。
document.addEventListener("DOMContentLoaded", function () {
  body.classList.add("loaded");
});
