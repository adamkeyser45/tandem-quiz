import React, { useState } from 'react';

function QuizBody() {

    const [questionText, setQuestionText] = useState('And your first question is...');
    const [button1Text, setButton1Text] = useState('Answer Choice');
    const [button2Text, setButton2Text] = useState('Answer Choice');
    const [button3Text, setButton3Text] = useState('Answer Choice');
    const [button4Text, setButton4Text] = useState('Answer Choice');

    const questionsArray = require('../../assets/Apprentice_TandemFor400_Data.json');
    

    const button1 = (text) => setButton1Text(text);
    const button2 = (text) => setButton2Text(text);
    const button3 = (text) => setButton3Text(text);
    const button4 = (text) => setButton4Text(text);
    
    function testClick() {
        // console.log(questionsArray);
        let num = Math.floor(Math.random() * (questionsArray.length + 1));
        const usedQuestions = [];
        setQuestionText(questionsArray[num].question);
        button1(questionsArray[num].incorrect[0]);
        button2(questionsArray[num].incorrect[1]);
        button3(questionsArray[num].incorrect[2]);
        button4(questionsArray[num].incorrect[3]);

        usedQuestions.push(questionsArray[num]);
        console.log(usedQuestions);
        console.log(questionsArray);
    };

    return (
        <div className="contrainer-fluid" >
            <div className='card border m-4' style={{height: '425px'}}>
                <div className='card-header text-center'>
                    <div className='btn-group'>
                    <button className='btn btn-light border' id='startBtn' onClick={testClick}>
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
                    <p id='question' className="card-text text-center h5 border rounded p-2">{questionText}</p>
                    <div className='container pt-2'>
                        <button id='answerChoice1' className="btn btn-primary btn-block m-1">{button1Text}</button>
                        <button id='answerChoice2' className="btn btn-primary btn-block m-1">{button2Text}</button>
                        <button id='answerChoice3' className="btn btn-primary btn-block m-1">{button3Text}</button>
                        <button id='answerChoice4' className="btn btn-primary btn-block m-1">{button4Text}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizBody;