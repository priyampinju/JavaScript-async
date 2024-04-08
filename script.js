const body = document.body;
const id = setInterval(() => {
  const red = Math.floor(Math.random() * 125);
  const green = Math.floor(Math.random() * 125);
  const blue = Math.floor(Math.random() * 125);
  const rgb = `rgb(${red},${green},${blue})`;
  body.style.background = rgb;
}, 5000);
