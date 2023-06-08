import React from 'react';

const Options = (props) => {
  const options = [
    {
      text: "Got It",
      handler: props.actionProvider.handleGotIt,
      id: 1,
    }
  ];

  return (
    <div className='button-container'> 
      {options.map((option) => (
        <button key={option.id} onClick={option.handler} className='btn'>
          {option.text}
        </button>
      ))}
    </div>
  );
}

export default Options;


