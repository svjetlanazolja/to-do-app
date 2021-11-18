import React from 'react';
import '../App.css';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };

  return (
    // <div className="headerTodoContainer">
    <div style={headerStyle}>
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: '1em',
          color: 'green',
          textTransform: 'lowercase',
          textAlign: 'center',
        }}
      >
        Todos
      </h1>
    </div>
  );
};

export default Header;
