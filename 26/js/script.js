// 定义标签与文本的映射关系
const labelTextMap = {
  A: "Appreciation（感激）", 
  B: "Belief（信任）",
  C: "Care（关心）",
  D: "Devotion（挚爱）",
  E: "Enjoy（欣赏）",
  F: "Freedom（自由）",
  G: "Give（付出）",
  H: "Heart（心）",
  I: "Intimacy（亲密）",
  J: "Joy（喜悦）",
  K: "Kiss（吻）",
  L: "Love（爱）",
  M: "Mature（成熟）",
  N: "Nature（自然）",
  O: "Observe（观察）",
  P: "Protect（保护）",
  Q: "Quest（追求）", 
  R: "Romance（浪漫）",
  S: "Share（分享）",
  T: "Tender（温柔）",
  U: "Understanding（理解）",
  V: "Veracity（诚实）",
  W: "Wish（祝福）",
  X: "X（无限）",
  Y: "Yearning（思念）",
  Z: "Zeal（热情）",
};

// 获取所有标签和中间的爱心图片
const labels = document.querySelectorAll(".label");
const heartImage = document.querySelector(".heart image");
const heartText = document.getElementById("heartText"); // 获取显示文字的容器

// 为每个标签添加点击事件
labels.forEach((label) => {
  label.addEventListener("click", () => {
    // 获取标签对应的图片文件名
    const imageName = label.getAttribute("data-image");
    // 更新爱心中的图片
    heartImage.setAttribute("href", `./images/${imageName}`);

    // 获取标签对应的文本并更新显示
    const labelText = labelTextMap[label.textContent] || ""; // 获取对应文本，如果没有则为空
    heartText.textContent = labelText; // 更新心形上方显示的文本
  });
});

// 为爱心容器添加点击事件
const heartContainer = document.querySelector(".heart-container");
heartContainer.addEventListener("click", () => {
  // 点击时设置显示的默认图片为 0.webp
  heartImage.setAttribute("href", "./images/0.webp");

  // 清空显示的文字
  heartText.textContent = "";
});
