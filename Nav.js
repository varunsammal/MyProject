import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user'); // Get the 'user' data from localStorage
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear(); // Clear localStorage
        navigate('/signup'); // Navigate to the signup page after logging out
    };

    // Parse the user data if it exists in localStorage
    let userName = '';
    if (auth) {
        try {
            const user = JSON.parse(auth);
            userName = user.name || '';
        } catch (error) {
            console.error('Error parsing user data:', error);
            userName = '';
        }
    }

    return (
        <div className="navbar-container">
            <img
                alt="logo"
                className="navbar-logo"
                src="https://imgs.search.brave.com/4s0fVmujzpEpYpuQSDPOM0BVQ-phOfVZry-IQ3bGKsU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzY1LzM5LzIy/LzM2MF9GXzU2NTM5/MjI1NV96bFJnREhQ/bUxaZ0RqcHNZYklp/WW45SkRXVmNMZnRU/Mi5qcGc"
            />
            {auth ? (
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add">Add Feedback</Link></li>
                    <li><Link onClick={logout} to="/signup">Logout ({userName})</Link></li>
                </ul>
            ) : (
                <ul className="navbar-links navbar-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            )}
        </div>
    );
};

export default Nav;
