import React from 'react';

function useUndo(initialPresent) {
  const [state, setState] = React.useState({
    past: [],
    present: initialPresent,
    future: [],
  });

  const canUndo = state.past.length !== 0;
  const canRedo = state.future.length !== 0;

  const undo = React.useCallback(() => {
    setState((currentState) => {
      const { past, present, future } = currentState;

      if (past.length === 0) return currentState;

      const previous = past[past.length - 1];

      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      };
    });
  }, []);

  const redo = React.useCallback(() => {
    setState((currentState) => {
      const { past, present, future } = currentState;

      if (future.length === 0) return currentState;

      const next = future[0];

      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      };
    });
  }, []);

  const set = React.useCallback((newPresent) => {
    setState((currentState) => {
      const { present, past } = currentState;

      if (newPresent === present) return currentState;

      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      };
    });
  }, []);

  const reset = React.useCallback((newPresent) => {
    setState(() => ({
      past: [],
      present: newPresent,
      future: [],
    }));
  }, []);

  return [state, { set, reset, undo, redo, canUndo, canRedo }];
}

export default useUndo;
