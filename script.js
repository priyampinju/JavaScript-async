// const body = document.body;
// const button = document.querySelector("button");

// const id = setInterval(() => {
//   const red = Math.floor(Math.random() * 125);
//   const green = Math.floor(Math.random() * 125);
//   const blue = Math.floor(Math.random() * 125);
//   const rgb = `rgb(${red},${green},${blue})`;
//   body.style.background = rgb;
// }, 1000);

// button.addEventListener("click", () => {
//   clearInterval(id);
//   button.textContent = "this color is " + body.style.background;
// });
/********************************************************************** */

// // callbacks

// function myFunc() {
//   console.log("sdjsnfn");
// }
// myFunc();

// // We can put a function inside another function. And can call it back to back. Foe example,

function myFunc(callback) {
  console.log("Function is doing task1");
  callback();
}
function myFunc2() {
  console.log("function is doing task2");
}

// myFunc();
// myFunc2();
myFunc(myFunc2);

/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
/********************************************************************** */
