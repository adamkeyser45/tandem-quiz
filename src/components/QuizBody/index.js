import React from 'react';

function QuizBody() {
    return (
        <div className="contrainer-fluid" >
            <div className='card border m-4' style={{height: '425px'}}>
                <div className='card-header text-center'>
                    <div className='btn-group'>
                    <button className='btn btn-light border' id='startBtn'>
                        Press to Start!
                    </button>
                    <div className="dropdown">
                        <button className="btn btn-light border dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Options
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button type='button' className='btn btn-link' data-toggle='modal' data-target='#highScoreModal'>High Scores</button>
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
                    <h5 className="card-title text-center h3">Question <span id='questionNum'>#</span></h5>
                    <p id='question' className="card-text text-center h5 border rounded p-2">And your first question is...</p>
                    <div className='container pt-2'>
                        <button id='answerChoice1' className="btn btn-primary btn-block m-1">Answer 1</button>
                        <button id='answerChoice2' className="btn btn-primary btn-block m-1">Answer 2</button>
                        <button id='answerChoice3' className="btn btn-primary btn-block m-1">Answer 3</button>
                        <button id='answerChoice4' className="btn btn-primary btn-block m-1">Answer 4</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizBody;