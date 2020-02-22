document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);

// recode these as arrow functions!

function multiply() {
  const valueA = document.getElementById("valueA").value;
  const valueB = document.getElementById("valueB").value;
  document.getElementById("result").value = valueA * valueB;
}

function divide() {
  const valueA = document.getElementById("valueA").value;
  const valueB = document.getElementById("valueB").value;
  document.getElementById("result").value = valueA / valueB;
}

