import React, { useState } from 'react';

function QuizBody() {

    const questionsArray = require('../../assets/Apprentice_TandemFor400_Data.json');
    
    const [gameOff, setGameOff] = useState(true);
    const [tenQuestions, setTenQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    function startQuiz() {
        
        setGameOff(false);

        // choose ten random questions
        for (let i = 0; i < 10; i++) {
            let num = Math.floor(Math.random() * (questionsArray.length + 1));
            
            if (!tenQuestions.includes(num)) {
                tenQuestions.push(questionsArray[num]);
            }
        }

        console.log(tenQuestions);
    };

    function handleAnswerChoice () {
        console.log('Hello!');
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
                        </div>
                    </div>
                    </div>
                </div>

                <div className="modal fade" id="highScoreModal" tabIndex="-1" role="dialog" aria-labelledby="highScoreModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="highScoreModalLabel">High Scores!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Placeholder high Scores
                            <ol>
                                <li>Bill: 49</li>
                                <li>Ted: 45</li>
                                <li>Jill: 43</li>
                                <li>Winifred: 40</li>
                            </ol>
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
                
                <div className='card-body'>
                    {gameOff ? (
                        <p>Press Start to begin the Trivia Quiz!</p>
                    ) : (
                        <>
                        <p id='question' className="card-text text-center h5 border rounded p-2">{tenQuestions[currentQuestion].question}</p>
                        <div className='container pt-2'>
                            {tenQuestions[currentQuestion].choices.map((choice) => (
                                <button className="btn btn-primary btn-block m-1" onClick={handleAnswerChoice}>{choice.answer}</button>
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