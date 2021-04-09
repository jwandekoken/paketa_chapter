import React from 'react';
// import useUndoUseState1 from './useUndoUseState1';
// import useUndoUseState2 from './useUndoUseState2';
import useUndoUseReducer from './useUndoUseReducer';

function UndoCase() {
  // const [state, { set }] = useUndoUseState1('primeiro');
  // const [state, { set }] = useUndoUseState2('primeiro');
  const [state, { set }] = useUndoUseReducer('primeiro');

  React.useEffect(() => {
    set('segundo');
  }, []);

  React.useEffect(() => {
    set('terceiro');
  }, []);

  return (
    <>
      <h2>Undo Case</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}

// state deve ser:
// {
//   "past": ["first", "second"],
//   "present": "third",
//   "future": []
// }

// falta de set no dep array?

export default UndoCase;
