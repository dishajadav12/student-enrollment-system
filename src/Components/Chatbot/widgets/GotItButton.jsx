import React from "react";

const GotItButton = (props) => {
  const handleGotIt = () => {
    props.actionProvider.handleGotIt();
  };
  

  return (
    <div className="button-container">
      <button onClick={handleGotIt} className="btn">
        Got It
      </button>
    </div>
  );
};

export default GotItButton;
