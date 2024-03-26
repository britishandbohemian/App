import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

// Define Popup component here
function Popup({ message, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      zIndex: 100,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false); // For popup visibility
  const [errorMessage, setErrorMessage] = useState(''); // Error message to display
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!username.trim()) {
      // If the username is empty, show the popup with an error message
      setErrorMessage("Username is required!");
      setShowPopup(true);
      return;
    }

    // If validation passes, navigate to /home
    navigate('/home', { state: { username: username } });
  };
  return (
    <section className="signin">
      <div id="imgtop" className="gradient">
        <h1 className="logo" style={{color:"white"}}>Feed</h1>
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

      {showPopup && <Popup message={errorMessage} onClose={() => setShowPopup(false)} />}
    </section>
  );
}

export default SignIn;
