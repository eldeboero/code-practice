const myDate = new Date().getTime();
const xmas = new Date('Dec 12, 2020').getTime();
const timeDiff = xmas - myDate;
// / (1000 * 3600 * 24))

document.getElementById('numberOfDaysRemaining').value = Math.floor(timeDiff / (1000 * 3600 * 24));