import React from 'react';

function useDarkMode() {
  const [mode, setMode] = React.useState(
    () => window.localStorage.getItem('colorMode') || 'dark'
  );

  React.useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
  }, [mode]);

  return [mode, setMode];
}

export default useDarkMode;
