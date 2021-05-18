import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer #004d40 teal darken-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()}
                    <a className="grey-text text-lighten-4 right" href="https://github.com/kutsmyda/task-vending-machine">Project on GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;