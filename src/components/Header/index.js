import React from 'react';

function Header() {
    return (
        <header style={{backgroundColor: '#fff4e6'}}>
            <nav className='navbar justify-content-center'>
                    <h1 className='h2 m-2 '><i class="fas fa-user-graduate"></i> The Trivia Quiz!</h1>
                    <ul className='nav justify-content-end'>
                        <li className='nav-item'>
                            <div class="dropdown">
                                <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Options
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <button type='button' className='btn btn-link' data-toggle='modal' data-target='#exampleModal'>High Scores</button>
                                </div>
                            </div>
                        </li>
                    </ul>
            </nav>
        
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">High Scores!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
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
        </header>
    )
}

export default Header;