import React from 'react';
import useDarkModeUseState from './useDarkModeUseState';
// import useDarkModeUseReducer from './useDarkModeUseReducer';

const DarkModeCase = () => {
  const [mode, setMode] = useDarkModeUseState();
  // const [mode, setMode] = useDarkModeUseReducer();

  return (
    <div
      style={{
        padding: '30px',
        height: '300px',
        backgroundColor: mode === 'dark' ? '#292727' : '#fff',
        color: mode === 'dark' ? '#fff' : '#292727',
      }}
    >
      <h2>useDarkMode case</h2>
      <button
        onClick={() => (mode === 'dark' ? setMode('light') : setMode('dark'))}
      >
        Switch mode
      </button>
    </div>
  );
};

export default DarkModeCase;
