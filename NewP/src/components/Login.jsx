import React from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <h1>Login</h1>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />

                    <button type="submit">Login</button>
                </form>
                <div className="footer">
                    <p>Don't have an account? <a href="/register">Register here</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
