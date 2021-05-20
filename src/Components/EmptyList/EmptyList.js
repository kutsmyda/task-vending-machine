import React from 'react';
import {Link} from "react-router-dom";

const EmptyList = () => {
    return (
        <h4>List is Empty, please follow to the Controls and add  <Link to={'/editing'}>Categories here</Link></h4>
    );
};

export default EmptyList;