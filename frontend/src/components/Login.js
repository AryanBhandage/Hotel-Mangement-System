import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../images/logo.png';

const Login = () => {
  const [jobId, setJobId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobId === 'admin' && password === 'admin') {
      setError(false);
      navigate('/admin'); // Redirect to Admin component
    } else {
      setError(true);
    }
  };

  return (
    <div className="full-page">
      <section className="login">
        <h1>Admin Login</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="jobId">Job ID:</label>
          <input 
            type="text" 
            id="jobId" 
            placeholder="Enter your Job ID" 
            value={jobId} 
            onChange={(e) => setJobId(e.target.value)} 
            required 
          />
          
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />

          {error && <div className="error-message">Invalid Job ID or Password</div>}

          <button type="submit" className="btn">Login</button>
          <p className="instructions">Use the universal ID and password provided by your administrator.</p>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 Luxurious Hotel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
