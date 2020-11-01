import React, { useState } from 'react';

function QuizBody() {
    // linked JSON quiz questions and answers
    const questionsArray = require('../../assets/Apprentice_TandemFor400_Data.json');

    const [gameOff, setGameOff] = useState(true);
    const [tenQuestions, setTenQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [btnClass, setBtnClass] = useState("btn btn-primary btn-block m-1");
    const [showCorrect, setShowCorrect] = useState(false);
    
    function startQuiz() {
        if (!gameOff) {
            return;
        }
        setGameOff(false);
        setScore(0);
        const chosen = [];
        // Choose 10 random questions from the 21
        while (tenQuestions.length < 10) {
            let num = Math.floor(Math.random() * (questionsArray.length));
            if (chosen.includes(num)) {
            } else {
                chosen.push(num);
                tenQuestions.push(questionsArray[num]);
            }
        }
    };

    function resetQuiz() {
        setGameOff(true);
        setCurrentQuestion(0);
        setTenQuestions([]);
    };

    function handleAnswerChoice (isCorrect) {
        // If the choice is correct, add 10 points and change color to green, else, change color to red
        if (isCorrect === true) {
            setScore(score + 10);
            setBtnClass("btn btn-success btn-block m-1");
        } else {
            setBtnClass("btn btn-danger btn-block m-1");
        }
        setShowCorrect(true);
        // After half a second, return the button color to normal and go to next question
        setTimeout(function() {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < tenQuestions.length) {
                setCurrentQuestion(nextQuestion);
                setShowCorrect(false);
                setBtnClass("btn btn-primary btn-block m-1");
            } else {
            resetQuiz();
            setShowCorrect(false);
            setBtnClass("btn btn-primary btn-block m-1");
            }
        }, 1000);
    };

    return (
        <div className="contrainer-fluid" >
            <div className='card border m-4' style={{height: '375px'}}>
                <div className='card-header text-center'>
                    <div className='btn-group'>
                        <button className='btn btn-light border' id='startBtn' onClick={startQuiz}>
                            Start!
                        </button>
                        <div className="dropdown">
                            <button className="btn btn-light border dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Options
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button type='button' className='btn btn-link' data-toggle='modal' data-target='#rulesModal'>How To Play</button>
                                <button type='button' className='btn btn-link' onClick={resetQuiz}>Reset Quiz</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal for rules */}
                <div className="modal fade" id="rulesModal" tabIndex="-1" role="dialog" aria-labelledby="rulesModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="rulesModalLabel">How to Play!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ol>
                                <li>Press "Start!" to begin the quiz.</li>
                                <li>Each quiz is 10 questions, chosen randomly from a list of 21, 
                                    and each question will only be shown once.
                                </li>
                                <li>Read the Trivia Question and choose one of the four answer choices.</li>
                                <li>If your answer is correct, the buttons will flash green, if it is incorrect, 
                                    they will flash red.
                                </li>
                                <li>When all of the questions are done, you should see your score. You get 10 
                                    points for each correct answer.
                                </li>
                                <li>If you ever need to reset the quiz, click "Reset Quiz" in the "Options" menu. </li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                {/* displays when the game isn't on */}
                <div className='card-body text-center'>
                    {gameOff ? (
                        <>
                        <h2>Press Start to begin the Trivia Quiz!</h2>
                        <h4>Your last score was {score}.</h4>
                        <h4>Can you do better?</h4>
                        </>
                    ) : ( 
                        <>
                        {/* dynamically generate questions and answers */}
                        <p key="question" id='question' className="card-text text-center h5 border rounded p-2">{tenQuestions[currentQuestion].question}</p>
                        <div className='container pt-2'>
                            {tenQuestions[currentQuestion].choices.map((choice) => (
                                <button key={choice.id} className={btnClass} onClick={()=> handleAnswerChoice(choice.isCorrect)}>{choice.answer}</button>
                            ))}
                        </div>
                        {showCorrect ? (
                            <p className="h5 mt-3">Answer: {tenQuestions[currentQuestion].correct}</p>
                        ) : (
                            <p></p>
                        )}
                        
                        </>
                    )} 
                </div>
            </div>
        </div>
    )
}

export default QuizBody;