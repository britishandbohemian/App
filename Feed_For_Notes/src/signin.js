import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate here

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to /home and pass the username as state
    navigate('/home', { state: { username: username } });
  };

  return (
    <section className="signin">
      <div id="imgtop" className="gradient">
        <h1 className="logo">Feed</h1>
      </div>
      <form className="signinfrm" onSubmit={handleSubmit}>
        <div id="inputs">
          <label htmlFor="username">Name</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='btnenter'>
            <button type="submit" className="btns">
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SignIn;
