import React from 'react';
import {Link} from "react-router-dom";


const PageNotFound = () => {

    return (
        <div>
            <h3 style={{textAlign: 'center', color:'darkgreen'}}>Page Not Found</h3>
            <Link to={'/'}>Go to Home</Link>
        </div>
    );
};

export default PageNotFound;