import React from 'react';
import { Link } from 'react-router-dom'

const SplashPage = () => {
    return(
        <div>
            <div className="splash-nav">
                <div><h1>Tango</h1></div>
                <div className="splash-bar-right">
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default SplashPage;