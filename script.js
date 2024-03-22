questions = {
    1: ["question1???", "answer1", "answer2"],
    2: ["question2???", "answer1", "answer2"]
}

var questionNumber = 1

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-box').hidden = true;
    document.getElementById('quiz-box').hidden = false;
    renderQuiz();
});

document.getElementById('quiz-answer1').addEventListener('click', function() {
    questionNumber++;
    renderQuiz();
});

document.getElementById('quiz-answer2').addEventListener('click', function() {
    questionNumber++;
    renderQuiz();
});


const renderQuiz = () => {

    document.getElementById("quiz-question").innerHTML=questions[questionNumber][0]; 
    document.getElementById("quiz-answer1").innerHTML=questions[questionNumber][1]; 
    document.getElementById("quiz-answer2").innerHTML=questions[questionNumber][2]; 
}



