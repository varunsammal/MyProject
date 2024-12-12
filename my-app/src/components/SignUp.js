import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Check if the user is already logged in
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collectData = async () => {
        console.warn(name, email, password);
        try {
            // Make the POST request using Axios
            const response = await axios.post("http://localhost:5001/register", {
                name,
                email,
                password
            });

            // Log the response data
            console.warn(response.data);

            // Assuming the backend sends back the correct data in the 'result' and 'auth' keys
            localStorage.setItem("user", JSON.stringify(response.data.result));
            localStorage.setItem("token", JSON.stringify(response.data.auth));

            // Navigate to home page
            navigate('/');
        } catch (error) {
            console.error('Error during registration:', error);

            // Handle error response
            if (error.response) {
                // The server responded with a status other than 2xx
                alert(`Registration failed: ${error.response.data.message || error.message}`);
            } else if (error.request) {
                // The request was made but no response was received
                alert('No response from server. Please try again later.');
            } else {
                // Something else went wrong
                alert('An unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="sign-up-container">
            <h1 className="sign-up-title">Create Your Account</h1>
            <input
                className="sign-up-input"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="sign-up-input"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="sign-up-input"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={collectData} className="sign-up-button" type="button">
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;
