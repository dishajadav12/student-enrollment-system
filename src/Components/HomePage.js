import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const handleEnroll = () =>{
        navigate('/chatbot')
    }
  return (
    <div>
      <h1>Enter into Student Info System</h1>
      
        <button onClick={handleEnroll}>Enroll Now!</button>
    
    </div>
  );
};

export default HomePage;
