import React from 'react';

function useUndo(initialPresent) {
  const [past, setPast] = React.useState([]);
  const [present, setPresent] = React.useState(initialPresent);
  const [future, setFuture] = React.useState([]);

  const canUndo = past.length !== 0;
  const canRedo = future.length !== 0;

  const undo = React.useCallback(() => {
    if (!canUndo) return;
    // o item passado é o ultimo elemento de past
    const previous = past[past.length - 1];
    // o novo passado será o past com esse item removido
    const newPast = past.slice(0, past.length - 1);
    setPast(newPast);
    // o presente será o item passado
    setPresent(previous);
    // o futuro será o que tem no presente, mais future
    setFuture([present, ...future]);
  }, [canUndo, future, past, present]);

  const redo = React.useCallback(() => {
    if (!canRedo) return;
    // o próximo item será o primeiro elemento de future
    const next = future[0];
    // o novo futuro será o future, com o primeiro elemento removido
    const newFuture = future.slice(1);
    // o novo passado será o past mais o item no presente
    setPast([...past, present]);
    // o novo presente será o next, que era o primeiro elemento de future
    setPresent(next);
    // o novo futuro será o future menos o primeiro item (newFuture)
    setFuture(newFuture);
  }, [canRedo, future, past, present]);

  const set = React.useCallback(
    (newPresent) => {
      if (newPresent === present) {
        return;
      }
      setPast([...past, present]);
      setPresent(newPresent);
      setFuture([]);
    },
    [past, present]
  );

  const reset = React.useCallback((newPresent) => {
    setPast([]);
    setPresent(newPresent);
    setFuture([]);
  }, []);

  return [
    { past, present, future },
    { set, reset, undo, redo, canUndo, canRedo },
  ];
}
export default useUndo;
