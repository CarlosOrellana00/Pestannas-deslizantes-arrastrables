const tabsBox = document.querySelector(".tabs-box"),
arrowIcons = tabsBox.querySelector(".icon i");

let isDragging = false;

arrowIcons.forEach(icon => {
  icon.addEventListener("click",() => {
    console.log(icon.id);
  });
});

const dragging = (e) => {
  if(!isDragging) return;
  tabsBox.scrollLeft -= e.movementX;
}

const dragStop = () => {
  isDragging = false;
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove",dragging);
document.addEventListener("mouseup", dragStop);