import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <h2 className="sidebar-title">Dashboard</h2>
            <ul className="sidebar-nav">
                <li>
                    <Link to="/add" className="sidebar-link">Add Review</Link>
                </li>
                <li>
                    <Link to="/products" className="sidebar-link">View Reviews</Link>
                </li>
                <li>
                    <Link to="/faculty" className="sidebar-link">Faculty Details</Link>
                </li>
                <li>
                    <Link to="/logout" className="sidebar-link">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
