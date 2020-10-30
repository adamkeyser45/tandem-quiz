import React from 'react';

function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <div className="d-flex justify-content-center">
                <a className="btn btn-outline-dark btn-social mx-1" 
                    href="https://www.facebook.com/adam.keyser">
                        <i className="fab fa-fw fa-facebook-f fa-lg"></i></a>
                <a className="btn btn-outline-dark btn-social mx-1" 
                    href="https://github.com/adamkeyser45">
                        <i className="fab fa-fw fa-github fa-lg"></i></a>
                <a className="btn btn-outline-dark btn-social mx-1" 
                    href="https://www.linkedin.com/in/adam-keyser-693741107/">
                        <i className="fab fa-fw fa-linkedin-in fa-lg"></i></a>
            </div>
            <span className="d-flex justify-content-center text-muted mx-auto">
                Copyright © Adam Keyser 2020
            </span>
        </footer>
    )
}

export default Footer;