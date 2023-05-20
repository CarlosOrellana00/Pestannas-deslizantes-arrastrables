const tabsBox = document.querySelector(".tabs-box");

let isDragging = fasle;

const dragging = (e) => {
  if(!isDragging) return;
  tabsBox.scrollLeft -= e.movementX;
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove",dragging);