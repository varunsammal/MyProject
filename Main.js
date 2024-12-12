import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
    const navigate = useNavigate(); // Initialize the navigate hook

    // Handle the feature click for "Student" role
    const handleStudent = () => {
        navigate('/products'); // Navigate to the /products route
    };
    const handleTeacher = () => {
        navigate('/notfound'); // Navigate to the /products route
    };

    return (
        <div className="role-selection-container">
            {/* Student Role Box */}
            <div onClick={handleStudent} className="role-box student">
                <h2 className="role-title">
                    Student
                </h2>
                <p className="role-description">Access student resources and materials</p>
            </div>

            {/* Teacher Role Box */}
            <div onClick={handleTeacher} className="role-box teacher">
                <h2 className="role-title">Teacher</h2>
                <p className="role-description">Manage classes, grades, and assignments</p>
            </div>

            {/* Admin Role Box */}
            <div onClick={handleTeacher} className="role-box admin">
                <h2 className="role-title">Admin</h2>
                <p className="role-description">Administer system, users, and settings</p>
            </div>
        </div>
    );
};

export default RoleSelection;
