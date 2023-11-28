
import './App.css';
import React, { useState } from 'react';
import LoginForm from './frontend/LoginForm';
import ComplaintForm from './frontend/ComplaintForm';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submittedComplaint, setSubmittedComplaint] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);

  };

  const handleComplaintSubmit = (complaint) => {
    setSubmittedComplaint(complaint);
    
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm handleLogin={handleLogin} />
      ) : (
        <ComplaintForm handleComplaintSubmit={handleComplaintSubmit} />
      )}
      {submittedComplaint && (
        <div className="message">
          <p>Complaint submitted successfully:</p>
          
        </div>
      )}
    </div>
  );
};

export default App;
