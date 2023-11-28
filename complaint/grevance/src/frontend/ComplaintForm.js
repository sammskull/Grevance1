
import React, { useState } from 'react';
import '../App.css';


const ComplaintForm = ({ handleComplaintSubmit}) => {
  const [complaint, setComplaint] = useState('');
  const [error, setError] = useState('');
 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!complaint) {
      setError('Please write your complaint.');
    } else {
        setError('');
        handleComplaintSubmit(complaint);
        setComplaint('');
    }
  };

  return (
    <div className="complaint-form">
      <h2>Complaint Submission</h2>
      {error && <p className="error">{error}</p>}
      <form action="PUT" onSubmit={handleSubmit}>
        <textarea
          className="textarea-field"
          placeholder="Write your complaint..."
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        ></textarea>
        <button className="submit-btn" type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;



