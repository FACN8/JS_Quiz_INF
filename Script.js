let title = "Html";
let Answer = "";
let QuestNumber = 1;
let score = 0,
    cat = 0,
    mode = 0;

var htmlQuestions = [{
        question: "What is html?",
        options: ["Najwan", "Programing language", "html", "dadaass"],
        correctAnswer: "html"
    },
    {
        question: "What is html used for? ?",
        options: ["Tea", "Document structuring", "never", "dadaass"],
        correctAnswer: "structuring"
    },
    {
        question: "What is life ?",
        options: ["Najwan", "hello", "never", "dadaass"],
        correctAnswer: "never"
    }

]
var CssQuestions = [{
        question: "What is the main usage for css?",
        options: ["Najwan", "Document styling", "asdas", "dadaass"],
        correctAnswer: "Document styling"
    },
    {
        question: "What is the time ?",
        options: ["Najwan", "hello", "never", "dadaass"],
        correctAnswer: "never"
    },
    {
        question: "What is the time ?",
        options: ["Najwan", "hello", "never", "dadaass"],
        correctAnswer: "never"
    }

]
var JsQuestions = [{
        question: "What is JS?",
        options: ["Najwan", "Java Script", "asdas", "dadaass"],
        correctAnswer: "Java Script"
    },
    {
        question: "What is the time ?",
        options: ["Najwan", "hello", "never", "dadaass"],
        correctAnswer: "never"
    },
    {
        question: "What is the time ?",
        options: ["Najwan", "hello", "never", "dadaass"],
        correctAnswer: "never"
    }

]
var Questions = [htmlQuestions, CssQuestions, JsQuestions]

function startQuiz() {
    document.getElementById("MainContainer").style = "display:none;";
    document.getElementById("QuizContainer").style = "";
    document.getElementById("ExitButton").style = "";
    document.getElementById("MainTitle").innerHTML = title;
    LoadQustion(cat);
}


function showMain() {
    document.getElementById("MainContainer").style = "";
    document.getElementById("QuizContainer").style = "display:none;";
    document.getElementById("ExitButton").style = "visibility:hidden;";
}

function selectMode(n) {
    let Modebutton = document.getElementsByClassName("Mode")
    for (var i = 0; i < Modebutton.length; i++) {
        Modebutton[i].className = Modebutton[i].className.replace(" active", "");
    }
    Modebutton[n].className += " active";
}

function selectCat(n) {
    let Catbutton = document.getElementsByClassName("Cat")
    for (var i = 0; i < Catbutton.length; i++) {
        Catbutton[i].className = Catbutton[i].className.replace(" active", "");
    }
    Catbutton[n].className += " active";
    cat = n;
    title = Catbutton[n].innerHTML;
}

// Add a fix to stop if no answer is selected
function selectAns(n) {
    let Ansbutton = document.getElementsByClassName("AnswerButton")
    for (var i = 0; i < Ansbutton.length; i++) {
        Ansbutton[i].className = Ansbutton[i].className.replace(" active", "");
    }
    Ansbutton[n].className += " active";
    Answer = Ansbutton[n].innerHTML;
}

function LoadQustion(n) {
    document.getElementById("CurrentQuestion").innerHTML = Questions[cat][QuestNumber - 1].question;
    let Ansbutton = document.getElementsByClassName("AnswerButton")
    for (var i = 0; i < 4; i++) {
        Ansbutton[i].innerHTML = Questions[cat][QuestNumber - 1].options[i];
    }

}

function checkAns() {
    var CurrentAnswer = Questions[cat][QuestNumber - 1].correctAnswer;
    if (Answer == CurrentAnswer) {
        score++;
        document.getElementById("CurrentScore").innerHTML = score;
        alert("Correct!")

    }
    if (QuestNumber >= 3) { Restart(); } else {
        QuestNumber++;
        document.getElementById("Progress").innerHTML = QuestNumber + "/3";
        LoadQustion();
    }
}

function Restart() {
    showMain();
    score = 0;
    document.getElementById("CurrentScore").innerHTML = score;
    QuestNumber = 1;
    document.getElementById("Progress").innerHTML = QuestNumber + "/3";
}
// end quiz,show your score and time , adjust last + best score
function quizEnd () {

}