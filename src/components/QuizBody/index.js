import React, { useState } from 'react';

function QuizBody() {

    const questionsArray = require('../../assets/Apprentice_TandemFor400_Data.json');

    const [gameOff, setGameOff] = useState(true);
    const [tenQuestions, setTenQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [btnClass, setBtnClass] = useState("btn btn-primary btn-block m-1")
    
    function startQuiz() {
        
        if (!gameOff) {
            return;
        }

        setGameOff(false);
        setScore(0);
        const chosen = [];

        // choose ten random questions
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
        if (isCorrect === true) {
            setScore(score + 10);
            setBtnClass("btn btn-success btn-block m-1");
        } else {
            setBtnClass("btn btn-danger btn-block m-1")
        }

        setTimeout(function() {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < tenQuestions.length) {
                setCurrentQuestion(nextQuestion);
                setBtnClass("btn btn-primary btn-block m-1");
            } else {
            resetQuiz();
            setBtnClass("btn btn-primary btn-block m-1");
            }
        }, 500);

        
    };

    return (
        <div className="contrainer-fluid" >
            <div className='card border m-4' style={{height: '425px'}}>
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
                            Rules
                            <ol>
                                <li>Press Start to start the quiz</li>
                                <li>Press the button that has the correct answer for each question</li>
                                <li>When all of the questions are done, see your score!</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className='card-body text-center'>
                    {gameOff ? (
                        <>
                        <h2>Press Start to begin the Trivia Quiz!</h2>
                        <h4>Your last score was {score}.</h4>
                        <h4>Can you do better?</h4>
                        </>
                    ) : (
                        <>
                        <p id='question' className="card-text text-center h5 border rounded p-2">{tenQuestions[currentQuestion].question}</p>
                        <div className='container pt-2'>
                            {tenQuestions[currentQuestion].choices.map((choice) => (
                                <button className={btnClass} onClick={()=> handleAnswerChoice(choice.isCorrect)}>{choice.answer}</button>
                            ))}
                        </div>
                        </>
                    )} 
                </div>
            </div>
        </div>
    )
}

export default QuizBody;