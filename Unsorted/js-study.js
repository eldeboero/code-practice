var startChapter;
var endChapter;
var chapterNum;

var bookLink = document.getElementById("bookLink");
bookLink.className = "biglink";
var chapterLink = document.getElementById("chapterLink");
chapterLink.onmouseover = updateChapter;
var readerLink = document.getElementById("readerLink");
readerLink.onclick = openBook;
readerLink.className += " btn-warning btn-lg";

function updateChapter() {
    startChapter = parseInt(document.getElementById("startChapterBox").value);
    endChapter = parseInt(document.getElementById("endChapterBox").value);
    if (!startChapter || isNaN(startChapter)) {
        startChapter = 1;
    }
    if (!endChapter || isNaN(endChapter)) {
        endChapter = 89;
    }
    if (validateInputs()) {
        getRandomChapterLimited(endChapter, startChapter);
    }
}

function getRandomChapterLimited(endChapter, startChapter) {
    chapterNum = Math.random() * (endChapter - startChapter + 1) + startChapter;
    chapterNum = Math.floor(chapterNum);
    setRandomChapterLink(chapterNum);
}

function setRandomChapterLink(chapterNum) {
    chapterLink = document.getElementById("chapterLink");
    chapterLink.href = "http://asmarterwaytolearn.com/js/" + chapterNum + ".html";
}

function openBook() {
    var bookWindow = window.open("https://read.amazon.com");
}

function validateInputs() {
    if (startChapter > 0 &&
        startChapter < 89 &&
        endChapter > 1 &&
        endChapter < 90) {
        return true;
    }
    else {
        alert("Invalid selection! Enter values 1 - 89")
        return false;

    }
}