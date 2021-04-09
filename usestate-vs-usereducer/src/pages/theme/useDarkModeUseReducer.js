import React from 'react';

function darkModeReducer(state, action) {
  switch (action.type) {
    case 'SET_MODE': {
      return { ...state, mode: action.mode };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
// para usar lazily initialize
function init() {
  return {
    mode: window.localStorage.getItem('colorMode') || 'dark',
  };
}

function useDarkMode() {
  const [state, dispatch] = React.useReducer(
    darkModeReducer,
    { mode: 'dark' },
    init
  );
  const { mode } = state;

  React.useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
  }, [mode]);

  // mantendo a sintaxe da api
  const setMode = React.useCallback(
    (newMode) => dispatch({ type: 'SET_MODE', mode: newMode }),
    []
  );
  return [mode, setMode];
}
export default useDarkMode;

// function useDarkMode() {
//   const [mode, setMode] = React.useReducer(
//     (prevMode, nextMode) =>
//       typeof nextMode === 'function' ? nextMode(prevMode) : nextMode,
//     'dark',
//     () => window.localStorage.getItem('colorMode') || 'dark'
//   );

//   React.useEffect(() => {
//     window.localStorage.setItem('colorMode', mode);
//   }, [mode]);
//   return [mode, setMode];
// }
// export default useDarkMode;
