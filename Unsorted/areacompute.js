'use strict';
document.getElementById("squareSubmit").onclick = computeAreaSquare;
document.getElementById("triangleSubmit").onclick = computeAreaTriangle;
document.getElementById("circleSubmit").onclick = computeAreaCircle;
document.getElementById("resetButton").onclick = resetForm;


function computeAreaSquare() {
  const x = document.getElementById("squareSide").value;
  const squareArea = x * x;
  document.getElementById("squareAnswer").innerHTML += squareArea;
}

function computeAreaTriangle() {
  const a = document.getElementById("triangleSideA").value;
  const b = document.getElementById("triangleSideB").value;
  const c = document.getElementById("triangleSideC").value;
  const triangleArea = (a * b * c) / 2;
  document.getElementById("triangleAnswer").innerHTML += triangleArea;
}

function computeAreaCircle() {
  const x = document.getElementById("circleRadius").value;
  const circleArea = 3.14 * (x * x);
  document.getElementById("circleAnswer").innerHTML += circleArea;
}

function resetForm() {
  location.reload();
}