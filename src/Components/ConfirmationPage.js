import React from 'react';
import { useSelector } from 'react-redux';


const ConfirmationPage = () => {
  const userDetails = useSelector((state) => state.userDetails);

  return (
    <div>
      <h2>Your name {userDetails.name} aged {userDetails.age} has been added to the student system.</h2>
      <p>You may now exit.</p>
    </div>
  );
};

export default ConfirmationPage;
