import React from 'react';

function Header() {
    return (
        <header>
            <nav className='navbar'>
                <h1 className='h2 m-2'><i class="fas fa-user-graduate"></i> The Tandem Trivia Quiz!</h1>

                <ul className='nav justify-content-end'>
                    <li className='nav-item'>
                        <div class="dropleft">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Options
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">High Scores</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header;