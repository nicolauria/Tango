import React from 'react';
import {Link} from 'react-router-dom'

const SplashPage = () => {
    return(
        <div>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
    );
}

export default SplashPage;