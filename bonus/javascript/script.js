const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const totSquare = 100;
  const bigBox = document.getElementById("playground");
  bigBox.innerHTML = "";
  for (let i = 0; i < totSquare; i++) {
    let boxes = myDrawSquare(i, totSquare);
    bigBox.append(boxes);
  }
});

function myDrawSquare(index, totSquare) {
  const squareWidth = Math.sqrt(totSquare);
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.width = `calc(100% / ${squareWidth})`;
  square.style.height = square.style.width;
  square.innerHTML = index + 1;
  square.addEventListener("click", function () {
    square.classList.add("active");
  });
  return square;
}
