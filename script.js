questions = {
    1: ["question1???", "answer1", "answer2"],
    2: ["question2???", "answer1", "answer2"],
    3: ["question3???", "answer1", "answer2"],
    4: ["question4???", "answer1", "answer2"],
    5: ["question5???", "answer1", "answer2"],
    6: ["question6???", "answer1", "answer2"],
    7: ["question7???", "answer1", "answer2"],
}

var questionNumber = 1
const maxQuestions = 7

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-box').hidden = true;
    document.getElementById('quiz-box').hidden = false;
    renderQuiz();
});

document.getElementById('quiz-answer1').addEventListener('click', function() {
    incrementQuestion();
});

document.getElementById('quiz-answer2').addEventListener('click', function() {
    incrementQuestion();
});

const incrementQuestion = () => {
    questionNumber++;
    if (questionNumber > maxQuestions) {
        document.getElementById('quiz-box').hidden = true;
        document.getElementById('result-box').hidden = false;
    } else {
        renderQuiz();
    }
}


const renderQuiz = () => {
    document.getElementById("quiz-question").innerHTML=questions[questionNumber][0]; 
    document.getElementById("quiz-answer1").innerHTML=questions[questionNumber][1]; 
    document.getElementById("quiz-answer2").innerHTML=questions[questionNumber][2]; 
}



