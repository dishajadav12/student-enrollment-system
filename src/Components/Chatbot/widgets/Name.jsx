import React from 'react'

const Name = (props) => {
    const handleName = () => {
        props.actionProvider.handleName();
      };
      return (
        <div className="Name-container">
            <form action="">
                <input type='text' onChange={handleName} className="btn"/>
            </form>
        </div>
      );
}

export default Name