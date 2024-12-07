function generateImage() {
  const chengyu = document.getElementById("chengyu").value.trim();
  if (!chengyu) {
    alert("请输入成语！");
    return;
  }

  // 更新标题和拼音
  const titleElement = document.getElementById("chengyu-title");
  const textElement = document.getElementById("chengyu-text");
  const imageContainer = document.getElementById("image-container");

  titleElement.textContent = chengyu;
  textElement.innerHTML = `<li>拼音: ${toPinyin(chengyu)}</li><li>释义: 根据AI模型解释成语的含义。</li>`;

  // 模拟生成图片
  const imageUrl = `https://dummyimage.com/600x400/007bff/ffffff&text=${encodeURIComponent(chengyu)}`;
  imageContainer.innerHTML = `<img src="${imageUrl}" alt="生成图片">`;

  // 简述过程
  textElement.innerHTML += `<li>生成过程: 文本输入 => AI模型处理 => 图片生成</li>`;
}

// 模拟拼音转换
function toPinyin(chengyu) {
  // 简单模拟，可以集成真实拼音库如 pinyin.js
  return chengyu.split("").map(char => char + "(拼音)").join(" ");
}
