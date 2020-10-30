import React from 'react';

function QuizBody() {
    return (
        <div className="contrainer-fluid" >
            <div className='card border m-4' style={{height: '400px'}}>
                <div className='card-header text-center'>
                    <span className='btn btn-light'>
                        Press to Start!
                    </span>
                    
                </div>

                <div className='card-body'>
                    <h5 class="card-title text-center h3">Question 1</h5>
                    <p class="card-text text-center h5 border rounded p-2">What was Tandem's previous name?</p>
                    <div className='container pt-2'>
                        <button class="btn btn-primary btn-block m-1">Tandem</button>
                        <button class="btn btn-primary btn-block m-1">Burger Shack</button>
                        <button class="btn btn-primary btn-block m-1">Extraordinary Humans</button>
                        <button class="btn btn-primary btn-block m-1">Devmynd</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizBody;