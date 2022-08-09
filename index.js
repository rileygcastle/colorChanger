const btns = document.getElementsByClassName("btn");
const tint = document.getElementById("cover");
function colorChanger(evt) {
  const hexColor = evt.target.id;
  tint.style.backgroundColor = hexColor;
}

for (let i = 0; i < btns.length; i++) {
  const currentBtn = btns[i];
  currentBtn.addEventListener("click", colorChanger);
}
