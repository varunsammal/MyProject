import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to allow users to navigate back to home

const Notfound = () => {
    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="notfound-link">Go to Home</Link>
        </div>
    );
};

export default Notfound;
