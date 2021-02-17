"use strict";
randomBackground();

function randomBackground() {
  document.querySelector("body").style.backgroundColor = rgbToCSS();
  randomColor();
}

function randomColor() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * Math.floor(255)));
  }

  return rgb;
}

function rgbToCSS() {
  console.log(randomColor());
  let rgbNum = randomColor();
  return `rgb(${rgbNum})`;
}
