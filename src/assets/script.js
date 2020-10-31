const startBtn = document.getElementById('startBtn');
const questionNum = document.getElementById('questionNum');
const question = document.getElementById('question');
const answerChoice1 = document.getElementById('answerChoice1');
const answerChoice2 = document.getElementById('answerChoice2');
const answerChoice3 = document.getElementById('answerChoice3');
const answerChoice4 = document.getElementById('answerChoice4');
const questionsArray = require('../../assets/Apprentice_TandemFor400_Data.json');


const chosenQuestions = [];
function chooseQuestion() {
    let num = Math.floor(Math.random() * (questionsArray.length + 1));

    if (chosenQuestions.includes(num)) {
        chooseQuestion();
    } else {
        chosenQuestions.push(num);
                console.log(num);
    console.log(chosenQuestions);
        return num;
    }
}